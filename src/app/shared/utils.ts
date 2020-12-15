import { CurrencyPipe, DatePipe } from '@angular/common';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { KeyValuePair } from '../shared/model/key-value-pair';
import { RegExps } from './constants';

export class Utils {
  static isNumericKey(event: KeyboardEvent): boolean {
    return new RegExp(RegExps.NumericOnly).test(event.key);
  }

  static isStringValid(value: string): any {
    if (Utils.isNotEmpty(value) && Utils.isBlank(value)) {
      return { message: true };
    } else if (Utils.isNotEmpty(value) && Utils.isNotBlank(value)) {
      return null;
    }
    return null;
  }

  static isAlphaNumericKey(event: KeyboardEvent): boolean {
    return new RegExp(RegExps.AlphaNumericOnly).test(event.key);
  }

  /**
   * Returns true if key pressed is a modifiker key otherwise false.
   * Refer https://keycode.info/
   */
  static isModifierKey(event: KeyboardEvent): boolean {
    // tslint:disable-next-line: deprecation
    const key = event.keyCode;
    return (
      event.shiftKey === true ||
      key === 35 || // End key
      key === 36 || // Allow Shift, Home, End
      key === 8 ||
      key === 9 ||
      key === 13 ||
      key === 46 || // Allow Backspace, Tab, Enter, Delete
      (key > 36 && key < 41) || // Allow left, up, right, down
      // Allow Ctrl/Command + A,C,V,X,Z
      ((event.ctrlKey === true || event.metaKey === true) &&
        (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
    );
  }

  static formatPhoneNumber(value: string): string {
    if (!value) {
      return '';
    }
    const input = value.replace(/\D/g, '').substring(0, 10);
    const first = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);
    if (input.length > 5) {
      return `(${first}) ${middle}-${last}`;
    } else if (input.length > 2) {
      return `(${first}) ${middle}`;
    } else if (input.length > 0) {
      return `(${first}`;
    }
  }

  static formatNumber(value: any): string {
    if (!value || isNaN(value)) {
      return '';
    }
    return value;
  }

  static formatTo2IntegerlNumber(value: any): any {
    if (!value || isNaN(value)) {
      return '';
    }
    try {
      return parseInt(value, 10);
    } catch (error) {}
    return value;
  }

  static formatTo2DecimalNumber(value: any): string {
    if (!value || isNaN(value)) {
      return '';
    }
    try {
      return parseFloat(value).toFixed(2);
    } catch (error) {}
    return value;
  }

  static formatSSN(value: string): string {
    if (!value) {
      return '';
    }
    const input = value.replace(/\D/g, '').substring(0, 9);
    const first = input.substring(0, 3);
    const middle = input.substring(3, 5);
    const last = input.substring(5, 9);
    if (input.length > 4) {
      return `${first}-${middle}-${last}`;
    } else if (input.length > 2) {
      return `${first}-${middle}`;
    } else {
      return first;
    }
  }

  static formatSIN(value: string): string {
    if (!value) {
      return '';
    }
    const input = value.replace(/\D/g, '').substring(0, 9);
    const first = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 9);
    if (input.length > 5) {
      return `${first}-${middle}-${last}`;
    } else if (input.length > 2) {
      return `${first}-${middle}`;
    } else {
      return `${first}`;
    }
  }

  static formatDate(value: string): string {
    if (!value) {
      return '';
    }
    const input = value.replace(/\D/g, '').substring(0, 8);
    const first = input.substring(0, 2);
    const middle = input.substring(2, 4);
    const last = input.substring(4, 8);
    if (input.length > 3) {
      return `${first}/${middle}/${last}`;
    } else if (input.length > 1) {
      return `${first}/${middle}`;
    } else {
      return `${first}`;
    }
  }

  static formatZip(value: string): string {
    if (!value) {
      return '';
    }
    const input = value.replace(/\D/g, '').substring(0, 9);
    const first = input.substring(0, 5);
    const last = input.substring(5, 9);
    if (input.length > 5) {
      return `${first}-${last}`;
    } else {
      return `${first}`;
    }
  }

  static formatPostalCode(value: string): string {
    if (!value) {
      return '';
    }
    // replace non-alphanumeric by empty string
    const input = value.replace(/[^a-z0-9]/gi, '').substring(0, 6);
    const first = input.substring(0, 3);
    const last = input.substring(3, 6);
    if (input.length > 2) {
      return `${first} ${last}`;
    } else {
      return `${first}`;
    }
  }

