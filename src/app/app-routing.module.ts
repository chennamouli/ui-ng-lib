import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataEntryComponent } from './feature/components/data-entry/data-entry.component';
import { HomeComponent } from './feature/components/home/home.component';
import { Pick4Component } from './feature/components/pick4/pick4.component';

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
