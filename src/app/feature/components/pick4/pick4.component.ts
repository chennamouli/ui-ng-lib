import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pick4',
  templateUrl: './pick4.component.html',
  styleUrls: ['./pick4.component.scss']
})
export class Pick4Component implements OnInit {

  constructor(public http: HttpClient) { }

  data: any = [];
  response: any = {};

  ngOnInit(): void {
    this.response.name = 'Pick 4';

    // get results and convert to nice json array
    this.http.get('assets/p4.json').subscribe((results: any[]) => {
      results.forEach(item => {
        this.data.push({ name: 'Pick 4', 'event': 'M', number: '' + item.d1 + item.d2 + item.d3 + item.d4, ball: item.ball, date: new Date(item.year, item.month - 1, item.day) });
      });

      const totalEvents = this.response.total = this.data.length;

      // total count of digits
      this.data.forEach(item => {
        for (let i = 0; i < 10; i++) {
          if (item.number.toString().indexOf('' + i) >= 0) this.response['digit' + i + '_count'] = (this.response['digit' + i + '_count'] || 0) + 1;
        }
      });

      // probability of digits
      for (let i = 0; i < 10; i++) {
        this.response['digit' + i + '_probablity'] = this.response['digit' + i + '_count'] ? parseFloat('' + this.response['digit' + i + '_count'] * 100 / totalEvents).toFixed(2) + '%' : '0%';
      }

      // duplicate numbers between 0000 to 9999
      const wonNumbersMap = {};
      this.data.filter(item => !wonNumbersMap[item.number]).forEach(item => {
        wonNumbersMap[item.number] = (wonNumbersMap[item.number] * 1 || 0) + 1;
      });
      const duplicateNumbersMap = {};
      Object.keys(wonNumbersMap).forEach(number => {
        if (wonNumbersMap[number] > 1) duplicateNumbersMap[number] = wonNumbersMap[number];
      });
      this.response['duplicateNumbersTotal'] = Object.keys(duplicateNumbersMap).length;
      // this.response['duplicateNumbers'] = duplicateNumbersMap;

      // won numbers numbers between 0000 to 9999
      // const wonNumbers = [];
      // this.data.filter(item => wonNumbers.indexOf(item.number) < 0).forEach(item => {
      //   wonNumbers.push(item.number);
      // });
      // this.response['wonNumbersTotal'] = wonNumbers.length;
      // this.response['wonNumbers'] = wonNumbers;

      // number range between 0000 to 9999
      const sortedNumbers = this.data.map(item => item.number).sort();
      this.response['0_2500_total'] = sortedNumbers.filter(item => item < 2500).length;
      this.response['2500_5000_total'] = sortedNumbers.filter(item => item >= 2500 && item < 5000).length;
      this.response['5000_7500_total'] = sortedNumbers.filter(item => item >= 5000 && item < 7500).length;
      this.response['7500_10000_total'] = sortedNumbers.filter(item => item >= 7500 && item < 10000).length;

      this.response['6000_7000_total'] = sortedNumbers.filter(item => item >= 6000 && item < 7000).length;

      this.response['digit6_occurrance0'] = sortedNumbers.filter(item => item.toString().indexOf('6') === 0).length;
      this.response['digit6_occurrance1'] = sortedNumbers.filter(item => item.toString().indexOf('6') === 1).length;
      this.response['digit6_occurrance2'] = sortedNumbers.filter(item => item.toString().indexOf('6') === 2).length;
      this.response['digit6_occurrance3'] = sortedNumbers.filter(item => item.toString().indexOf('6') === 3).length;

      this.response['digit8_occurrance0'] = sortedNumbers.filter(item => item.toString().indexOf('8') === 0).length;
      this.response['digit8_occurrance1'] = sortedNumbers.filter(item => item.toString().indexOf('8') === 1).length;
      this.response['digit8_occurrance2'] = sortedNumbers.filter(item => item.toString().indexOf('8') === 2).length;
      this.response['digit8_occurrance3'] = sortedNumbers.filter(item => item.toString().indexOf('8') === 3).length;


      this.response['digit_combination_occurrance'] =
        sortedNumbers.filter(item => item.toString().indexOf('1') >= 0 && item.toString().indexOf('9') >= 0).length;


      this.response['2_digit_combination_occurrance'] = [];
      for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
          const o = {};
          o['key'] = i + "_" + j;
          o['value'] = this.response['digit_combination_occurrance_' + i + "_" + j] =
            sortedNumbers.filter(item => item.toString().indexOf(i) >= 0 && item.toString().indexOf(j) >= 0).length;
          this.response['2_digit_combination_occurrance'].push(o);
        }
      }
      this.response['2_digit_combination_occurrance'].sort((a, b) => a.value < b.value ? 1 : -1);

      this.response['3_digit_combination_occurrance'] = [];
      for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
          for (let k = j + 1; k < 10; k++) {
            const o = {};
            o['key'] = i + "_" + j + "_" + k;
            o['value'] = sortedNumbers.filter(item => item.toString().indexOf(i) >= 0 && item.toString().indexOf(j) >= 0 && item.toString().indexOf(k) >= 0).length;
            this.response['3_digit_combination_occurrance'].push(o);
          }
        }
      }
      this.response['3_digit_combination_occurrance'].sort((a, b) => a.value < b.value ? 1 : -1);


      this.response['4_digit_combination_occurrance'] = [];
      for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
          for (let k = j + 1; k < 10; k++) {
            for (let l = k + 1; l < 10; l++) {
              const o = {};
              o['key'] = i + "_" + j + "_" + k + "_" + l;
              o['value'] = sortedNumbers.filter(item => item.toString().indexOf(i) >= 0 && item.toString().indexOf(j) >= 0 && item.toString().indexOf(k) >= 0 && item.toString().indexOf(l) >= 0).length;
              this.response['4_digit_combination_occurrance'].push(o);
            }
          }
        }
      }
      this.response['4_digit_combination_occurrance'].sort((a, b) => a.value < b.value ? 1 : -1);


      // last occurance of the combination
      this.response['given_digit_combination_occurrance'] = [];
      this.response['given_digit_combination_occurrance'] = this.data.filter(item => item.number.indexOf('0') >= 0 && item.number.indexOf('6') >= 0 && item.number.indexOf('7') >= 0);

    });

  }

  get prettyResponse() {
    return JSON.stringify(this.response, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }

}
