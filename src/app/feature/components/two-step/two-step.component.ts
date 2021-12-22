import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { LottoHelperService } from 'src/app/shared/services/lotto-helper/lotto-helper.service';

const resultsDownloadUrl = 'https://www.txlottery.org/export/sites/lottery/Games/Texas_Two_Step/Winning_Numbers/texastwostep.csv';

const API_LOCAL = {
  TWO_STEP: 'assets/texastwostep.csv',
  TWO_STEP_LIVE: 'https://www.texaslottery.com/export/sites/lottery/Games/Powerball/Winning_Numbers/texastwostep.csv',
  ALL_OR_NOTHING: 'assets/allornothingmorning.csv',
  MEGA_MILLIONS: 'assets/megamillions.csv',
  MEGA_MILLIONS_LIVE: 'https://www.texaslottery.com/export/sites/lottery/Games/Powerball/Winning_Numbers/megamillions.csv',
  POWER_BALL: 'assets/powerball.csv',
  POWER_BALL_LIVE: 'https://www.texaslottery.com/export/sites/lottery/Games/Powerball/Winning_Numbers/powerball.csv',
  PICK_4: 'assets/daily4morning.csv',
  CASH_FIVE: 'assets/cashfive.csv',
  CASH_FIVE_LIVE: 'https://www.texaslottery.com/export/sites/lottery/Games/Powerball/Winning_Numbers/cashfive.csv',
};


@Component({
  selector: 'app-two-step',
  templateUrl: './two-step.component.html',
  styleUrls: ['./two-step.component.scss']
})
export class TwoStepComponent implements OnInit {

  constructor(public http: HttpClient, public ls: LottoHelperService, private fb: FormBuilder, private datePipe: DatePipe) { }

  hostname: string;
  number_combination: Map<string, number>;
  strike_out_numbers: any[] = [];
  most_repeated_numbers: any;
  less_repeated_numbers: any;

  _data: any = [];
  tableData: any = [];

  duplicateResults: any = [];
  patternProbability: any = [];
  oddNumbersProbablity: any = [];

  public radioGroupForm: FormGroup;
  filter: AbstractControl = new FormControl('');
  filterPattern: AbstractControl = new FormControl('');
  @ViewChild(DatatableComponent) table: DatatableComponent;
  public coulmns = [{ prop: 'name' }, { name: 'Number' }, { name: 'Ball' }, { name: 'BallIncludedInNumber' }, { name: 'Date' }, { name: 'Pattern' }, { name: 'Code' }];

  public combosObsevable: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  ngOnInit(): void {
    this.hostname = location.hostname;
    this.radioGroupForm = this.fb.group({ 'game': null });
    this.gameControl.valueChanges.subscribe(value => {
      this.retrieveData(value).subscribe(data => {
        this._data = this.tableData = data;
        this.duplicateResults = this.ls.getDuplicateResults(this.data);
        this.patternProbability = this.ls.getPatternProbability(this.data);
        this.oddNumbersProbablity = this.ls.getOddNumbersProbablity(this.data);
        this.strike_out_numbers = [];
        this.tableData.forEach((item, i) => {
          if (i <= 4)
            this.strike_out_numbers = [...this.strike_out_numbers, ...item.number]
        });
        this.strike_out_numbers = [...new Set(this.strike_out_numbers)].sort((a, b) => a - b);

        setTimeout(() => {
          this.combosObsevable.next(this.findNumberCombinations());
        }, 500);

        setTimeout(() => {
          this.findMostRepeatedNumbers();
        }, 1000);
      });
    });
    this.gameControl.patchValue('CASH_FIVE');

    // this.ls.retrieveLatestData(resultsDownloadUrl).subscribe(data => this.response.isLiveData = true);
    this.filter.valueChanges.pipe(debounceTime(400)).subscribe(value => this.updateFilter(value));
    this.filterPattern.valueChanges.pipe(debounceTime(400)).subscribe(value => this.updateFilterForCode(value));


    // if (location.hostname === 'chennamouli.github.io') {
    //   fetch(API_LOCAL.POWER_BALL_LIVE, { mode: 'no-cors' })
    //     .then(value => {
    //       console.log('Live Data: ', value);
    //       alert('Retrieved live data!')
    //     });
    // }

  }

