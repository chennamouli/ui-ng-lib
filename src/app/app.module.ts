import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './core/http-interceptors';
import { AllOrNothingComponent } from './feature/components/all-or-nothing/all-or-nothing.component';
import { Cash5Component } from './feature/components/cash5/cash5.component';
import { DataEntryComponent } from './feature/components/data-entry/data-entry.component';
import { HomeComponent } from './feature/components/home/home.component';
import { Pick4Component } from './feature/components/pick4/pick4.component';
import { TwoStepComponent } from './feature/components/two-step/two-step.component';
import { PatternComponent } from './feature/components/pattern/pattern.component';

export function createTranslateLoader(http: HttpClient) {
  // cache-buster, cb=time query paramer prevents from caching this file at the client side.
  return new TranslateHttpLoader(
    http,
    'assets/i18n/',
    '.json?cb=' + new Date().getTime()
  );
}

@NgModule({
  declarations: [AppComponent, DataEntryComponent, HomeComponent, Pick4Component, AllOrNothingComponent, Cash5Component, TwoStepComponent, PatternComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    SharedModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
