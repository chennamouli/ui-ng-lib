import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Base } from '../base/base';
@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss'],
})
export class DataEntryComponent extends Base implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return new FormGroup({
      firstName: this.formControl([Validators.required]),
      lastName: this.formControl([Validators.required]),
      email: new FormControl(null, Validators.email),
    });
  }
}
