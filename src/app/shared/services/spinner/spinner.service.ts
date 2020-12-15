import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  constructor() {}

  // tslint:disable-next-line:variable-name
  private _reqInProgress$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public readonly reqInProgress$: Observable<boolean> = this._reqInProgress$.asObservable();

  publishReqInProgress(progress: boolean = false): void {
    this._reqInProgress$.next(progress);
  }
}
