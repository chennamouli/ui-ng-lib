import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

const codes = ['B', 'C', 'G', 'R', 'T', 'P', 'Y'];

@Component({
  selector: 'app-two-step',
  templateUrl: './two-step.component.html',
  styleUrls: ['./two-step.component.scss']
})
export class TwoStepComponent implements OnInit {

  constructor(public http: HttpClient) { }

  _data: any = [];
  tableData: any = [];
  response: any = {};
  columns = [{ prop: 'name' }, { name: 'Number' }, { name: 'Ball' }, { name: 'BallIncludedInNumber' }, { name: 'Date' }, { name: 'Pattern' }, { name: 'Code' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  filter: AbstractControl = new FormControl('');
  filterCode: AbstractControl = new FormControl('');

  ngOnInit(): void {
    // this.retrieveLatestData().subscribe();
    this.filter.valueChanges.pipe(debounceTime(400)).subscribe(value => this.updateFilter(value));
    this.filterCode.valueChanges.pipe(debounceTime(400)).subscribe(value => this.updateFilterForCode(value));
    this.retrieveData().subscribe(data => {
      this._data = this.tableData = data;
      this.response = data;
    });
  }

  getPatternCode(result: any[]) {
    return result.map(v => {
      if (v <= 5) return codes[0];
      else if (v <= 10) return codes[1];
      else if (v <= 15) return codes[2];
      else if (v <= 20) return codes[3];
      else if (v <= 25) return codes[4];
      else if (v <= 30) return codes[5];
      else if (v <= 35) return codes[6];
    }).join('');
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
    this.data.forEach(item => {
      map[item.pattern] = (map[item.pattern] || 0) + 1;
    });
    const total = this.data.length;
    Object.keys(map).map(key => map[key] = (map[key] * 100 / total).toFixed(2));
    return Object.entries(map).map(a => ({ code: a[0], probability: a[1] }));
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
          return {
            name: values[0],
            number: number,
            ball: ball,
            ballIncludedInNumber: number.includes(ball),
            date: new Date(parseInt(values[3]), parseInt(values[1]) - 1, parseInt(values[2])),
            pattern: this.getPatternCode(number),
            key: number.join('_'),
            oddsCount: number.filter(v => v % 2 === 1).length
          }
        }).filter(data => data.name != "").reverse();
      }));
  }

  retrieveLatestData(): Observable<any> {
    return this.http.get('https://www.txlottery.org/export/sites/lottery/Games/Texas_Two_Step/Winning_Numbers/texastwostep.csv', {
      headers: new HttpHeaders({}),
      responseType: 'text'
    }).pipe(tap(data => console.log('latest data', data)));
  }

}
