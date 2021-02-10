import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export const patternCodes = ['B', 'C', 'G', 'R', 'T', 'P', 'Y'];

@Injectable({
  providedIn: 'root'
})
export class LottoHelperService {

  constructor(public http: HttpClient) { }

  getPatternCode(numberArray: any[]) {
    return numberArray.map(v => {
      if (v <= 5) return patternCodes[0];
      else if (v <= 10) return patternCodes[1];
      else if (v <= 15) return patternCodes[2];
      else if (v <= 20) return patternCodes[3];
      else if (v <= 25) return patternCodes[4];
      else if (v <= 30) return patternCodes[5];
      else if (v <= 35) return patternCodes[6];
    }).join('');
  }

  retrieveLatestData(url: string): Observable<any> {
    return this.http.get(url, {
      headers: new HttpHeaders({}),
      responseType: 'text'
    }).pipe(tap(data => console.log('latest data', data)));
  }
}
