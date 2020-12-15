import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import { DisableIfReqInProgressDirective } from './directives/disable-if-req-in-progress/disable-if-req-in-progress.directive';

@NgModule({
  declarations: [ControlErrorComponent, DisableIfReqInProgressDirective],
  exports: [ControlErrorComponent, DisableIfReqInProgressDirective],
  imports: [CommonModule],
})
export class SharedModule {}
