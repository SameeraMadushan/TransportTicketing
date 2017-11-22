import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";
import { CommonModule } from '@angular/common';

import { HomeRouteModule } from './home.route.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    HomeRouteModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