  updateFilter(searchInput) {
    // const input = searchInput != null ? searchInput.trim() : searchInput;
    // let searchNumber = input.split(' ').map(v => v.trim()).filter(v => !isNaN(v)).map(v => parseInt(v));
    // searchNumber = [...new Set(searchNumber)]; // removes duplicates
    // // filter our data
    // const temp = this.data.filter(function (d) {
    //   const commonValues = d.number.filter(value => searchNumber.includes(value));
    //   // return d.number.toLowerCase().indexOf(val) !== -1 || !val;
    //   return commonValues.length === searchNumber.length || !searchInput;
    // });
    // update the rows
    this.tableData = this.filterResults(searchInput);
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  filterResults(searchInput) {
    const input = searchInput != null ? searchInput.trim() : searchInput;
    let searchNumber = input.split(' ').map(v => v.trim()).filter(v => !isNaN(v)).map(v => parseInt(v));
    searchNumber = [...new Set(searchNumber)]; // removes duplicates
    // filter our data
    const temp = this.data.filter(function (d) {
      const commonValues = d.number.filter(value => searchNumber.includes(value));
      // return d.number.toLowerCase().indexOf(val) !== -1 || !val;
      return commonValues.length === searchNumber.length || !searchInput;
    });
    return temp;
  }

  updateFilterForCode(searchInput: String) {
    // filter our data
    const temp = this.data.filter(d => d.pattern.indexOf(searchInput.toUpperCase()) > -1 || !searchInput);
    // const temp = this.data.filter(d => {
    //   const duplicates = Utils.getDuplicates([...d.pattern.split(''), ...searchInput.toUpperCase().split('')]).length;
    //   return !searchInput || duplicates > 0;
    // });
    // update the rows
    this.tableData = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  get data() {
    return [...this._data];
  }

  retrieveData(game: string): Observable<any> {
    const localData = this.http.get(API_LOCAL[game], {
      headers: new HttpHeaders({}),
      responseType: 'text'
    });

    let dataObservable = localData;

    if (location.hostname === 'chennamouli.github.io'
      && (game === 'TWO_STEP' || game === 'MEGA_MILLIONS_LIVE' || game === 'POWER_BALL_LIVE' || game === 'CASH_FIVE_LIVE')) {
      dataObservable = from(fetch(API_LOCAL[game + '_LIVE'], { mode: 'no-cors' })) as any;
      this.hostname = API_LOCAL[game + '_LIVE'];
    }

    return dataObservable
      .pipe(map(fileText => {
        let rows = (<string>fileText).split(/\r\n|\n/);
        return rows.map(row => {
          const temp = {};
          const values = row.split(',');
          if (values.length === 0 || values[0] === "") return;
          const result = this.parseResult(game, values);
          const patternCode = this.ls.getPatternCode(result.number, this.numberChunkWidth);
          patternCode.split('').map(v => temp[v] = (temp[v] || 0) + 1);
          return {
            name: values[0],
            date: new Date(parseInt(values[3]), parseInt(values[1]) - 1, parseInt(values[2])),
            pattern: patternCode,
            singlePatternCode: temp,
            key: result.number.join('_'),
            oddCount: result.number.filter(v => v % 2 === 1).length,
            ...result
          }
        }).filter(data => data && data.name != "").reverse();
      }));
  }

  parseResult(url: string, values: any[]): any {
    let number, ball;
    if (url === 'TWO_STEP') {
      number = [values[4], values[5], values[6], values[7]].map(v => parseInt(v)).sort((a, b) => a - b);
      ball = parseInt(values[8]);
      return {
        number: number.sort((a, b) => a < b ? -1 : 1),
        ball: ball,
        ballIncludedInNumber: number.includes(ball)
      };
    } else if (url === 'ALL_OR_NOTHING') {
      number = [values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15]].map(v => parseInt(v)).sort((a, b) => a - b);
      return {
        number: number.sort((a, b) => a < b ? -1 : 1),
      };
    } else if (url === 'MEGA_MILLIONS') {
      number = [values[4], values[5], values[6], values[7], values[8]].map(v => parseInt(v)).sort((a, b) => a - b);
      ball = parseInt(values[9]);
      return {
        number: number.sort((a, b) => a < b ? -1 : 1),
        ball: ball,
        ballIncludedInNumber: number.includes(ball)
      };
    } else if (url === 'POWER_BALL') {
      number = [values[4], values[5], values[6], values[7], values[8]].map(v => parseInt(v)).sort((a, b) => a - b);
      ball = parseInt(values[9]);
      return {
        number: number.sort((a, b) => a < b ? -1 : 1),
        ball: ball,
        ballIncludedInNumber: number.includes(ball)
      };
    } else if (url === 'PICK_4') {
      number = [values[4], values[5], values[6], values[7]].map(v => parseInt(v));
      return {
        number: number,
      };
    } else if (url === 'CASH_FIVE') {
      number = [values[4], values[5], values[6], values[7], values[8]].map(v => parseInt(v));
      return {
        number: number.sort((a, b) => a < b ? -1 : 1),
      };
    }
  }

  get numberChunkWidth() {
    if (this.gameControl.value === 'MEGA_MILLIONS' || this.gameControl.value === 'POWER_BALL') {
      return 10
    }
    return 5;
  }

  get gameControl(): AbstractControl {
    return this.radioGroupForm.get('game');
  }

  findNumberCombinations() {
    this.number_combination = new Map();
    this.tableData.forEach(item => {
      const number = item.number || [];
      for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j < 5; j++) {
          // for (let k = j + 1; k < 5; k++) {
          const key = number[i] + "_" + number[j];//+ "_" + number[k];
          this.number_combination[key] = (this.number_combination[key] || 0) + 1;
          // }
        }
      }
    });

    let t = new Map([...Object.entries(this.number_combination)].sort((a, b) => b[1] - a[1]));
    // this.number_combination = new Map(Array.from(t).slice(0, 10))
    const s = new Map(Array.from(t).slice(0, 10));
    console.log('Combos', this.number_combination = s);
    setTimeout(() => {
      return s;
    }, 2000);
  }

  findMostRepeatedNumbers() {
    // console.log('findMostRepeatedNumbers', new Date())
    const results = {};
    this.tableData
      // .filter((item, i) => i < 100)
      .forEach(item => {
        const number = item.number || [];
        number.forEach(element => {
          results[element] = (results[element] || 0) + 1;
        });
      })
    let t = [...Object.entries(results)].sort((a: any, b: any) => b[1] - a[1]);
    // console.log('Most repeated numbers', this.most_repeated_numbers = t);
    // console.log('findMostRepeatedNumbers', new Date())
    const l = t.slice(t.length / 2, t.length)
      .map((item: any) => item[0] * 1);
    const m = t.slice(0, t.length / 2)
      .map((item: any) => item[0] * 1);
    this.most_repeated_numbers = m; this.less_repeated_numbers = l;
    console.log('****', this.most_repeated_numbers = m, this.less_repeated_numbers = l);
  }

  get combos() {
    if (!this.number_combination) return null;
    return Array.from(this.number_combination).slice(0, 10);
  }

  get repeatedNumbers() {
    if (!this.most_repeated_numbers) return null;
    return this.most_repeated_numbers;
  }



}
