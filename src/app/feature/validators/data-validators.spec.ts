import { FormControl } from '@angular/forms';
import { DataValidators } from './data-validators';

describe('DataValidators', () => {
  it('should create an instance', () => {
    expect(new DataValidators()).toBeTruthy();
  });

  // tslint:disable:quotemark
  it('should validate first name', () => {
    expect(DataValidators.firstName(new FormControl(''))).toBeNull();
    expect(DataValidators.firstName(new FormControl(null))).toBeNull();
    expect(
      DataValidators.firstName(new FormControl('  ')).message
    ).toBeTruthy();
    expect(DataValidators.firstName(new FormControl('a'))).toBeNull();
    expect(DataValidators.firstName(new FormControl('John John'))).toBeNull();
    expect(DataValidators.firstName(new FormControl('John 007'))).toBeNull();
    expect(DataValidators.firstName(new FormControl("John's"))).toBeNull();
    expect(
      DataValidators.firstName(new FormControl('John,Oliver. John'))
    ).toBeNull();
    expect(DataValidators.firstName(new FormControl('John-Oliver'))).toBeNull();
    expect(
      DataValidators.firstName(new FormControl('John & Oliver'))
    ).toBeNull();

    expect(
      DataValidators.firstName(new FormControl('asdf@@@')).invalid
    ).toBeTruthy();
    expect(
      DataValidators.firstName(new FormControl('asdf~!#$')).invalid
    ).toBeTruthy();
  });

  // tslint:disable:quotemark
  it('should validate last name', () => {
    expect(DataValidators.lastName(new FormControl(''))).toBeNull();
    expect(DataValidators.lastName(new FormControl(null))).toBeNull();
    expect(DataValidators.lastName(new FormControl('  ')).message).toBeTruthy();
    expect(DataValidators.lastName(new FormControl('a'))).toBeNull();
    expect(DataValidators.lastName(new FormControl('John John'))).toBeNull();
    expect(DataValidators.lastName(new FormControl('John 007'))).toBeNull();
    expect(DataValidators.lastName(new FormControl("John's"))).toBeNull();
    expect(
      DataValidators.lastName(new FormControl('John,Oliver. John'))
    ).toBeNull();
    expect(DataValidators.lastName(new FormControl('John-Oliver'))).toBeNull();
    expect(
      DataValidators.lastName(new FormControl('John & Oliver'))
    ).toBeNull();

    expect(
      DataValidators.lastName(new FormControl('asdf@@@')).invalid
    ).toBeTruthy();
    expect(
      DataValidators.lastName(new FormControl('asdf~!#$')).invalid
    ).toBeTruthy();
  });

  // tslint:disable:quotemark
  it('should validate middle name', () => {
    expect(DataValidators.middleName(new FormControl(''))).toBeNull();
    expect(DataValidators.middleName(new FormControl(null))).toBeNull();
    expect(DataValidators.middleName(new FormControl('a'))).toBeNull();
    expect(DataValidators.middleName(new FormControl('John John'))).toBeNull();
    expect(DataValidators.middleName(new FormControl('John 007'))).toBeNull();
    expect(DataValidators.middleName(new FormControl("John's"))).toBeNull();
    expect(
      DataValidators.middleName(new FormControl('John,Oliver. John'))
    ).toBeNull();
    expect(
      DataValidators.middleName(new FormControl('John-Oliver'))
    ).toBeNull();
    expect(
      DataValidators.middleName(new FormControl('John & Oliver'))
    ).toBeNull();

    expect(
      DataValidators.middleName(new FormControl('asdf@@@')).invalid
    ).toBeTruthy();
    expect(
      DataValidators.middleName(new FormControl('asdf~!#$')).invalid
    ).toBeTruthy();
  });

  it('should validate phone number', () => {
    expect(DataValidators.phoneNumber(new FormControl(''))).toBeNull();
    expect(DataValidators.phoneNumber(new FormControl(null))).toBeNull();
    expect(
      DataValidators.phoneNumber(new FormControl('  ')).message
    ).toBeTruthy();
    expect(
      DataValidators.phoneNumber(new FormControl('1234567890'))
    ).toBeNull();
    expect(
      DataValidators.phoneNumber(new FormControl('123')).message
    ).toBeTruthy();
    expect(
      DataValidators.phoneNumber(new FormControl('123asdf')).message
    ).toBeTruthy();
  });

  it('should validate personal email', () => {
    expect(DataValidators.personalEmail(new FormControl(''))).toBeNull();
    expect(DataValidators.personalEmail(new FormControl(null))).toBeNull();
    expect(
      DataValidators.personalEmail(new FormControl('asdf@gmail.com'))
    ).toBeNull();
    expect(
      DataValidators.personalEmail(new FormControl('asdf@gmail.com'))
    ).toBeNull();
    expect(
      DataValidators.personalEmail(
        new FormControl('asdf-asdf@trinet-trinet.com')
      )
    ).toBeNull();
    expect(
      DataValidators.personalEmail(
        new FormControl('Hi-Hello_123@trinet.trinet.com')
      )
    ).toBeNull();
    expect(
      DataValidators.personalEmail(new FormControl('asdf@com')).message
    ).toBeTruthy();
    expect(
      DataValidators.personalEmail(new FormControl('gmail@com')).message
    ).toBeTruthy();
    expect(
      DataValidators.personalEmail(new FormControl('asdf@gmail')).message
    ).toBeTruthy();
  });

  it('should validate work email', () => {
    expect(DataValidators.workEmail(new FormControl(''))).toBeNull();
    expect(DataValidators.workEmail(new FormControl(null))).toBeNull();
    expect(
      DataValidators.workEmail(new FormControl('  ')).message
    ).toBeTruthy();
    expect(
      DataValidators.workEmail(new FormControl('asdf@gmail.com'))
    ).toBeNull();
    expect(
      DataValidators.workEmail(new FormControl('asdf@gmail.com'))
    ).toBeNull();
    expect(
      DataValidators.workEmail(new FormControl('asdf-asdf@trinet-trinet.com'))
    ).toBeNull();
    expect(
      DataValidators.workEmail(
        new FormControl('Hi-Hello_123@trinet.trinet.com')
      )
    ).toBeNull();
    expect(
      DataValidators.workEmail(new FormControl('asdf@com')).message
    ).toBeTruthy();
    expect(
      DataValidators.workEmail(new FormControl('gmail@com')).message
    ).toBeTruthy();
    expect(
      DataValidators.workEmail(new FormControl('asdf@gmail')).message
    ).toBeTruthy();
  });

  it('should validate ssn', () => {
    expect(DataValidators.ssn(new FormControl(''))).toBeNull();
    expect(DataValidators.ssn(new FormControl(null))).toBeNull();
    expect(DataValidators.ssn(new FormControl('245235493'))).toBeNull();
    expect(DataValidators.ssn(new FormControl('123')).message).toBeTruthy();
    expect(
      DataValidators.ssn(new FormControl('923456789')).message
    ).toBeTruthy(); // do not start with 9
    expect(
      DataValidators.ssn(new FormControl('000456789')).message
    ).toBeTruthy(); // do not start with 000
    expect(
      DataValidators.ssn(new FormControl('666456789')).message
    ).toBeTruthy(); // do not start with 666
    expect(
      DataValidators.ssn(new FormControl('923006789')).message
    ).toBeTruthy(); // do not contain middle 00
    expect(
      DataValidators.ssn(new FormControl('923450000')).message
    ).toBeTruthy(); // do not end with 0000
    expect(
      DataValidators.ssn(new FormControl('111111111')).message
    ).toBeTruthy(); // invalid ssn
  });

  it('should validate sin', () => {
    expect(DataValidators.sin(new FormControl(''))).toBeNull();
    expect(DataValidators.sin(new FormControl(null))).toBeNull();
    expect(DataValidators.sin(new FormControl('570 699 397'))).toBeNull();
    expect(
      DataValidators.sin(new FormControl('570 699 399')).message
    ).toBeTruthy(); // invalid
    expect(DataValidators.sin(new FormControl('570 699')).message).toBeTruthy(); // invalid length
    expect(
      DataValidators.sin(new FormControl('070 699 399')).message
    ).toBeTruthy(); // starts with 0
    expect(
      DataValidators.sin(new FormControl('870 699 399')).message
    ).toBeTruthy(); // starts with 8
  });

  it('should validate zip', () => {
    expect(DataValidators.zip(new FormControl(''))).toBeNull();
    expect(DataValidators.zip(new FormControl(null))).toBeNull();
    expect(DataValidators.zip(new FormControl('570')).invalid).toBeTruthy();
    expect(DataValidators.zip(new FormControl('57069'))).toBeNull();
    expect(DataValidators.zip(new FormControl('570699')).invalid).toBeTruthy();
    expect(DataValidators.zip(new FormControl('123456789'))).toBeNull();
  });

  it('should validate postal code', () => {
    expect(DataValidators.postalCode(new FormControl(''))).toBeNull();
    expect(DataValidators.postalCode(new FormControl(null))).toBeNull();
    expect(
      DataValidators.postalCode(new FormControl('a9')).invalid
    ).toBeTruthy();
    expect(
      DataValidators.postalCode(new FormControl('a9a')).invalid
    ).toBeTruthy();
    expect(DataValidators.postalCode(new FormControl('a9a9a9'))).toBeNull();
  });

  it('should validate address line 1', () => {
    expect(DataValidators.addressLine1(new FormControl(''))).toBeNull();
    expect(DataValidators.addressLine1(new FormControl(null))).toBeNull();
    expect(
      DataValidators.addressLine1(new FormControl('   ')).message
    ).toBeTruthy();
  });

  it('should validate city', () => {
    expect(DataValidators.city(new FormControl(''))).toBeNull();
    expect(DataValidators.city(new FormControl(null))).toBeNull();
    expect(DataValidators.city(new FormControl('Austin'))).toBeNull();
    expect(DataValidators.city(new FormControl('   ')).message).toBeTruthy();
    expect(
      DataValidators.city(new FormControl('Austin,')).message
    ).toBeTruthy();
    expect(
      DataValidators.city(new FormControl('Au-.stin')).message
    ).toBeTruthy();
    expect(
      DataValidators.city(new FormControl('Aus  tin')).message
    ).toBeTruthy();
    expect(
      DataValidators.city(new FormControl('Aus- tin')).message
    ).toBeTruthy();
  });
});
