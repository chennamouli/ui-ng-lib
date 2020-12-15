import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthInterceptor } from './auth-interceptor';

const posts: Array<any> = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et ',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor b',
  },
];

describe('AuthInterceptor', () => {
  let interceptor: AuthInterceptor;
  let testHdrs: HttpHeaders;
  let req: HttpRequest<any>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ],
    });
    interceptor = TestBed.inject(AuthInterceptor);
    testHdrs = new HttpHeaders().set('Content-Type', 'text/plain');
    req = new HttpRequest('POST', '/testing', { headers: testHdrs });
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    const service: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(service).toBeTruthy();
  });

  it('should return empty object for null', () => {
    expect(interceptor.getPassedHeaders(null)).toEqual({});
  });

  it('should return empty object for {}', () => {
    expect(interceptor.getPassedHeaders(null)).toEqual({});
  });

  it('should return headers object', () => {
    const o = interceptor.getPassedHeaders(testHdrs);
    expect(o['Content-Type']).toEqual('text/plain');
  });

  it('should return combined/overwritten headers object', () => {
    const o: HttpHeaders = interceptor.getHeaders(testHdrs);
    expect(o.get('Content-Type')).toEqual('text/plain');
  });

  it('should return same http method in prod mode', () => {
    req = interceptor.getClonedReqForProd(req);
    expect(req.method).toEqual('POST');
  });

  it('should return GET http method in dev mode', () => {
    req = interceptor.getClonedReqForDevelopment(req);
    expect(req.method).toEqual('GET');
  });

  it('should test if interceptor instance defined', () => {
    expect(TestBed.inject(HTTP_INTERCEPTORS)).toBeDefined();
  });

  it('make http get request', () => {
    httpClient
      .get('http://jsonplaceholder.typicode.com/posts')
      .subscribe((data: Array<any>) => {
        expect(data.length).toBe(2);
      });
  });

  it('make http post request', () => {
    httpClient
      .post('http://jsonplaceholder.typicode.com/posts', posts)
      .subscribe();
  });
});
