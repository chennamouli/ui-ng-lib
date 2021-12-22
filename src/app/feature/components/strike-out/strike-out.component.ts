import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-strike-out',
  templateUrl: './strike-out.component.html',
  styleUrls: ['./strike-out.component.scss']
})
export class StrikeOutComponent implements OnInit {

  constructor() { }
  numbers: any[] = [];

  @Input() strike_out_numbers: any[];
  @Input() most_repeated_numbers: any[];
  @Input() less_repeated_numbers: any[];

  ngOnInit(): void {
    for (var i = 1; i <= 70; i++) {
      this.numbers.push(i);
    }
  }

}
