import { TestBed } from '@angular/core/testing';

import { LottoHelperService } from './lotto-helper.service';

describe('LottoHelperService', () => {
  let service: LottoHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottoHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
