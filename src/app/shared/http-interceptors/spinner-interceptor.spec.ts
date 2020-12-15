import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SpinnerInterceptor } from './spinner-interceptor';

describe('SpinnerInterceptor', () => {
  let interceptor: SpinnerInterceptor;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }],
    });
    interceptor = TestBed.inject(SpinnerInterceptor);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    const service: SpinnerInterceptor = TestBed.inject(SpinnerInterceptor);
    expect(service).toBeTruthy();
  });

  it('make http get request', () => {
    httpClient.get('http://jsonplaceholder.typicode.com/posts').subscribe((data: Array<any>) => {
      expect(data.length).toBeTruthy();
    });
  });
});
