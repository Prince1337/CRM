import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from 'src/environments/environment';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component'
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
import { RunningTaskComponent } from './task/running-task/running-task.component';
import { ArchiveTaskComponent } from './task/archive-task/archive-task.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ListContactComponent } from './contact/list-contact/list-contact.component';
import { ClientPaymentComponent } from './accounting/client-payment/client-payment.component';
import { ExpenseManagementComponent } from './accounting/expense-management/expense-management.component';
import { ExpenseCategoryComponent } from './accounting/expense-category/expense-category.component';
import { ProjectReportComponent } from './report/project-report/project-report.component';
import { ClientReportComponent } from './report/client-report/client-report.component';
import { ExpenseReportComponent } from './report/expense-report/expense-report.component';
import { IncomeExpenseComparisonComponent } from './report/income-expense-comparison/income-expense-comparison.component';
import { GeneralSettingsComponent } from './setting/general-settings/general-settings.component';
import { StaffSettingsComponent } from './setting/staff-settings/staff-settings.component';
import { EmailSettingsComponent } from './setting/email-settings/email-settings.component';
import { UserComponent } from './user/user/user.component';
import { DocumentsComponent } from './documents/documents/documents.component';
import { NoticeBoardComponent } from './notice-board/notice-board/notice-board.component';
import { MessageComponent } from './message/message/message.component';
import { NotesComponent } from './notes/notes/notes.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';



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
    NewTaxRateComponent,
    RunningTaskComponent,
    ArchiveTaskComponent,
    AddContactComponent,
    ListContactComponent,
    ClientPaymentComponent,
    ExpenseManagementComponent,
    ExpenseCategoryComponent,
    ProjectReportComponent,
    ClientReportComponent,
    ExpenseReportComponent,
    IncomeExpenseComparisonComponent,
    GeneralSettingsComponent,
    StaffSettingsComponent,
    EmailSettingsComponent,
    UserComponent,
    DocumentsComponent,
    NoticeBoardComponent,
    MessageComponent,
    NotesComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
