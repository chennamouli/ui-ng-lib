import { TestBed } from '@angular/core/testing';

import { CustomNgbDateParserFormatterService } from './custom-ngb-date-parser-formatter.service';

describe('CustomNgbDateParserFormatterService', () => {
  let service: CustomNgbDateParserFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomNgbDateParserFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
