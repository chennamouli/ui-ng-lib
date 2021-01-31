import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    this.getData();
    this.response.name = 'All Or Nothing';

    this.getData().subscribe(data => {
      this.data = data;
      // this.data = [
      //   { name: 'All or Nothing', game: 'M', number: [4, 8, 9, 10, 11, 12, 14, 17, 19, 20, 22, 23], date: '2021-01-23' },
      //   { name: 'All or Nothing', game: 'M', number: [1, 4, 6, 10, 12, 14, 15, 16, 17, 19, 20, 21], date: '2021-01-22' },
      //   { name: 'All or Nothing', game: 'M', number: [4, 5, 9, 10, 13, 14, 17, 18, 20, 21, 22, 24], date: '2021-01-21' },
      //   { name: 'All or Nothing', game: 'M', number: [1, 2, 3, 4, 9, 12, 13, 16, 17, 20, 22, 24], date: '2021-01-20' },
      //   { name: 'All or Nothing', game: 'M', number: [2, 4, 5, 9, 10, 11, 15, 20, 21, 22, 23, 24], date: '2021-01-19' }
      // ];
      const totalEvents = this.response.total = this.data.length;
      const allNumbers = this.data.map(item => item.number);

      // total count by digit
      // const tempCount = {};
      // this.data.forEach(item => {
      //   for (let i = 1; i <= 24; i++) {
      //     if (item.number.indexOf(i) >= 0) tempCount['digit' + i + '_count'] = (tempCount['digit' + i + '_count'] || 0) + 1;
      //   }
      // });

      // probability of digit
      // this.response.probability = [];
      // for (let i = 1; i <= Object.keys(tempCount).length; i++) {
      //   const o = {};
      //   o['key'] = 'digit_' + i;
      //   o['value'] = tempCount['digit' + i + '_count'] ? parseFloat('' + tempCount['digit' + i + '_count'] * 100 / totalEvents).toFixed(2) + '%' : '0%';
      //   o['count'] = tempCount['digit' + i + '_count'];
      //   //this.response.probability.push(o);
      // }
      // this.response.probability.sort((a, b) => a.count < b.count ? 1 : -1)


      // 6 digit combination occurrance
      // this.response['6_digit_combination_occurrance'] = [];
      // for (let i = 1; i <= 24; i++) {
      //   for (let j = i + 1; j <= 24; j++) {
      //     for (let k = j + 1; k <= 24; k++) {
      //       for (let l = k + 1; l <= 24; l++) {
      //         for (let m = l + 1; m <= 24; m++) {
      //           for (let n = m + 1; n <= 24; n++) {
      //             const o = {};
      //             o['key'] = i + "_" + j + "_" + k + "_" + l + "_" + m + "_" + n;
      //             o['value'] = allNumbers.filter(item =>
      //               item.indexOf(i) >= 0 && item.indexOf(j) >= 0 &&
      //               item.indexOf(k) >= 0 && item.indexOf(l) >= 0 &&
      //               item.indexOf(m) >= 0 && item.indexOf(n) >= 0).length;
      //             this.response['6_digit_combination_occurrance'].push(o);
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
      // this.response['6_digit_combination_occurrance'].sort((a, b) => a.value < b.value ? 1 : -1).slice(0, 10);
      // this.response['6_digit_combination_occurrance'] = [...this.response['6_digit_combination_occurrance'].slice(0, 10), ...this.response['6_digit_combination_occurrance'].slice(this.response['6_digit_combination_occurrance'].length - 10, this.response['6_digit_combination_occurrance'].length)];


      // 7 digit combination occurrance
      // this.response['7_digit_combination_occurrance'] = [];
      // for (let i = 1; i <= 24; i++) {
      //   for (let j = i + 1; j <= 24; j++) {
      //     for (let k = j + 1; k <= 24; k++) {
      //       for (let l = k + 1; l <= 24; l++) {
      //         for (let m = l + 1; m <= 24; m++) {
      //           for (let n = m + 1; n <= 24; n++) {
      //             for (let o = n + 1; o <= 24; o++) {
      //               const obj = {};
      //               obj['key'] = i + "_" + j + "_" + k + "_" + l + "_" + m + "_" + n + "_" + o;
      //               obj['value'] = allNumbers.filter(item =>
      //                 item.indexOf(i) >= 0 && item.indexOf(j) >= 0 &&
      //                 item.indexOf(k) >= 0 && item.indexOf(l) >= 0 &&
      //                 item.indexOf(m) >= 0 && item.indexOf(n) >= 0 &&
      //                 item.indexOf(o) >= 0).length;
      //               this.response['7_digit_combination_occurrance'].push(obj);
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
      // this.response['7_digit_combination_occurrance'].sort((a, b) => a.value < b.value ? 1 : -1).slice(0, 10);
      // this.response['7_digit_combination_occurrance'] = [...this.response['7_digit_combination_occurrance'].slice(0, 10), ...this.response['7_digit_combination_occurrance'].slice(this.response['7_digit_combination_occurrance'].length - 10, this.response['7_digit_combination_occurrance'].length)];


      // const combos = allNumbers.map((item: number[]) => item.sort((a, b) => a - b).join('_'));
      // const combosKeyMap = {};
      // combos.forEach(item => {
      //   combosKeyMap[item] = (combosKeyMap[item] || 0) + 1;
      // });
      // console.log('Duplicate: ', Object.keys(combosKeyMap).filter(key => combosKeyMap[key] > 1));


      // 8 digit combination occurrance



      // 4 digit combination occurrance
      // this.response['4_digit_combination_occurrance'] = [];
      // for (let i = 1; i <= 24; i++) {
      //   for (let j = i + 1; j <= 24; j++) {
      //     for (let k = j + 1; k <= 24; k++) {
      //       for (let l = k + 1; l <= 24; l++) {
      //         const o = {};
      //         o['key'] = i + "_" + j + "_" + k + "_" + l;
      //         o['value'] = allNumbers.filter(item =>
      //           item.indexOf(i) >= 0 && item.indexOf(j) >= 0 &&
      //           item.indexOf(k) >= 0 && item.indexOf(l) >= 0).length;
      //         this.response['4_digit_combination_occurrance'].push(o);
      //       }
      //     }
      //   }
      // }
      // this.response['4_digit_combination_occurrance'].sort((a, b) => a.value < b.value ? 1 : -1).slice(0, 10);
      // this.response['4_digit_combination_occurrance'] = [...this.response['4_digit_combination_occurrance'].slice(0, 10), ...this.response['4_digit_combination_occurrance'].slice(this.response['4_digit_combination_occurrance'].length - 10, this.response['4_digit_combination_occurrance'].length)];


      // todo
      this.response['given_digit_combination'] = this.response['given_digit_combination_occurrance'] = null;

      // this.digitCombo8(allNumbers);
      this.lastOccuranceOfComobo([1, 2, 3, 4, 5, 6, 7, 11, 23, 24]);
      // this.findMostMatchedComboNumber();
    });
  }

  lastOccuranceOfComobo(givenNumber: any[]) {
    const list = this.data.filter(item => {
      const matched = givenNumber.filter(i => item.number.includes(i));
      item.matchedCount = matched && matched.length;
      item.matched = matched;
      return item.matchedCount <= 2 || item.matchedCount >= 10;
    });
    this.response['given_digit_combination_occurrance'] = [...list].slice(list.length - 10, list.length);
    this.response['given_digit_combination_occurrance_hightest'] = [...list]
      .sort((a, b) => a.matchedCount - b.matchedCount)
      .map(item => ({ date: item.date, matchedCount: item.matchedCount, number: item.number.join(" "), matched: item.matched.join(" ") }));
    this.response['given_digit_combination_occurrance_hightest_length'] = this.response['given_digit_combination_occurrance_hightest'].length;
  }

  findMostMatchedComboNumber() {
    const r: object = {};
    const l = this.data.length;
    let itrs = 0;
    const startTime = new Date().getMilliseconds();
    for (let i = 0; i < l; i++) {
      for (let j = i + 1; j < l; j++) {
        if (this.data[i] && this.data[j]) {
          const key = this.data[i].number.filter(item => this.data[j].number.includes(item)).join("_");
          r[key] = (r[key] || 0) + 1;
          itrs++;
        }
      }
    }
    const top10 = Object.entries(r)
      .filter(([key, value]) => key !== "")
      .map(([key, value]) => ({ key: key, value: value, matchedCount: key.split("_").length }))
      .filter(item => item.value > 2 && item.matchedCount === 8)
      .sort((a, b) => b.value - a.value)
      .slice(0, 200);
    this.response['mostMatchedComboNumber_top10'] = top10;
    this.response['mostMatchedComboNumber_iterations'] = itrs;
    this.response['mostMatchedComboNumber_et_ms'] = new Date().getMilliseconds() - startTime;
  }

  digitCombo8(allNumbers: any[]) {
    this.response['8_digit_combination_occurrance'] = [];
    for (let i = 1; i <= 24; i++) {
      for (let j = i + 1; j <= 24; j++) {
        for (let k = j + 1; k <= 24; k++) {
          for (let l = k + 1; l <= 24; l++) {
            for (let m = l + 1; m <= 24; m++) {
              for (let n = m + 1; n <= 24; n++) {
                for (let o = n + 1; o <= 24; o++) {
                  for (let p = o + 1; p <= 24; p++) {
                    const obj = {};
                    obj['key'] = i + "_" + j + "_" + k + "_" + l + "_" + m + "_" + n + "_" + o + "_" + p;
                    obj['value'] = allNumbers.filter(item =>
                      item.indexOf(i) >= 0 && item.indexOf(j) >= 0 &&
                      item.indexOf(k) >= 0 && item.indexOf(l) >= 0 &&
                      item.indexOf(m) >= 0 && item.indexOf(n) >= 0 &&
                      item.indexOf(o) >= 0 && item.indexOf(p) >= 0).length;
                    this.response['8_digit_combination_occurrance'].push(obj);
                  }
                }
              }
            }
          }
        }
      }
    }
    this.response['8_digit_combination_occurrance'].sort((a, b) => a.value < b.value ? 1 : -1).slice(0, 10);
    this.response['8_digit_combination_occurrance'] = [...this.response['8_digit_combination_occurrance'].slice(0, 10), ...this.response['8_digit_combination_occurrance'].slice(this.response['8_digit_combination_occurrance'].length - 10, this.response['8_digit_combination_occurrance'].length)];

  }

  get prettyResponse() {
    return JSON.stringify(this.response, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }

  getData(): Observable<any> {
    return this.http.get('assets/allornothingmorning.csv', {
      headers: new HttpHeaders({}),
      responseType: 'text'
    })
      .pipe(map(fileText => {
        let rows = (<string>fileText).split(/\r\n|\n/);
        return rows.map(row => {
          const values = row.split(',');
          return {
            name: values[0],
            number: [values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15]].map(v => parseInt(v)).sort((a, b) => a - b),
            date: new Date(parseInt(values[3]), parseInt(values[1]) - 1, parseInt(values[2]))
          }
        });
      }));
  }



}
