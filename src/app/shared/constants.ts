import { KeyValuePair } from '../shared/model/key-value-pair';

export class Constants {}

export const defaultDismissTimeOut = 8000; // in ms
export const defaultCalendarMinDate = { year: 1903, month: 1, day: 1 };
export const dateFormatYYYYMMDD = 'yyyy-MM-dd';
export const dateFormatMMDDYYYY = 'MM/dd/yyyy';

// prettier-ignore
//tslint:disable
export enum RegExps {
  CookieReader = '=([^;]+)',
  Environment = '(platform|micro|local|trinet)([a-zA-Z0-9]+).hrpassport.com',
  NumericOnly = '^[0-9]$',
  AlphaNumericOnly = '^[a-zA-Z0-9]$',
  FirstName = '[^a-zA-Z0-9\\s\\,\\.\\\'\\&\\-]',
  MiddleName = '[^a-zA-Z0-9\\s\\,\\.\\\'\\&\\-]',
  LastName = '[^a-zA-Z0-9\\s\\,\\.\\\'\\&\\-]',
  Email = '^[a-zA-Z0-9\\\'\\.\\_\\-]+@[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,18}$',
  ZipCode = '^[0-9]{5}(?:[-\s][0-9]{4})?$',
  City = '^([a-zA-Z]+[\\\']*)+(?:([\\.][\\s]|[-]|[\\s])?([a-zA-Z]+[\\\']*)+)*$',
  PostalCode = '^[a-zA-Z][0-9][a-zA-Z]\\s?[0-9][a-zA-Z][0-9]$',
  DateMMDDYYYY = '^([0]?[1-9]|[1][0-2])[\s.\/-]([0]?[1-9]|[1|2][0-9]|[3][0|1])[\s.\/-]([0-9]{4})$',
  DateYYYYMMDD = '^([0-9]{4})[\s.\/-]([0]?[1-9]|[1][0-2])[\s.\/-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$',
}
//tslint: end-disable

export enum KeyCodes {
  ENTER = 13,
  LEFT = 37,
  UP = 38,
  RIGHT = 39,
  DOWN = 40,
}

export const invalidSSNValues: string[] = [
  '000000000',
  '111111111',
  '222222222',
  '333333333',
  '444444444',
  '555555555',
  '666666666',
  '777777777',
  '888888888',
  '999999999',
  '123456789',
];
export const invalidSINValues: string[] = ['000000000'];

export const countryList: KeyValuePair[] = [
  {
    key: 'US',
    value: 'USA',
  },
  {
    key: 'CA',
    value: 'Canada',
  },
];

export enum HttpStatus {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
}

export const defaultHTTPHeaders: object = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const fieldErrors: any = {
  required: 'Required field',
  minlength: 'Must be at least {1} character',
  maxlength: 'Cannot be greater than {1} characters',
  requiredBefore: 'Date cannot be before {1}',
  requiredAfter: 'Date cannot be after {1}',
  invalid: 'Enter a valid {0}',
  message: 'Enter a valid {0}',
};
