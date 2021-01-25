import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-or-nothing',
  templateUrl: './all-or-nothing.component.html',
  styleUrls: ['./all-or-nothing.component.scss']
})
export class AllOrNothingComponent implements OnInit {

  constructor(public http: HttpClient) { }

  data: any = [];
  response: any = {};

  ngOnInit(): void {
    this.response.name = 'All Or Nothing';

    this.data = [
      { name: 'All or Nothing', game: 'M', number: [4, 8, 9, 10, 11, 12, 14, 17, 19, 20, 22, 23], date: '2021-01-23' },
      { name: 'All or Nothing', game: 'M', number: [1, 4, 6, 10, 12, 14, 15, 16, 17, 19, 20, 21], date: '2021-01-22' },
      { name: 'All or Nothing', game: 'M', number: [4, 5, 9, 10, 13, 14, 17, 18, 20, 21, 22, 24], date: '2021-01-21' },
      { name: 'All or Nothing', game: 'M', number: [1, 2, 3, 4, 9, 12, 13, 16, 17, 20, 22, 24], date: '2021-01-20' },
      { name: 'All or Nothing', game: 'M', number: [2, 4, 5, 9, 10, 11, 15, 20, 21, 22, 23, 24], date: '2021-01-19' }
    ];
    const totalEvents = this.response.total = this.data.length;

    // total count of digits
    const tempCount = {};
    this.data.forEach(item => {
      for (let i = 1; i <= 24; i++) {
        if (item.number.indexOf(i) >= 0) tempCount['digit' + i + '_count'] = (tempCount['digit' + i + '_count'] || 0) + 1;
      }
    });

    // probability of digits
    this.response.probability = [];
    for (let i = 1; i <= Object.keys(tempCount).length; i++) {
      const o = {};
      o['key'] = 'digit_' + i;
      o['value'] = tempCount['digit' + i + '_count'] ? parseFloat('' + tempCount['digit' + i + '_count'] * 100 / totalEvents).toFixed(2) + '%' : '0%';
      o['count'] = tempCount['digit' + i + '_count'];
      this.response.probability.push(o);
    }
    this.response.probability.sort((a, b) => a.count < b.count ? 1 : -1)

    // digit combination occurrance
    const startTime = new Date().getMilliseconds();
    const allNumbers = this.data.map(item => item.number);
    this.response['digit_combination_occurrance'] = [];
    for (let i = 1; i <= 24; i++) {
      for (let j = i + 1; j <= 24; j++) {
        for (let k = j + 1; k <= 24; k++) {
          for (let l = k + 1; l <= 24; l++) {
            for (let m = l + 1; m <= 24; m++) {
              for (let n = m + 1; n <= 24; n++) {
                const o = {};
                o['key'] = i + "_" + j + "_" + k + "_" + l + "_" + m + "_" + n;
                // o['key'] = i + "_" + j + "_" + k + "_" + l + "_" + m + "_" + n;
                o['value'] = allNumbers.filter(item =>
                  item.indexOf(i) >= 0 && item.indexOf(j) >= 0 &&
                  item.indexOf(k) >= 0 && item.indexOf(l) >= 0 &&
                  item.indexOf(m) >= 0 && item.indexOf(n) >= 0).length;
                this.response['digit_combination_occurrance'].push(o);
              }
            }
          }
        }
      }
    }
    this.response['digit_combination_occurrance'].sort((a, b) => a.value < b.value ? 1 : -1).slice(0, 10);
    this.response['digit_combination_occurrance'] = [...this.response['digit_combination_occurrance'].slice(0, 10), ...this.response['digit_combination_occurrance'].slice(this.response['digit_combination_occurrance'].length - 10, this.response['digit_combination_occurrance'].length)];
    this.response['digit_combination_occurrance_elapsedTime'] = (new Date().getMilliseconds() - startTime) / 1000 + 'sec';




  }

  get prettyResponse() {
    return JSON.stringify(this.response, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }

}
