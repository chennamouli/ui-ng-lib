import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import { DisableIfReqInProgressDirective } from './directives/disable-if-req-in-progress/disable-if-req-in-progress.directive';
import { CustomNgbDateAdapterService } from './services/custom-ngb-date-adapter/custom-ngb-date-adapter.service';
import { CustomNgbDateParserFormatterService } from './services/custom-ngb-date-parser-formatter/custom-ngb-date-parser-formatter.service';
@NgModule({
  declarations: [ControlErrorComponent, DisableIfReqInProgressDirective],
  exports: [ControlErrorComponent, DisableIfReqInProgressDirective],
  imports: [CommonModule, NgbModule],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomNgbDateAdapterService },
    {
      provide: NgbDateParserFormatter,
      useClass: CustomNgbDateParserFormatterService,
    },
  ],
})
export class SharedModule {}
