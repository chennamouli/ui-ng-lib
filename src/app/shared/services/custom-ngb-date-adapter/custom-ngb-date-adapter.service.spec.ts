import { TestBed } from '@angular/core/testing';

import { CustomNgbDateAdapterService } from './custom-ngb-date-adapter.service';

describe('CustomNgbDateAdapterService', () => {
  let service: CustomNgbDateAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomNgbDateAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
