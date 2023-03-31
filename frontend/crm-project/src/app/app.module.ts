import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from 'src/environments/environment';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component'
import { FormsModule } from '@angular/forms';
import { ListCustomerComponent } from './customers/list-customer/list-customer.component';
import { InvoicesComponent } from './sales/invoices/invoices.component';
import { NewInvoicesComponent } from './sales/new-invoices/new-invoices.component';
import { RecurringInvoicesComponent } from './sales/recurring-invoices/recurring-invoices.component';
import { NewRecurringInvoicesComponent } from './sales/new-recurring-invoices/new-recurring-invoices.component';
import { QuotesComponent } from './sales/quotes/quotes.component';
import { NewQuoteComponent } from './sales/new-quote/new-quote.component';
import { PaymentsComponent } from './sales/payments/payments.component';
import { TaxRatesComponent } from './sales/tax-rates/tax-rates.component';
import { NewTaxRateComponent } from './sales/new-tax-rate/new-tax-rate.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DashboardComponent,
    AddCustomerComponent,
    ListCustomerComponent,
    InvoicesComponent,
    NewInvoicesComponent,
    RecurringInvoicesComponent,
    NewRecurringInvoicesComponent,
    QuotesComponent,
    NewQuoteComponent,
    PaymentsComponent,
    TaxRatesComponent,
    NewTaxRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
