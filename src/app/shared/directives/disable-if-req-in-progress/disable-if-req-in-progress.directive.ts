import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SpinnerService } from '../../services/spinner/spinner.service';

@Directive({
  selector: '[appDisableIfReqInProgress]',
})
export class DisableIfReqInProgressDirective implements OnInit, OnDestroy {
  constructor(
    private host: ElementRef<HTMLFormElement>,
    private ss: SpinnerService
  ) {}

  private subscription: Subscription = new Subscription();

  ngOnInit() {
    const sub = this.ss.reqInProgress$.pipe(delay(0)).subscribe((value) => {
      if (value) {
        this.element.setAttribute('disabled', 'disabled');
      } else {
        this.element.removeAttribute('disabled');
      }
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get element(): HTMLFormElement {
    return this.host.nativeElement;
  }
}
