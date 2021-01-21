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
    // this.data = [
    //   { name: 'Pick 4', 'event': 'M', number: 1234, date: '2021-01-01' },
    //   { name: 'Pick 4', 'event': 'M', number: 4567, date: '2021-01-01' },
    //   { name: 'Pick 4', 'event': 'M', number: 9801, date: '2021-01-01' },
    //   { name: 'Pick 4', 'event': 'M', number: 2589, date: '2021-01-01' }
    // ];

    this.http.get('assets/p4.json').subscribe((data: any[]) => {
      data.forEach(item => {
        this.data.push({ name: 'Pick 4', 'event': 'M', number: '' + item.d1 + item.d2 + item.d3 + item.d4, ball: item.ball, date: new Date(item.year, item.month - 1, item.day) });
      });

      const totalEvents = this.response.total = this.data.length;
      this.data.forEach(item => {
        for (let i = 0; i < 10; i++) {
          if (item.number.toString().indexOf('' + i) >= 0) this.response['digit' + i + '_count'] = (this.response['digit' + i + '_count'] || 0) + 1;
        }
      });

      for (let i = 0; i < 10; i++) {
        this.response['digit' + i + '_probablity'] = this.response['digit' + i + '_count'] ? parseFloat('' + this.response['digit' + i + '_count'] * 100 / totalEvents).toFixed(2) + '%' : '0%';
      }
    });

  }

  get prettyResponse() {
    return JSON.stringify(this.response, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }

}
