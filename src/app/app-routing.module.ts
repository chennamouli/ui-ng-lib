import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrNothingComponent } from './feature/components/all-or-nothing/all-or-nothing.component';
import { Cash5Component } from './feature/components/cash5/cash5.component';
import { DataEntryComponent } from './feature/components/data-entry/data-entry.component';
import { HomeComponent } from './feature/components/home/home.component';
import { Pick4Component } from './feature/components/pick4/pick4.component';
import { TwoStepComponent } from './feature/components/two-step/two-step.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'data-entry',
    component: DataEntryComponent,
    data: { title: 'Data-Entry' },
  },
  {
    path: 'pick4',
    component: Pick4Component,
    data: { title: 'Pick-4' },
  },
  {
    path: 'two-step',
    component: TwoStepComponent,
    data: { title: 'Two Step' },
  },
  {
    path: 'cash5',
    component: Cash5Component,
    data: { title: 'Cash-5' },
  },
  {
    path: 'all-or-nothing',
    component: AllOrNothingComponent,
    data: { title: 'All or Nothing' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      enableTracing: false,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
