import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Utils } from 'src/app/shared/utils/utils';
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

  isControlValid(control: AbstractControl): boolean {
    return control && control.invalid && (control.touched || control.dirty);
  }

  onInput(formatType: string, event: any): void {
    // console.log('On input event ', event);
    if (['insertText', 'insertFromPaste'].includes(event.inputType)) {
      event.target.value = this.formatInput(formatType, event.target.value);
    }
  }

  formatInput(formatType: string, input: string): string {
    switch (formatType) {
      case 'integer':
        return Utils.formatNumber(input);
      case 'ssn':
        return Utils.formatSSN(input);
      case 'phone':
        return Utils.formatPhoneNumber(input);
      case 'sin':
        return Utils.formatSIN(input);
      case 'zip':
        return Utils.formatZip(input);
      case 'postal':
        return Utils.formatPostalCode(input);
      case 'city':
        return Utils.formatCity(input);
      default:
        return input;
    }
  }
}