  static formatCity(value: string): string {
    if (!value) {
      return '';
    }
    let city: string;
    // replace en-dash, em-dash, and minus sign with standard hyphen
    city = value.replace(/[\u2013\u2014\u2212]/g, '\u002D');
    // replace left and right single quotation marks with apostrophe
    city = city.replace(/[\u2018\u2019]/g, '\u0027');
    // replace nbsp; with regular space
    city = city.replace(/\u00A0/g, '\u0020');
    return city;
  }

  // thanks: https://stackoverflow.com/questions/23221557/restrict-to-2-decimal-places-in-keypress-of-a-text-box/23222269
  static limitToTwoDecimals(event: KeyboardEvent | any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    const numArray = event.target.value.split('.');
    // not a digit key
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    // just one dot
    if (numArray.length > 1 && charCode === 46) {
      return false;
    }
    // get the carat position
    const caratPos = (event.target as HTMLInputElement).selectionStart;

    const dotPos = event.target.value.indexOf('.');
    if (caratPos > dotPos && dotPos > -1 && numArray[1].length > 1) {
      return false;
    }
    return true;
  }

  static isUnder14(dob: NgbDate): boolean {
    const dateAt14: NgbDate = Utils.getNgbDateAtNYearsBack(14);
    return dob && dob.after(dateAt14);
  }

  static isUnder18(dob: NgbDate): boolean {
    const dateAt18: NgbDate = Utils.getNgbDateAtNYearsBack(18);
    return dob && dob.after(dateAt18);
  }

  static getNgbDateAtNYearsBack(years: number): NgbDate {
    const d = new Date();
    d.setFullYear(d.getFullYear() - years);
    return Utils.formatDateToNgbDate(d);
  }

  // static getNthBusinessDayFromToday(days: number): NgbDate {
  //   const d = Utils.formatDateToNgbDate(new Date().addbusinessDays(days));
  //   return d;
  // }

  static formatDateToNgbDate(date: Date): NgbDate {
    if (!date || !(date instanceof Date)) {
      return null;
    }
    return NgbDate.from({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    });
  }

  static formatDateToString(date, dateFormatString): string {
    if (!date || !(date instanceof Date)) {
      return null;
    }
    try {
      const datePipe: DatePipe = new DatePipe('en-US');
      return datePipe.transform(new Date(), dateFormatString);
    } catch (e) {
      // console.warn('[Utils] formatNgbDateToString(): Error while formatting the date. ', e);
    }
    return null;
  }

  static parseStringToNgbDate(value: string): NgbDate {
    const dt = Utils.parseStringToNgbDateStruct(value);
    return dt ? NgbDate.from(dt) : null;
  }

  static parseStringToNgbDateStruct(value: string): NgbDateStruct {
    const validFormat =
      new RegExp(RegExps.DateMMDDYYYY).test(value) ||
      new RegExp(RegExps.DateYYYYMMDD).test(value);
    if (!value || !validFormat) {
      return null;
    }
    const datePipe: DatePipe = new DatePipe('en-US');
    try {
      const dateParts = datePipe.transform(value.trim(), 'M-d-y').split('-');
      return {
        year: parseInt(dateParts[2], 10),
        month: parseInt(dateParts[0], 10),
        day: parseInt(dateParts[1], 10),
      };
    } catch (e) {
      // console.warn('[Utils] parseStringToNgbDateStruct(): Error while parsing the date. ', e);
    }
    return null;
  }

  static formatNgbDateToString(date: any, dateFormatString: string): string {
    if (!date) {
      return '';
    }
    try {
      const datePipe: DatePipe = new DatePipe('en-US');
      return datePipe.transform(
        new Date(date.year, date.month - 1, date.day),
        dateFormatString
      );
    } catch (e) {
      // console.warn('[Utils] formatNgbDateToString(): Error while formatting the date. ', e);
    }
    return '';
  }

  static formatNgbDateToDate(date: NgbDate): Date {
    if (!date) {
      return null;
    }
    try {
      return new Date(date.year, date.month - 1, date.day);
    } catch (e) {
      // console.warn('[Utils] formatNgbDateToDate(): Error while formatting the date. ', e);
    }
    return null;
  }

