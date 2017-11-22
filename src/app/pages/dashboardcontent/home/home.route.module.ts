import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '', 
    component: HomeComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: []
})
export class HomeRouteModule { }
