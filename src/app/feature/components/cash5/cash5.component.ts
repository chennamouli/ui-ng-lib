import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cash5',
  templateUrl: './cash5.component.html',
  styleUrls: ['./cash5.component.scss']
})
export class Cash5Component implements OnInit {

  constructor(public http: HttpClient) { }

  _data: any = [];
  response: any = {};
  minStartDate = new Date(2019, 0, 1);



  ngOnInit(): void {
    this.getData().subscribe(data => {
      this.response.minStartDate = this.minStartDate;
      this._data = data.filter(item => item.date > this.minStartDate);
      const totalEvents = this.response.total = this.data.length;
      const allNumbers = this.data.map(item => item.number);
      setTimeout(() => {
        //    4, 8, 9, 10, 12, 27, 18, 19, 20, 23, 30, 29, 32, 34, 35 --> 80
        // 1, 4, 8, 9, 10, 12, 27, 18, 19, 20, 23, 30, 29, 32, 34, 35 --> 100
        // 3, 4, 8, 9, 10, 12, 27, 18, 19, 20, 23, 30, 29, 32, 34, 35 --> 105
        // 3, 4, 8, 9, 10, 12, 17, 18, 19, 20, 23, 27, 29, 30, 32, 34 --> 110
        // 3, 4, 8, 9, 10, 12, 17, 18, 19, 20, 23, 26, 27, 29, 30, 32, 34 --> 131
        // this.lastOccuranceOfComobo([3, 4, 8, 9, 10, 12, 17, 18, 19, 20, 23, 26, 27, 29, 30, 32, 34]);
        // this.findMostMatchedComboNumber();
        // this.evenOddProbability(allNumbers);
        this.anyDigitNotFromPre();
      }, 100);
    });
  }

  anyDigitNotFromPre() {
    let count = 0;
    const d = this.data.reverse();//.slice(0, 4);
    d.forEach((item, index) => {
      const f = item.number.filter(i => {
        const b = index + 4 < d.length &&
          !d[index + 1].number.includes(i) && !d[index + 2].number.includes(i) &&
          !d[index + 3].number.includes(i) && !d[index + 4].number.includes(i);// &&
        //!d[index + 5].number.includes(i);
        return b;
      });
      if (f.length === 5) { count++; console.log(index, item.number, count, item.date); }
    });
  }

  evenOddProbability(allNumbers: any[]) {
    let odd = 0;
    allNumbers.forEach(ar => {
      odd += (ar.filter(d => d % 2 === 1).length) > 2 ? 1 : 0;
    })
    this.response.odd_prob = odd * 100 / allNumbers.length;
  }

  lastOccuranceOfComobo(givenNumber: any[]) {
    let t = [];
    this.response['given_digit_combination'] = givenNumber.sort((a, b) => a - b);
    const list = this.data.filter(item => {
      const matched = givenNumber.filter(i => item.number.includes(i));
      item.matchedCount = matched && matched.length;
      item.matched = matched;
      item.notmatched = item.number.filter(i => !givenNumber.includes(i));
      // t.push(item.notmatched);
      return item.matchedCount >= 4;
    });
    // const tr = {};
    // t.forEach(i => tr[i] = (t[i] || 0) + 1);



    // this.response['given_digit_combination_occurrance'] = [...list].slice(list.length - 10, list.length);
    this.response['given_digit_combination_occurrance_hightest'] = [...list]
      .sort((a, b) => b.matchedCount - a.matchedCount)
      .map(item => ({ date: item.date, matchedCount: item.matchedCount, number: item.number.join(" "), matched: item.matched.join(" "), notmatched: item.notmatched }))
      .map(item => { t = [].concat.apply([], [t, item.notmatched]); t.sort((a, b) => a - b); return item; });
    this.response['given_digit_combination_occurrance_hightest_length'] = this.response['given_digit_combination_occurrance_hightest'].length;
    // this.response['given_digit_combination_t'] = t;
    this.response['given_digit_combination_occurrance_hightest'] = null;
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
    const top = Object.entries(r)
      .filter(([key, value]) => key !== "")
      .map(([key, value]) => ({ key: key, hitsCount: value, matchCount: key.split("_").length }))
      .filter(item => item.hitsCount > 2 && item.matchCount === 3)
      .sort((a, b) => b.hitsCount - a.hitsCount)
      .slice(0, 50);
    this.response['mostMatchedComboNumber_top'] = top;
    this.response['mostMatchedComboNumber_iterations'] = itrs;
    this.response['mostMatchedComboNumber_et_ms'] = new Date().getMilliseconds() - startTime;
  }

  get prettyResponse() {
    return JSON.stringify(this.response, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }

  get data() {
    return [...this._data];
  }

  getData(): Observable<any> {
    return this.http.get('assets/cashfive.csv', {
      headers: new HttpHeaders({}),
      responseType: 'text'
    })
      .pipe(map(fileText => {
        let rows = (<string>fileText).split(/\r\n|\n/);
        return rows.map(row => {
          const values = row.split(',');
          return {
            name: values[0],
            number: [values[4], values[5], values[6], values[7], values[8]].map(v => parseInt(v)).sort((a, b) => a - b),
            date: new Date(parseInt(values[3]), parseInt(values[1]) - 1, parseInt(values[2]))
          }
        });
      }));
  }

}
