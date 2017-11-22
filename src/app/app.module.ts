import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SwapcardComponent } from './pages/swapcard/swapcard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopupComponent } from './pages/topup/topup.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

import { HomeModule } from './pages/dashboardcontent';

const appRoutes: Routes = [
  { path: 'swapcard', component: SwapcardComponent },
  { path: 'topup', component: TopupComponent },
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      loadChildren: './pages/dashboardcontent/home/home.module#HomeModule'
    }
  ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwapcardComponent,
    DashboardComponent,
    TopupComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    ClarityModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