  static formatNgbDateToNgbDateStruct(date: NgbDate): NgbDateStruct {
    if (!date) {
      return null;
    }
    try {
      return {
        year: date.year,
        month: date.month,
        day: date.day,
      } as NgbDateStruct;
    } catch (e) {
      // console.warn('[Utils] formatNgbDateToNgbDateStruct(): Error while formatting the date. ', e);
    }
    return null;
  }

  static getOnlyDigitsFromString(value: string): string {
    if (!value) {
      return '';
    }
    return value.replace(/\D/g, '');
  }

  static getOnlyDigitsIncludingPeriodFromString(value: string): any {
    if (!value) {
      return '';
    }
    return value.replace(/[^0-9.]/g, '');
  }

  static getOnlyAlphaNumericFromString(value: string): string {
    if (!value) {
      return '';
    }
    return value.replace(/[^a-z0-9]/gi, '');
  }

  static getHostName(): string {
    return document.location.hostname;
  }

  static getEnvironmentFromHostName(hostName: string): string {
    const regExp = new RegExp(RegExps.Environment);
    const value = regExp.exec(hostName);
    return value !== null ? value[2].toUpperCase() : null;
  }

  static getCookieValue(cookieName: string): string {
    const regExp = new RegExp(cookieName + RegExps.CookieReader);
    const value = regExp.exec(document.cookie);
    return value !== null ? value[1] : '';
  }

  static matchWithRegExp(text: string, regExp: string) {
    return text.match(new RegExp(regExp, 'ig'));
  }

  /**
   * This method checks CANADA Social Insurance Number (SIN) valid or not - LUHN Algorithm
   * @param sin string
   */
  static isSINValid(sin: string) {
    if (!sin) {
      return false;
    }
    let valid = false;
    let ch; // the current character
    let odd = 0;
    let even = 0;
    let total = 0;
    let mod = 0;
    let digit = 0;
    let right = 0;
    let j = 0;
    if (sin != null && sin.length === 9) {
      sin = sin.slice(0, 3) + '-' + sin.slice(3);
      sin = sin.slice(0, 7) + '-' + sin.slice(7);
    }

    for (let i = 0; i < 11; i++) {
      ch = sin.charAt(i); // current character
      if (ch === '-') {
        continue;
      }
      const chint = parseInt(ch.charAt(0), 10);

      j = j + 1;
      if (j % 2 === 1 && j < 8) {
        odd = odd * 1 + chint * 1;
      }

      if (j % 2 === 0) {
        if (chint * 2 > 9) {
          even = even + (chint * 2 - 10) + 1;
        } else {
          even = even + chint * 2;
        }
      }
      if (j === 9) {
        right = chint * 1;
      }
    }
    total = odd + even;
    mod = total % 10;

    if (mod > 0) {
      digit = 10 - mod;
    } else {
      digit = mod;
    }
    if (digit === right) {
      valid = true;
    }
    return valid;
  }

  static getFormValidationErrors(form: FormGroup): object {
    let errors = {};
    Object.keys((form && form.controls) || []).forEach((key) => {
      let controlErrors: ValidationErrors;
      const ctrl = form.get(key);
      if (ctrl instanceof FormGroup) {
        controlErrors = Utils.getFormValidationErrors(ctrl);
      } else {
        controlErrors = form.get(key).errors;
      }
      if (controlErrors != null && Object.keys(controlErrors).length > 0) {
        const e = {};
        e[key] = controlErrors;
        errors = Object.assign(errors, e);
      }
    });
    return errors;
  }

  static getObjectKeysCount(obj: object): number {
    let count = 0;
    Object.keys(obj).forEach((key) => {
      if (Array.isArray(obj[key])) {
        count += 1;
      } else if (typeof obj[key] === 'object') {
        // tslint:disable-next-line:no-string-literal
        if (obj[key]['year'] && obj[key]['month'] && obj[key]['day']) {
          // for date object, consider as 1 key instead of 3 keys
          count += 1;
        } else {
          count += Utils.getObjectKeysCount(obj[key]);
        }
      } else {
        count += 1;
      }
    });
    return count;
  }

  // 400 - Bad Request, 401 - Unauthorized, 403 - Forbidden, 500 - Internal Server Error
  // static handleError(response: HttpErrorResponse) {
  //   const statusArray: number[] = [401, 403];
  //   let msg: BannerMessage;

