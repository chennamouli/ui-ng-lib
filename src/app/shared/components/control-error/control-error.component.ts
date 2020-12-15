import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
})
export class ControlErrorComponent implements OnInit {
  constructor() {}

  @Input()
  message: string;

  @Input()
  control: FormControl;

  @Input()
  fieldErrors: object;

  ngOnInit(): void {}
}
