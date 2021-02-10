import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { LottoHelperService } from 'src/app/shared/services/lotto-helper/lotto-helper.service';

const resultsDownloadUrl = 'https://www.txlottery.org/export/sites/lottery/Games/Texas_Two_Step/Winning_Numbers/texastwostep.csv';

@Component({
  selector: 'app-two-step',
  templateUrl: './two-step.component.html',
  styleUrls: ['./two-step.component.scss']
})
export class TwoStepComponent implements OnInit {

  constructor(public http: HttpClient, public ls: LottoHelperService) { }

  _data: any = [];
  tableData: any = [];
  response: any = {};
  columns = [{ prop: 'name' }, { name: 'Number' }, { name: 'Ball' }, { name: 'BallIncludedInNumber' }, { name: 'Date' }, { name: 'Pattern' }, { name: 'Code' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  filter: AbstractControl = new FormControl('');
  filterCode: AbstractControl = new FormControl('');

  ngOnInit(): void {
    this.ls.retrieveLatestData(resultsDownloadUrl).subscribe(data => this.response.isLiveData = true);
    this.filter.valueChanges.pipe(debounceTime(400)).subscribe(value => this.updateFilter(value));
    this.filterCode.valueChanges.pipe(debounceTime(400)).subscribe(value => this.updateFilterForCode(value));
    this.retrieveData().subscribe(data => {
      this._data = this.tableData = data;
      this.oddNumbersProbability();
    });
  }

  oddNumbersProbability() {
    this.response.oddNumbersProbablity = {};
    this.response.oddNumbersProbablity.odd0 = this.oddNumberProbability(0);
    this.response.oddNumbersProbablity.odd1 = this.oddNumberProbability(1);
    this.response.oddNumbersProbablity.odd2 = this.oddNumberProbability(2);
    this.response.oddNumbersProbablity.odd3 = this.oddNumberProbability(3);
    this.response.oddNumbersProbablity.even0 = this.evenNumberProbability(0);
    this.response.oddNumbersProbablity.even1 = this.evenNumberProbability(1);
    this.response.oddNumbersProbablity.even2 = this.evenNumberProbability(2);
    this.response.oddNumbersProbablity.even3 = this.evenNumberProbability(3);
  }

  private oddNumberProbability(oddCount: number): string {
    let odd = this.data.filter(item => item.oddCount === oddCount).length;
    return (odd * 100 / this.data.length).toFixed(2) + '%';
  }

  private evenNumberProbability(evenCount: number): string {
    let odd = this.data.filter(item => item.evenCount === evenCount).length;
    return (odd * 100 / this.data.length).toFixed(2) + '%';
  }

  updateFilter(searchInput) {
    let searchNumber = searchInput.split(',').map(v => v.trim()).filter(v => !isNaN(v)).map(v => parseInt(v));
    searchNumber = [...new Set(searchNumber)]; // removes duplicates
    console.log('filter text', searchNumber);
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
    // update the rows
    this.tableData = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  getPatternProbability() {
    const map = {};
    const counts = {};
    this.data.forEach(item => {
      map[item.pattern] = (map[item.pattern] || 0) + 1;
      Object.keys(item.singlePatternCode).forEach(key => counts[key] = (counts[key] || 0) + item.singlePatternCode[key]);
    });
    const total = this.data.length;
    Object.keys(map).map(key => map[key] = (map[key] * 100 / total).toFixed(2));
    const results: any[] = Object.entries(map).map(a => ({ code: a[0], probability: a[1] }));
    Object.keys(counts).forEach(key => results.push(({ code: key, probability: (counts[key] * 100 / total).toFixed(2) })));
    return results;
  }

  getDuplicateResults() {
    const map = {};
    this.data.forEach(item => {
      let ar = map[item.key] || [];
      ar.push(item);
      map[item.key] = ar;
    });
    const temp = Object.entries(map)
      .filter((entry: any) => entry[1].length > 1)
      .map((a: any) => a[1]);
    return [].concat.apply([], temp);
  }

  get data() {
    return [...this._data];
  }

  get prettyResponse() {
    return JSON.stringify(this.response, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }

  retrieveData(): Observable<any> {
    return this.http.get('assets/texastwostep.csv', {
      headers: new HttpHeaders({}),
      responseType: 'text'
    })
      .pipe(map(fileText => {
        let rows = (<string>fileText).split(/\r\n|\n/);
        return rows.map(row => {
          const values = row.split(',');
          const number = [values[4], values[5], values[6], values[7]].map(v => parseInt(v)).sort((a, b) => a - b);
          const ball = parseInt(values[8]);
          const patternCode = this.ls.getPatternCode(number);
          const temp = {};
          const singlePatternCode = patternCode.split('').map(v => temp[v] = (temp[v] || 0) + 1);
          return {
            name: values[0],
            number: number,
            ball: ball,
            ballIncludedInNumber: number.includes(ball),
            date: new Date(parseInt(values[3]), parseInt(values[1]) - 1, parseInt(values[2])),
            pattern: patternCode,
            singlePatternCode: temp,
            key: number.join('_'),
            oddCount: number.filter(v => v % 2 === 1).length,
            evenCount: number.filter(v => v % 2 === 0).length
          }
        }).filter(data => data.name != "").reverse();
      }));
  }

}
