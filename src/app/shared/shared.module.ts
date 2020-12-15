import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlErrorComponent } from './components/control-error/control-error.component';

@NgModule({
  declarations: [ControlErrorComponent],
  exports: [ControlErrorComponent],
  imports: [CommonModule],
})
export class SharedModule {}
