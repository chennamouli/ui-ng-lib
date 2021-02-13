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


  getOddNumbersProbablity(data: any[]) {
    if (!data || data.length === 0) return;
    const total = data.length;
    const numberLength = data[0].number.length;
    const map = {};
    data.forEach(item => {
      map[item.oddCount] = (map[item.oddCount] || 0) + 1;
    });
    Object.keys(map).forEach(key => map[key] = (map[key] * 100 / total).toFixed(2) + '%');
    return map;
  }

  getPatternProbability(data: any[]) {
    const map = {};
    const counts = {};
    data.forEach(item => {
      map[item.pattern] = (map[item.pattern] || 0) + 1;
      Object.keys(item.singlePatternCode).forEach(key => counts[key] = (counts[key] || 0) + item.singlePatternCode[key]);
    });
    const total = data.length;
    Object.keys(map).map(key => map[key] = (map[key] * 100 / total).toFixed(2));
    const results: any[] = Object.entries(map).map(a => ({ code: a[0], probability: a[1] }));
    Object.keys(counts).forEach(key => results.push(({ code: key, probability: (counts[key] * 100 / total).toFixed(2) })));
    return results;
  }

  getDuplicateResults(data: any[]) {
    const map = {};
    data.forEach(item => {
      let ar = map[item.key] || [];
      ar.push(item);
      map[item.key] = ar;
    });
    const temp = Object.entries(map)
      .filter((entry: any) => entry[1].length > 1)
      .map((a: any) => a[1]);
    return [].concat.apply([], temp);
  }

  getPatternCode(numberArray: any[], numberChunkWidth: number = 5) {
    if (numberChunkWidth === 10) {
      return numberArray.map(v => {
        if (v <= 10) return patternCodes[0];
        else if (v <= 20) return patternCodes[1];
        else if (v <= 30) return patternCodes[2];
        else if (v <= 40) return patternCodes[3];
        else if (v <= 50) return patternCodes[4];
        else if (v <= 60) return patternCodes[5];
        else if (v <= 79) return patternCodes[6];
      }).join('');
    }
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

  getPrettyJson(data: any) {
    return JSON.stringify(data, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }

  retrieveLatestData(url: string): Observable<any> {
    return this.http.get(url, {
      headers: new HttpHeaders({}),
      responseType: 'text'
    }).pipe(tap(data => console.log('latest data', data)));
  }
}
