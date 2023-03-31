import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { ListCustomerComponent } from './customers/list-customer/list-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoicesComponent } from './sales/invoices/invoices.component';
import { NewInvoicesComponent } from './sales/new-invoices/new-invoices.component';
import { NewQuoteComponent } from './sales/new-quote/new-quote.component';
import { NewRecurringInvoicesComponent } from './sales/new-recurring-invoices/new-recurring-invoices.component';
import { NewTaxRateComponent } from './sales/new-tax-rate/new-tax-rate.component';
import { PaymentsComponent } from './sales/payments/payments.component';
import { QuotesComponent } from './sales/quotes/quotes.component';
import { RecurringInvoicesComponent } from './sales/recurring-invoices/recurring-invoices.component';
import { TaxRatesComponent } from './sales/tax-rates/tax-rates.component';

const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'add/customer', component: AddCustomerComponent},
  {path: 'list/customer', component: ListCustomerComponent},

  {path: 'sales/invoices', component: InvoicesComponent},
  {path: 'sales/invoices/new', component: NewInvoicesComponent},
  {path: 'sales/invoices/recurring', component: RecurringInvoicesComponent},
  {path: 'sales/invoices/new/recurring', component: NewRecurringInvoicesComponent},
  {path: 'sales/quotes', component: QuotesComponent},
  {path: 'sales/quotes/new', component: NewQuoteComponent},
  {path: 'sales/payments', component: PaymentsComponent},
  {path: 'sales/taxrates', component: TaxRatesComponent},
  {path: 'sales/taxrates/new', component: NewTaxRateComponent},
  
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
