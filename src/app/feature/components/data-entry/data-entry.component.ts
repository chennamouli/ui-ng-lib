import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { DataValidators } from '../../validators/data-validators';
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
      firstName: this.formControl([
        Validators.required,
        DataValidators.firstName,
      ]),
      lastName: this.formControl([
        Validators.required,
        DataValidators.lastName,
      ]),
      ssn: this.formControl([Validators.required, DataValidators.ssn]),
      email: this.formControl([Validators.email]),
    });
  }
}
