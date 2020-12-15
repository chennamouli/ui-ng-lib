import { FormControl, FormGroup } from '@angular/forms';
import { Utils } from 'src/app/shared/utils';

export class Base {
  formControl(validators: Array<any>, value: any = null) {
    return new FormControl(value, {
      validators,
      updateOn: 'blur',
    });
  }

  getErrors(form: FormGroup) {
    return Utils.getFormValidationErrors(form);
  }
}
