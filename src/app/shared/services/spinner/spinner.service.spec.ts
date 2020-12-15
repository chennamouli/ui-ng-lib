import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            sanitize: (ctx: any, val: string) => val,
            bypassSecurityTrustResourceUrl: (val: string) => val,
          },
        },
      ],
    });
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should pub req in progress as true', () => {
    service.publishReqInProgress(true);
    service.reqInProgress$
      .subscribe((data) => {
        expect(data).toBeTruthy();
      })
      .unsubscribe();
  });

  it('should pub req in progress as false', () => {
    service.publishReqInProgress();
    service.reqInProgress$
      .subscribe((data) => {
        expect(data).toBeFalsy();
      })
      .unsubscribe();
  });

  it('should pub req in progress as false 2', () => {
    service.publishReqInProgress(false);
    service.reqInProgress$
      .subscribe((data) => {
        expect(data).toBeFalsy();
      })
      .unsubscribe();
  });
});