  //   // derive error request id and code if exist
  //   const requestId =
  //     response && response.error ? response.error._requestId : '';
  //   const errorCode =
  //     response && response.error && response.error._error
  //       ? response.error._error.errorCode
  //       : '';

  //   if (!response || response.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     msg = new BannerMessage(response.status, 'danger', '', 'http.0', '0', '');
  //   } else if (statusArray.includes(response.status)) {
  //     msg = new BannerMessage(
  //       response.status,
  //       'danger',
  //       '',
  //       'http.' + response.status,
  //       requestId,
  //       errorCode
  //     );
  //   } else if (response.error && response.error._error) {
  //     // any other server error
  //     const m = `${
  //       response.error._error.message || response.error._statusText
  //     } (Error ID: ${requestId}, Error Code: ${errorCode})`;
  //     msg = new BannerMessage(
  //       response.status,
  //       'danger',
  //       '',
  //       m,
  //       requestId,
  //       errorCode
  //     );
  //   } else {
  //     // unknown error, generic message
  //     msg = new BannerMessage(
  //       response.status,
  //       'danger',
  //       '',
  //       'http.0',
  //       `${response.status}`,
  //       ''
  //     );
  //   }
  //   if (response.status !== 404) {
  //     console.error('[Utils] handleError(): HTTP Request Failure', response);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(msg);
  // }

