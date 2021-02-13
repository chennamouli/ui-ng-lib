import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.scss']
})
export class PatternComponent implements OnInit {

  constructor() { }

  @Input()
  pattern: string;

  @Input()
  numberChunkWidth: number;


  @Input()
  showPatternLabel: boolean;

  ngOnInit(): void {
  }

}
