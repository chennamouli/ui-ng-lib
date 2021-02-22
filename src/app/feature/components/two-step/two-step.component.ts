import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { LottoHelperService } from 'src/app/shared/services/lotto-helper/lotto-helper.service';

const resultsDownloadUrl = 'https://www.txlottery.org/export/sites/lottery/Games/Texas_Two_Step/Winning_Numbers/texastwostep.csv';

const API_LOCAL = {
  TWO_STEP: 'assets/texastwostep.csv',
  ALL_OR_NOTHING: 'assets/allornothingmorning.csv',
  MEGA_MILLIONS: 'assets/megamillions.csv',
  POWER_BALL: 'assets/powerball.csv',
  PICK_4: 'assets/daily4morning.csv',
};

@Component({
  selector: 'app-two-step',
  templateUrl: './two-step.component.html',
  styleUrls: ['./two-step.component.scss']
})
export class TwoStepComponent implements OnInit {

  constructor(public http: HttpClient, public ls: LottoHelperService, private fb: FormBuilder, private datePipe: DatePipe) { }

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

  ngOnInit(): void {
    this.radioGroupForm = this.fb.group({ 'game': null });
    this.gameControl.valueChanges.subscribe(value => {
      this.retrieveData(value).subscribe(data => {
        this._data = this.tableData = data;
        this.duplicateResults = this.ls.getDuplicateResults(this.data);
        this.patternProbability = this.ls.getPatternProbability(this.data);
        this.oddNumbersProbablity = this.ls.getOddNumbersProbablity(this.data);
      });
    });
    this.gameControl.patchValue('TWO_STEP');

    // this.ls.retrieveLatestData(resultsDownloadUrl).subscribe(data => this.response.isLiveData = true);
    this.filter.valueChanges.pipe(debounceTime(400)).subscribe(value => this.updateFilter(value));
    this.filterPattern.valueChanges.pipe(debounceTime(400)).subscribe(value => this.updateFilterForCode(value));

  }

  updateFilter(searchInput) {
    let searchNumber = searchInput.split(',').map(v => v.trim()).filter(v => !isNaN(v)).map(v => parseInt(v));
    searchNumber = [...new Set(searchNumber)]; // removes duplicates
    // filter our data
    const temp = this.data.filter(function (d) {
      const commonValues = d.number.filter(value => searchNumber.includes(value));
      // return d.number.toLowerCase().indexOf(val) !== -1 || !val;
      return commonValues.length === searchNumber.length || !searchInput;
    });
    // update the rows
    this.tableData = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
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
    return this.http.get(API_LOCAL[game], {
      headers: new HttpHeaders({}),
      responseType: 'text'
    })
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
        number: number,
        ball: ball,
        ballIncludedInNumber: number.includes(ball)
      };
    } else if (url === 'ALL_OR_NOTHING') {
      number = [values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15]].map(v => parseInt(v)).sort((a, b) => a - b);
      return {
        number: number,
      };
    } else if (url === 'MEGA_MILLIONS') {
      number = [values[4], values[5], values[6], values[7], values[8]].map(v => parseInt(v)).sort((a, b) => a - b);
      ball = parseInt(values[9]);
      return {
        number: number,
        ball: ball,
        ballIncludedInNumber: number.includes(ball)
      };
    } else if (url === 'POWER_BALL') {
      number = [values[4], values[5], values[6], values[7], values[8]].map(v => parseInt(v)).sort((a, b) => a - b);
      ball = parseInt(values[9]);
      return {
        number: number,
        ball: ball,
        ballIncludedInNumber: number.includes(ball)
      };
    } else if (url === 'PICK_4') {
      number = [values[4], values[5], values[6], values[7]].map(v => parseInt(v));
      return {
        number: number,
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

}
