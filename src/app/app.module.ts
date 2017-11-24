import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from "clarity-angular";
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SwapcardComponent } from './pages/swapcard/swapcard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopupComponent } from './pages/topup/topup.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

import { HomeModule } from './pages/dashboardcontent';
import { SelectTransactionComponent } from './pages/topup/select-transaction/select-transaction.component';
import { PaymentMethodsComponent } from './pages/topup/payment-methods/payment-methods.component';
import { AddCreditByCardComponent } from './pages/topup/add-credit-by-card/add-credit-by-card.component';
import { AddCreditByCashComponent } from './pages/topup/add-credit-by-cash/add-credit-by-cash.component';

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
  },
  { path: 'selectTransaction', component: SelectTransactionComponent },
  { path: 'paymentMethod', component: PaymentMethodsComponent },
  { path: 'creditbyCard', component: AddCreditByCardComponent },
  { path: 'creditbyCash', component: AddCreditByCashComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwapcardComponent,
    DashboardComponent,
    TopupComponent,
    NavigationComponent,
    SelectTransactionComponent,
    PaymentMethodsComponent,
    AddCreditByCardComponent,
    AddCreditByCashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
