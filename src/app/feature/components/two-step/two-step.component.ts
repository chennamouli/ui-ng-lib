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

  duplicateResults: any = [];
  patternProbability: any = [];
  oddNumbersProbablity: any = [];

  filter: AbstractControl = new FormControl('');
  filterCode: AbstractControl = new FormControl('');
  @ViewChild(DatatableComponent) table: DatatableComponent;
  columns = [{ prop: 'name' }, { name: 'Number' }, { name: 'Ball' }, { name: 'BallIncludedInNumber' }, { name: 'Date' }, { name: 'Pattern' }, { name: 'Code' }];

  ngOnInit(): void {
    // this.ls.retrieveLatestData(resultsDownloadUrl).subscribe(data => this.response.isLiveData = true);
    this.filter.valueChanges.pipe(debounceTime(400)).subscribe(value => this.updateFilter(value));
    this.filterCode.valueChanges.pipe(debounceTime(400)).subscribe(value => this.updateFilterForCode(value));
    this.retrieveData().subscribe(data => {
      this._data = this.tableData = data;
      this.duplicateResults = this.ls.getDuplicateResults(this.data);
      this.patternProbability = this.ls.getPatternProbability(this.data);
      this.oddNumbersProbablity = this.ls.getOddNumbersProbablity(this.data);
    });
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
    // update the rows
    this.tableData = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  get data() {
    return [...this._data];
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
          patternCode.split('').map(v => temp[v] = (temp[v] || 0) + 1);
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
          }
        }).filter(data => data.name != "").reverse();
      }));
  }

}