  // thanks: https://medium.com/@appl4e/scroll-to-top-button-for-angular-99ddeebb8c3a
  static scrollToTop(): void {
    (function smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 2);
      }
    })();
  }

  static focusElementById(id: string): void {
    const el = document.getElementById(id);
    try {
      if (el) {
        el.focus();
      }
    } catch (error) {}
  }

  /**
   * Trims the value of the each key in a given object and returns trimmed object.
   * @param fd object
   */
  static trimJSON(obj: object): object {
    const data = Object.assign({}, obj);
    try {
      Object.keys(data).forEach((key: string) => {
        const value: any = data[key];
        if (value) {
          if (Array.isArray(value)) {
            data[key] = value;
          } else if (typeof value === 'object') {
            data[key] = Utils.trimJSON(value);
          } else if (typeof value === 'string') {
            data[key] = value.trim();
          }
        }
      });
    } catch (e) {
      console.warn('[Utils] Unable to trim JSON object.', e);
    }
    return data;
  }

  static isNotEmptyJSON(obj: object, ingnorekeys: string[] = []): boolean {
    let isEmpty = false;
    if (!obj) {
      return isEmpty;
    }
    try {
      Object.keys(obj).forEach((key: string) => {
        const value: any = obj[key];
        if (value && !isEmpty && ingnorekeys.indexOf(key) < 0) {
          if (Array.isArray(value)) {
            isEmpty = value.length > 0;
          } else if (typeof value === 'object') {
            isEmpty = Utils.isNotEmptyJSON(value);
          } else if (typeof value === 'string') {
            isEmpty = Utils.isNotBlank(value);
          } else if (typeof value === 'boolean') {
            isEmpty = true;
          } else if (typeof value === 'number') {
            isEmpty = true;
          }
        }
      });
    } catch (e) {
      console.error(
        '[Utils] isJSONEmpty() Unable to check JSON is empty or not.',
        e
      );
      return true;
    }
    return isEmpty;
  }

  /**
   * Checks if a String is empty ("") or null.
   *
   * isEmpty(null)      = true
   *
   * isEmpty("")        = true
   *
   * isEmpty(" ")       = false
   *
   * isEmpty("bob")     = false
   *
   * isEmpty("  bob  ") = false
   * @param value string
   */
  static isEmpty(value: string): boolean {
    if (!value || value === '') {
      return true;
    }
    return false;
  }

  static isNotEmpty(value: string): boolean {
    return !Utils.isEmpty(value);
  }

  /**
   * Checks if a String is whitespace, empty ("") or null.
   *
   * isBlank(null)      = true
   *
   * isBlank("")        = true
   *
   * isBlank(" ")       = true
   *
   * isBlank("bob")     = false
   *
   * isBlank("  bob  ") = false
   * @param value string
   */
  static isBlank(value: string): boolean {
    if (Utils.isEmpty(value)) {
      return true;
    } else if (typeof value === 'string' && value.trim() === '') {
      return true;
    } else {
      return false;
    }
  }

  static isNotBlank(value: string): boolean {
    return !Utils.isBlank(value);
  }

  /**
   * Returns true if given value is exist in KeyValuePair[]
   * otherwise returns false.
   * @param val string
   * @param options KeyValuePair[]
   */
  static doesKeyExistInKeyValuePairs(
    val: string,
    options: KeyValuePair[]
  ): boolean {
    let flag = false;
    Object.values(options || [])
      .filter((option: KeyValuePair) => option.key === val)
      .forEach((option) => {
        flag = true;
      });
    return flag;
  }

  static doesValueExistInKeyValuePairs(
    val: string | number | boolean,
    options: KeyValuePair[]
  ): boolean {
    let flag = false;
    Object.values(options || [])
      .filter((option: KeyValuePair) => {
        const value = option.value;
        if (typeof value === 'string' && val) {
          return (
            value.trim().toLowerCase() ===
              (val as string).trim().toLowerCase() && !flag
          );
        } else {
          return value === val && !flag;
        }
      })
      .forEach((option) => {
        flag = true;
      });
    return flag;
  }

  static getKeyValuePair(val: string | number, options: KeyValuePair[]): any {
    if (!val || !options) {
      return {};
    }
    const objArray = Object.values(options || [])
      .filter((option: KeyValuePair) => {
        return (
          option.key === val ||
          option.value === val ||
          (typeof val === 'string' &&
            typeof option.value === 'string' &&
            option.value.toLowerCase().trim() === val.toLowerCase().trim())
        );
      })
      .map((option) => {
        return option;
      });
    return objArray.length > 0 ? objArray[0] : {};
  }

  static removeDuplicates(array: any[] = []): any[] {
    if (!array) {
      return null;
    }
    const newArray = array.filter(
      (item, index) => array.indexOf(item) === index
    );
    return newArray;
  }

  static formatCurrency(value): any {
    const currencyPipe: CurrencyPipe = new CurrencyPipe('en-US');
    try {
      const formattedValue = currencyPipe.transform(value);
      return formattedValue ? formattedValue : value;
    } catch (error) {
      console.warn(
        '[Utils] formatCurrency() Unable to format currency value',
        error
      );
      return value;
    }
  }

  /**
   * Resets control if the control's value isn't within the list of options
   * @param control The control being checked
   * @param options List of valid options for control
   */
  static resetControlIfValueNotFound(
    control: AbstractControl,
    options: any
  ): void {
    const validValueSelected: boolean = Utils.doesKeyExistInKeyValuePairs(
      control.value,
      options
    );
    if (!validValueSelected && control.value !== null) {
      control.setValue(null);
    }
  }

  static getBrowser() {
    if (
      (navigator.userAgent.indexOf('Opera') ||
        navigator.userAgent.indexOf('OPR')) !== -1
    ) {
      return 'Opera';
    } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
      return 'Chrome';
    } else if (navigator.userAgent.indexOf('Safari') !== -1) {
      return 'Safari';
    } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
      return 'Firefox';
    } else if (navigator.userAgent.indexOf('Edge') !== -1) {
      return 'Edge';
    } else if (
      navigator.userAgent.indexOf('MSIE') !== -1 ||
      !!document['documentMode'] === true
    ) {
      return 'IE';
    } else {
      return 'unknown';
    }
  }

  static getTagManagerMapping(): Map<string, string[]> {
    const labelMap: Map<string, string[]> = new Map<string, string[]>();
    labelMap.set('Employee', ['person', 'Person Page']);
    labelMap.set('Work', ['work', 'Work Page']);
    labelMap.set('Money', ['money', 'Money Page']);
    labelMap.set('Intro / Closing', [
      'customize',
      'Customize Intro/Closing Page',
    ]);
    labelMap.set('Review & Send', ['review', 'Review Page']);
    return labelMap;
  }

  static formatDate2(value: string): string {
    const validFormat =
      new RegExp(RegExps.DateMMDDYYYY).test(value) ||
      new RegExp(RegExps.DateYYYYMMDD).test(value);

    if (!value || !validFormat) {
      return null;
    }
    const datePipe: DatePipe = new DatePipe('en-US');

    try {
      const dateParts = datePipe
        .transform(value.trim(), 'MM-dd-yyyy')
        .split('-');
      return dateParts[0] + '/' + dateParts[1] + '/' + dateParts[2];
    } catch (e) {}
    return null;
  }
}
