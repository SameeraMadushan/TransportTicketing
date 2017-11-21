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
import { HomeComponent } from './pages/dashboardcontent/home/home.component';

const appRoutes: Routes = [
  { path: 'swapcard', component: SwapcardComponent },
  { path: 'topup', component: TopupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwapcardComponent,
    DashboardComponent,
    TopupComponent,
    NavigationComponent,
    HomeComponent
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
