import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { defaultCalendarMinDate } from 'src/app/shared/utils/constants';
import { DummyApiService } from '../../services/dummy-api/dummy-api.service';
import { DataValidators } from '../../validators/data-validators';
import { Base } from '../base/base';
@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss'],
})
export class DataEntryComponent extends Base implements OnInit {
  constructor(public service: DummyApiService) {
    super();
  }

  form: FormGroup;
  defaultMinDate: NgbDateStruct;

  ngOnInit(): void {
    this.defaultMinDate = defaultCalendarMinDate;
    this.form = this.createForm();
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    console.log('Form valid: ', this.form.valid);
    console.log('Form data: ', this.form.value);
    this.service.getPosts().subscribe((data) => console.log(data));
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
      gender: this.formControl([Validators.required]),
      dateOfBirth: this.formControl([Validators.required]),
      ssn: this.formControl([Validators.required, DataValidators.ssn]),
      email: this.formControl([Validators.required, Validators.email]),
      addressLine1: this.formControl([Validators.required]),
      addressLine2: this.formControl([]),
      city: this.formControl([Validators.required]),
      state: this.formControl([Validators.required]),
      zip: this.formControl([Validators.required, DataValidators.zip]),
    });
  }
}
