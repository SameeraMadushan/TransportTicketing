import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../dashboardcontent/home/home.component';

const appRoutes: Routes = [
  { path: 'dashboard/home', component: HomeComponent },
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DashboardModule { }
