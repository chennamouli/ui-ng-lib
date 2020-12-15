import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { KeyValuePair } from 'src/app/shared/model/key-value-pair';
import { Utils } from './utils';

describe('Utils', () => {
  it('should create an instance', () => {
    expect(new Utils()).toBeTruthy();
  });

  it('should be created', () => {
    expect(Utils).toBeTruthy();
  });

  it('should check for string is valid or not', () => {
    expect(Utils.isStringValid(null)).toBeFalsy();
    expect(Utils.isStringValid('')).toBeFalsy();
    expect(Utils.isStringValid('    ').message).toBeTruthy();
    expect(Utils.isStringValid(undefined)).toBeFalsy();
    expect(Utils.isStringValid('asdf')).toBeNull();
  });

  it('should be blank', () => {
    expect(Utils.isNotBlank(null)).toBeFalsy();
    expect(Utils.isNotBlank(undefined)).toBeFalsy();
    expect(Utils.isNotBlank('      ')).toBeFalsy();
  });

  it('should not be blank', () => {
    expect(Utils.isNotBlank('mouli')).toBeTruthy();
  });

  it('should validate string', () => {
    expect(Utils.isNotBlank(null)).toBeFalsy();
    expect(Utils.isNotBlank('')).toBeFalsy();
    expect(Utils.isNotBlank('   ')).toBeFalsy();
    expect(Utils.isNotBlank(' asdf  ')).toBeTruthy();
  });

  it('should  isNumericKey', () => {
    expect(Utils.isNumericKey({ key: '0' } as KeyboardEvent)).toBeTruthy();
    expect(Utils.isNumericKey({ key: '1' } as KeyboardEvent)).toBeTruthy();
    expect(Utils.isNumericKey({ key: 'A' } as KeyboardEvent)).toBeFalsy();
    expect(Utils.isNumericKey({ key: 'a' } as KeyboardEvent)).toBeFalsy();
    expect(Utils.isNumericKey({ key: '!' } as KeyboardEvent)).toBeFalsy();
  });

  it('should  isAlphaNumericKey', () => {
    expect(Utils.isAlphaNumericKey({ key: '0' } as KeyboardEvent)).toBeTruthy();
    expect(Utils.isAlphaNumericKey({ key: '1' } as KeyboardEvent)).toBeTruthy();
    expect(Utils.isAlphaNumericKey({ key: 'A' } as KeyboardEvent)).toBeTruthy();
    expect(Utils.isAlphaNumericKey({ key: 'a' } as KeyboardEvent)).toBeTruthy();
    expect(Utils.isAlphaNumericKey({ key: '!' } as KeyboardEvent)).toBeFalsy();
  });

  it('should  isModifierKey', () => {
    expect(
      Utils.isModifierKey({ shiftKey: false, keyCode: 35 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ shiftKey: false, keyCode: 36 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ shiftKey: false, keyCode: 8 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ shiftKey: false, keyCode: 9 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ shiftKey: false, keyCode: 13 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ shiftKey: false, keyCode: 46 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ shiftKey: false, keyCode: 37 } as KeyboardEvent)
    ).toBeTruthy();

    expect(
      Utils.isModifierKey({ shiftKey: true, keyCode: 90 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ ctrlKey: true, keyCode: 65 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ ctrlKey: true, keyCode: 67 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ ctrlKey: true, keyCode: 86 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ ctrlKey: true, keyCode: 88 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ ctrlKey: true, keyCode: 90 } as KeyboardEvent)
    ).toBeTruthy();
    expect(
      Utils.isModifierKey({ metaKey: true, keyCode: 90 } as KeyboardEvent)
    ).toBeTruthy();
  });

  it('should format number', () => {
    expect(Utils.formatNumber('12')).toEqual('12');
    expect(Utils.formatNumber(null)).toEqual('');
    expect(Utils.formatNumber('')).toEqual('');
    expect(Utils.formatNumber('adsf')).toEqual('');
  });

  it('should format 2 integer number', () => {
    expect(Utils.formatTo2IntegerlNumber('12')).toBe(12);
    expect(Utils.formatTo2IntegerlNumber(null)).toEqual('');
    expect(Utils.formatTo2IntegerlNumber('')).toEqual('');
    expect(Utils.formatTo2DecimalNumber('adsf')).toEqual('');
    expect(Utils.formatTo2IntegerlNumber('12.023')).toBe(12);
    expect(Utils.formatTo2IntegerlNumber('0.99')).toBe(0);
  });

  it('should format to 2 decimal number', () => {
    expect(Utils.formatTo2DecimalNumber(null)).toEqual('');
    expect(Utils.formatTo2DecimalNumber('')).toEqual('');
    expect(Utils.formatTo2DecimalNumber('adsf')).toEqual('');
    expect(Utils.formatTo2DecimalNumber('12.232')).toEqual('12.23');
  });

  it('should format phone number', () => {
    expect(Utils.formatPhoneNumber('')).toEqual('');
    expect(Utils.formatPhoneNumber(null)).toEqual('');
    expect(Utils.formatPhoneNumber('12')).toEqual('(12');
    expect(Utils.formatPhoneNumber('123')).toEqual('(123) ');
    expect(Utils.formatPhoneNumber('1234')).toEqual('(123) 4');
    expect(Utils.formatPhoneNumber('123456')).toEqual('(123) 456-');
    expect(Utils.formatPhoneNumber('1234567890')).toEqual('(123) 456-7890');
  });

  it('should format ssn', () => {
    expect(Utils.formatSSN('')).toEqual('');
    expect(Utils.formatSSN(null)).toEqual('');
    expect(Utils.formatSSN('12')).toEqual('12');
    expect(Utils.formatSSN('123')).toEqual('123-');
    expect(Utils.formatSSN('1234')).toEqual('123-4');
    expect(Utils.formatSSN('123456')).toEqual('123-45-6');
    expect(Utils.formatSSN('123456789')).toEqual('123-45-6789');
  });

  it('should format sin', () => {
    expect(Utils.formatSIN('')).toEqual('');
    expect(Utils.formatSIN(null)).toEqual('');
    expect(Utils.formatSIN('12')).toEqual('12');
    expect(Utils.formatSIN('123')).toEqual('123-');
    expect(Utils.formatSIN('1234')).toEqual('123-4');
    expect(Utils.formatSIN('123456')).toEqual('123-456-');
    expect(Utils.formatSIN('123456789')).toEqual('123-456-789');
  });

  it('should format date', () => {
    expect(Utils.formatDate('')).toEqual('');
    expect(Utils.formatDate(null)).toEqual('');
    expect(Utils.formatDate('1')).toEqual('1');
    expect(Utils.formatDate('12')).toEqual('12/');
    expect(Utils.formatDate('123')).toEqual('12/3');
    expect(Utils.formatDate('1230')).toEqual('12/30/');
    expect(Utils.formatDate('123020')).toEqual('12/30/20');
    expect(Utils.formatDate('12302019')).toEqual('12/30/2019');
  });

  it('should format Zip', () => {
    expect(Utils.formatZip('')).toEqual('');
    expect(Utils.formatZip(null)).toEqual('');
    expect(Utils.formatZip('1')).toEqual('1');
    expect(Utils.formatZip('12')).toEqual('12');
    expect(Utils.formatZip('123')).toEqual('123');
    expect(Utils.formatZip('1230')).toEqual('1230');
    expect(Utils.formatZip('123020')).toEqual('12302-0');
    expect(Utils.formatZip('123020192')).toEqual('12302-0192');
  });

  it('should format postal code', () => {
    expect(Utils.formatPostalCode('')).toEqual('');
    expect(Utils.formatPostalCode(null)).toEqual('');
    expect(Utils.formatPostalCode('A')).toEqual('A');
    expect(Utils.formatPostalCode('A9')).toEqual('A9');
    expect(Utils.formatPostalCode('A9A')).toEqual('A9A ');
    expect(Utils.formatPostalCode('A9A9A9')).toEqual('A9A 9A9');
  });

  it('should parse string to ngb date', () => {
    expect(Utils.parseStringToNgbDateStruct('')).toBeNull();
    expect(Utils.parseStringToNgbDateStruct('asdf')).toBeNull();
    expect(Utils.parseStringToNgbDateStruct(null)).toBeNull();
    expect(Utils.parseStringToNgbDateStruct('04/12/2019')).toEqual({
      year: 2019,
      month: 4,
      day: 12,
    });
    expect(Utils.parseStringToNgbDateStruct('1/1/2019')).toEqual({
      year: 2019,
      month: 1,
      day: 1,
    });
  });

  it('should format string to ngb date', () => {
    expect(
      Utils.formatNgbDateToString({} as NgbDateStruct, 'MM/dd/yyyy')
    ).toEqual('');
    expect(Utils.formatNgbDateToString(null, 'MM/dd/yyyy')).toEqual('');
  });

  it('should format ngb date object to yyyy-MM-dd', () => {
    const d: NgbDateStruct = { year: 2001, month: 1, day: 1 };
    const s = Utils.formatNgbDateToString(d, 'yyyy-MM-dd');
    expect(s).toEqual('2001-01-01');
  });

  it('should format ngb date object to MM/dd/yyyy', () => {
    const d: NgbDateStruct = { year: 2019, month: 4, day: 5 };
    const s = Utils.formatNgbDateToString(d, 'MM/dd/yyyy');
    expect(s).toEqual('04/05/2019');
  });

  it('should format ngb date object to Date', () => {
    const d: NgbDateStruct = { year: 2019, month: 4, day: 5 };
    const date = Utils.formatNgbDateToDate(NgbDate.from(d));
    expect(date).toEqual(new Date(2019, 3, 5));
  });

  it('should format null ngb date object to null', () => {
    const date = Utils.formatNgbDateToDate(NgbDate.from(null));
    expect(date).toBeNull();
  });

  it('should format ngb date object to ngb date struct object', () => {
    expect(Utils.formatNgbDateToNgbDateStruct(NgbDate.from(null))).toBeNull();
    expect(
      Utils.formatNgbDateToNgbDateStruct(
        NgbDate.from({ year: 2019, month: 10, day: 14 })
      ).year
    ).toBe(2019);
  });

  it('should format date object to ngb date', () => {
    expect(Utils.formatDateToNgbDate(null)).toBeNull();
    expect(Utils.formatDateToNgbDate(new Date()).year).toEqual(
      new Date().getFullYear()
    );
    expect(Utils.formatDateToNgbDate({} as any)).toBeNull();
  });

  it('should parsing string to ngb date', () => {
    expect(Utils.parseStringToNgbDate('')).toBeNull();
    expect(Utils.parseStringToNgbDate(null)).toBeNull();
    expect(Utils.parseStringToNgbDate('01/02/2000').year).toEqual(2000);
  });

  it('should return only digits from given string', () => {
    expect(Utils.getOnlyDigitsFromString(null)).toEqual('');
    expect(Utils.getOnlyDigitsFromString('123asdf!@#  ')).toEqual('123');
  });

  it('should return only digits including period from given string', () => {
    expect(Utils.getOnlyDigitsIncludingPeriodFromString(null)).toEqual('');
    expect(Utils.getOnlyDigitsIncludingPeriodFromString('12.789')).toEqual(
      '12.789'
    );
    expect(
      Utils.getOnlyDigitsIncludingPeriodFromString('123a.22sdf!@#  ')
    ).toEqual('123.22');
  });

  it('should return only alpha numeric from given string', () => {
    expect(Utils.getOnlyAlphaNumericFromString(null)).toEqual('');
    expect(Utils.getOnlyAlphaNumericFromString('123asdf!@#  ')).toEqual(
      '123asdf'
    );
  });

  it('should validate SIN by LUHN Algorithm', () => {
    expect(Utils.isSINValid('')).toBeFalsy();
    expect(Utils.isSINValid(null)).toBeFalsy();
    expect(Utils.isSINValid('570699397')).toBeTruthy();
    expect(Utils.isSINValid('570699397')).toBeTruthy();
    expect(Utils.isSINValid('570699399')).toBeFalsy(); // invalid
  });

  it('should check for under 14', () => {
    const d = new Date();
    expect(
      Utils.isUnder14(
        NgbDate.from({ year: d.getFullYear() - 10, month: 1, day: 1 })
      )
    ).toBeTruthy();
    expect(Utils.isUnder14(null)).toBeFalsy();
    expect(
      Utils.isUnder14(
        NgbDate.from({ year: d.getFullYear() - 20, month: 1, day: 1 })
      )
    ).toBeFalsy();
  });

  it('should check for under 18', () => {
    const d = new Date();
    expect(
      Utils.isUnder18(
        NgbDate.from({ year: d.getFullYear() - 16, month: 1, day: 1 })
      )
    ).toBeTruthy();
    expect(Utils.isUnder18(null)).toBeFalsy();
    expect(
      Utils.isUnder18(
        NgbDate.from({ year: d.getFullYear() - 20, month: 1, day: 1 })
      )
    ).toBeFalsy();
  });

  it('should return validation errors as JSON object for given formgroup', () => {
    const fb = new FormBuilder();
    const form = fb.group({
      startDate: new FormControl('', [Validators.required]),
      name: fb.group({
        firstName: [null, [Validators.required, Validators.minLength(2)]],
        middleName: [null, []],
        lastName: [null, [Validators.required, Validators.minLength(2)]],
      }),
      id: new FormControl('', [Validators.required]),
      isForeignNationalNoSSN: new FormControl(false),
    });
    // tslint:disable-next-line:no-string-literal
    expect(Utils.getFormValidationErrors(form)['startDate']).toBeTruthy();
    // tslint:disable-next-line:no-string-literal
    expect(
      Utils.getFormValidationErrors(form)['name']['firstName']
    ).toBeTruthy();
  });

  it('should return validation errors count for given object', () => {
    const obj = {
      firstName: 'Mouli',
      address: { addressLine1: '9400 W Parmer Ln', city: 'Austin' },
    };
    expect(Utils.getObjectKeysCount(obj)).toBe(3);
    const obj2 = {
      name: { firstName: { required: true }, lastName: { required: true } },
      id: { required: true },
      birthDate: { required: true },
      homeAddress: {
        addressLine1: { required: true },
        city: { required: true },
        state: { required: true },
        postalCode: { required: true },
      },
      gender: { required: true },
    };
    expect(Utils.getObjectKeysCount(obj2)).toBe(9);
  });

  it('should return invalid chars', () => {
    expect(Utils.matchWithRegExp('hello@', '[^a-zA-Z0-9]').length).toBe(1);
    expect(Utils.matchWithRegExp('hello', '[^a-zA-Z0-9]')).toBeNull();
  });

  it('should limitToTwoDecimals', () => {
    expect(
      Utils.limitToTwoDecimals({ which: 47, target: { value: '2.2' } })
    ).toBeFalsy();
    expect(
      Utils.limitToTwoDecimals({ which: 58, target: { value: '2.2' } })
    ).toBeFalsy();
    expect(
      Utils.limitToTwoDecimals({ which: 46, target: { value: '2.2' } })
    ).toBeFalsy();
    expect(
      Utils.limitToTwoDecimals({
        which: 48,
        target: { value: '2.2', selectionStart: 1 },
      })
    ).toBeTruthy();
  });

  it('should getNthBusinessDayFromToday', () => {
    expect(Utils.getHostName()).toContain('localhost');
  });

  it('should scroll to top', () => {
    window.scrollTo(0, 300);
    Utils.scrollToTop();
  });

  it('should focus element by id', () => {
    const ip = document.createElement('input');
    ip.id = 'id';
    ip.value = 'hello';
    document.body.appendChild(ip);
    expect(Utils.focusElementById('id'));
  });

  it('should trim JSON object', () => {
    const fd = {
      firstName: ' Chandra ',
      gender: 'M',
      jobTitle: 'Developer     ',
      address: { addressLine1: '123 Parmer Ln    ' },
      locations: ['TX', 'MN'],
      hireDate: { year: 2019, month: 7, day: 9 },
    };
    const trimmedData: any = Utils.trimJSON(fd);
    expect(trimmedData.firstName).toEqual('Chandra');
    expect(trimmedData.jobTitle).toEqual('Developer');
    expect(trimmedData.address.addressLine1).toEqual('123 Parmer Ln');
    expect(trimmedData.locations[0]).toEqual('TX');
    expect(null).toEqual(null);
    expect(undefined).toEqual(undefined);
    expect('asdf').toEqual('asdf');
  });

  it('should check JSON object empty or not', () => {
    expect(Utils.isNotEmptyJSON(null)).toBeFalsy();
    expect(Utils.isNotEmptyJSON({})).toBeFalsy();
    expect(
      Utils.isNotEmptyJSON({ firstName: null, lastName: null })
    ).toBeFalsy();
    expect(Utils.isNotEmptyJSON({ firstName: '', lastName: null })).toBeFalsy();
    expect(
      Utils.isNotEmptyJSON({ firstName: 'Mouli', lastName: null })
    ).toBeTruthy();
    expect(
      Utils.isNotEmptyJSON({ name: { firstName: '', lastName: null } })
    ).toBeFalsy();
    expect(
      Utils.isNotEmptyJSON({
        gender: 'M',
        name: { firstName: '    ', lastName: null },
      })
    ).toBeTruthy();
    expect(
      Utils.isNotEmptyJSON({
        male: true,
        name: { firstName: '', lastName: null },
      })
    ).toBeTruthy();
    expect(
      Utils.isNotEmptyJSON({ salary: 100000, location: null })
    ).toBeTruthy();
    expect(
      Utils.isNotEmptyJSON({ salary: null, jobTypes: ['one', 'two'] })
    ).toBeTruthy();
    expect(
      Utils.isNotEmptyJSON({
        salary: null,
        jobTypes: { location: { id: null, type: 'good' } },
      })
    ).toBeTruthy();
    expect(
      Utils.isNotEmptyJSON({
        salary: null,
        jobTypes: { location: { id: null, type: [] } },
      })
    ).toBeFalsy();
    expect(
      Utils.isNotEmptyJSON({
        salary: null,
        jobTypes: { location: { id: null, type: '' } },
      })
    ).toBeFalsy();
    expect(
      Utils.isNotEmptyJSON({ salary: null, jobType: 'developer' }, ['jobType'])
    ).toBeFalsy();
  });

  it('should return true if value exist', () => {
    const options: KeyValuePair[] = [
      { key: 'M', value: 'Male' },
      { key: 'F', value: 'Female' },
    ];
    expect(Utils.doesKeyExistInKeyValuePairs('F', options)).toBeTruthy();
    expect(Utils.doesKeyExistInKeyValuePairs('U', options)).toBeFalsy();
    expect(Utils.doesKeyExistInKeyValuePairs('U', options)).toBeFalsy();
    expect(Utils.doesKeyExistInKeyValuePairs('', null)).toBeFalsy();
    expect(Utils.doesKeyExistInKeyValuePairs('', undefined)).toBeFalsy();
  });

  it('should format currency value', () => {
    expect(Utils.formatCurrency(null)).toBeNull();
    expect(Utils.formatCurrency('')).toEqual('');
    expect(Utils.formatCurrency('10')).toEqual('$10.00');
    expect(Utils.formatCurrency('10.1')).toEqual('$10.10');
    expect(Utils.formatCurrency('10.99')).toEqual('$10.99');
    expect(Utils.formatCurrency('0')).toEqual('$0.00');
    expect(Utils.formatCurrency('100000')).toEqual('$100,000.00');
    expect(Utils.formatCurrency('str')).toEqual('str');
  });

  it('should return key value pair if found', () => {
    expect(Utils.getKeyValuePair('', null).key).toBeFalsy();
    expect(Utils.getKeyValuePair(null, null).key).toBeFalsy();
    expect(Utils.getKeyValuePair(undefined, null).key).toBeFalsy();
    expect(
      Utils.getKeyValuePair(null, [{ key: 'M', value: 'Male' }]).key
    ).toBeFalsy();
    expect(Utils.getKeyValuePair('M', null).key).toBeFalsy();

    expect(
      Utils.getKeyValuePair('M', [{ key: 'M', value: 'Male' }]).key
    ).toEqual('M');
    expect(
      Utils.getKeyValuePair('Male  ', [{ key: 'M', value: 'Male' }]).key
    ).toEqual('M');
    expect(
      Utils.getKeyValuePair('0', [{ key: '0', value: 'Male' }]).key
    ).toEqual('0');
    expect(
      Utils.getKeyValuePair('false', [{ key: 'false', value: 'Male' }]).key
    ).toEqual('false');

    expect(
      Utils.getKeyValuePair('F', [{ key: 'M', value: 'Male' }]).key
    ).toBeFalsy();
  });

  it('should reset control value to null when value not is list', () => {
    const fc = new FormControl();
    fc.setValue('X');
    Utils.resetControlIfValueNotFound(fc, ['A', 'B', 'C']);
    expect(fc.value).toBeNull();
  });

  it('should not reset control value when value is list', () => {
    const fc = new FormControl();
    fc.setValue('A');
    Utils.resetControlIfValueNotFound(fc, ['A', 'B', 'C']);
    expect(fc.value).toBeNull();
  });

  it('should call getTagManagerMapping', () => {
    const map = Utils.getTagManagerMapping();
    expect(map).not.toBeNull();
  });

  it('should format date value', () => {
    expect(Utils.formatDate2(null)).toBeNull();
    expect(Utils.formatDate2('')).toBeNull();
    expect(Utils.formatDate2('2020-12-18')).toEqual('12/18/2020');
  });
});
