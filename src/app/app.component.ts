import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en-US');
    translate.use('en-US');
  }
  title = 'ui-ng-lib';
}
