import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { dateFormatMMDDYYYY, defaultFieldErrors } from '../../constants';
import { Utils } from '../../utils';

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
  fieldErrorsMap: object;

  ngOnInit(): void {}

  get errorMessage(): string {
    const errors = this.control.errors || {};
    if (errors instanceof Object && Object.keys(errors).length > 0) {
      const firstKey = Object.keys(errors)[0];

      if (this.fieldErrorsMap && this.fieldErrorsMap[firstKey]) {
        // if first key found in field errors then format and return it
        const msg = (this.fieldErrorsMap[firstKey] as string).format(
          errors[firstKey]
        );
        return msg;
      } else if (errors.hasOwnProperty('required')) {
        return defaultFieldErrors.required;
      } else if (errors.hasOwnProperty('minlength') && errors['minlength']) {
        return (defaultFieldErrors.minlength as string).format(
          errors['minlength']['requiredLength']
        );
      } else if (errors.hasOwnProperty('maxlength') && errors['maxlength']) {
        return (defaultFieldErrors.maxlength as string).format(
          errors['maxlength']['requiredLength']
        );
      } else if (errors.hasOwnProperty('requiredBefore')) {
        return (defaultFieldErrors.requiredBefore as string).format(
          Utils.formatNgbDateToString(
            errors['requiredBefore'],
            dateFormatMMDDYYYY
          )
        );
      } else if (errors.hasOwnProperty('requiredAfter')) {
        return (defaultFieldErrors.requiredAfter as string).format(
          Utils.formatNgbDateToString(
            errors['requiredAfter'],
            dateFormatMMDDYYYY
          )
        );
      } else if (
        errors.hasOwnProperty('invalid') &&
        Array.isArray(errors['invalid'])
      ) {
        return (defaultFieldErrors.invalid as string).format(errors['invalid']);
      } else if (errors.hasOwnProperty('invalid')) {
        return defaultFieldErrors.invalid;
      } else {
        return defaultFieldErrors.message || '';
      }
    }
    return null;
  }
}
