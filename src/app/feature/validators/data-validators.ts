import { FormControl } from '@angular/forms';
import {
  invalidSINValues,
  invalidSSNValues,
  RegExps,
} from 'src/app/shared/constants';
import { Utils } from 'src/app/shared/utils';

export class DataValidators {
  static firstName(fc: FormControl) {
    if (Utils.isNotEmpty(fc.value) && Utils.isBlank(fc.value)) {
      return { message: true };
    } else if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      let invalidChars = Utils.matchWithRegExp(
        fc.value.trim(),
        RegExps.FirstName
      );
      invalidChars = Utils.removeDuplicates(invalidChars);
      return invalidChars ? { invalid: invalidChars } : null;
    }
    return null;
  }

  static middleName(fc: FormControl) {
    if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      let invalidChars = Utils.matchWithRegExp(
        fc.value.trim(),
        RegExps.FirstName
      );
      invalidChars = Utils.removeDuplicates(invalidChars);
      return invalidChars ? { invalid: invalidChars } : null;
    }
    return null;
  }

  static lastName(fc: FormControl) {
    if (Utils.isNotEmpty(fc.value) && Utils.isBlank(fc.value)) {
      return { message: true };
    } else if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      let invalidChars = Utils.matchWithRegExp(
        fc.value.trim(),
        RegExps.FirstName
      );
      invalidChars = Utils.removeDuplicates(invalidChars);
      return invalidChars ? { invalid: invalidChars } : null;
    }
    return null;
  }

  static phoneNumber(fc: FormControl) {
    let input = fc.value;
    if (Utils.isNotEmpty(fc.value) && Utils.isBlank(fc.value)) {
      return { message: true };
    } else if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      input = Utils.getOnlyDigitsFromString(input);
      if (input === '' || input.match(/[0-9]{10}/g)) {
        return null;
      }
      return { message: true };
    }
    return null;
  }

  static personalEmail(fc: FormControl) {
    if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      const matches = new RegExp(RegExps.Email).test(fc.value.trim());
      return matches ? null : { message: true };
    }
    return null;
  }

  static workEmail(fc: FormControl) {
    if (Utils.isNotEmpty(fc.value) && Utils.isBlank(fc.value)) {
      return { message: true };
    } else if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      const matches = new RegExp(RegExps.Email).test(fc.value.trim());
      return matches ? null : { message: true };
    }
    return null;
  }

  static ssn(fc: FormControl) {
    let input = fc.value;
    if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      input = Utils.getOnlyDigitsFromString(input);
      if (input.length === 9) {
        if (
          input.substring(0, 1) === '9' ||
          input.substring(3, 5) === '00' ||
          input.substring(0, 3) === '000' ||
          input.substring(5, 9) === '0000' ||
          input.substring(0, 3) === '666' ||
          invalidSSNValues.indexOf(input) > -1
        ) {
          return { message: true };
        } else {
          return null;
        }
      } else {
        return { message: true };
      }
    }
    return null;
  }

  static sin(fc: FormControl) {
    let input = fc.value;
    if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      input = Utils.getOnlyDigitsFromString(input);
      if (input.length === 9) {
        if (
          // SIN should not start with 0 or 8
          input.substring(0, 1) === '0' ||
          input.substring(0, 1) === '8' ||
          invalidSINValues.indexOf(input) > -1 ||
          !Utils.isSINValid(input)
        ) {
          return { message: true };
        } else {
          return null;
        }
      } else {
        return { message: true };
      }
    }
    return null;
  }

  static zip(fc: FormControl) {
    let input = fc.value;
    if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      input = Utils.getOnlyDigitsFromString(input);
      if (!(input.length === 5 || input.length === 9)) {
        return { invalid: true };
      }
    }
    return null;
  }

  static postalCode(fc: FormControl) {
    let input = fc.value;
    if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      input = Utils.getOnlyAlphaNumericFromString(input);
      if (input.length !== 6) {
        return { invalid: true };
      } else {
        const matches = new RegExp(RegExps.PostalCode).test(input.trim());
        return matches ? null : { message: true };
      }
    }
    return null;
  }

  static addressLine1(fc: FormControl) {
    return Utils.isStringValid(fc.value);
  }

  static city(fc: FormControl) {
    if (Utils.isNotEmpty(fc.value) && Utils.isBlank(fc.value)) {
      return { message: true };
    } else if (Utils.isNotEmpty(fc.value) && Utils.isNotBlank(fc.value)) {
      const matches = new RegExp(RegExps.City).test(fc.value.trim());
      return matches ? null : { message: true };
    }
    return null;
  }
}
