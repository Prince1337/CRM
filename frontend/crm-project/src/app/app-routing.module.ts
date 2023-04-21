import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPaymentComponent } from './accounting/client-payment/client-payment.component';
import { ExpenseCategoryComponent } from './accounting/expense-category/expense-category.component';
import { ExpenseManagementComponent } from './accounting/expense-management/expense-management.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ListContactComponent } from './contact/list-contact/list-contact.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { ListCustomerComponent } from './customers/list-customer/list-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents/documents.component';
import { MessageComponent } from './message/message/message.component';
import { NotesComponent } from './notes/notes/notes.component';
import { NoticeBoardComponent } from './notice-board/notice-board/notice-board.component';
import { ClientReportComponent } from './report/client-report/client-report.component';
import { ExpenseReportComponent } from './report/expense-report/expense-report.component';
import { IncomeExpenseComparisonComponent } from './report/income-expense-comparison/income-expense-comparison.component';
import { ProjectReportComponent } from './report/project-report/project-report.component';
import { InvoicesComponent } from './sales/invoices/invoices.component';
import { NewInvoicesComponent } from './sales/new-invoices/new-invoices.component';
import { NewQuoteComponent } from './sales/new-quote/new-quote.component';
import { NewRecurringInvoicesComponent } from './sales/new-recurring-invoices/new-recurring-invoices.component';
import { NewTaxRateComponent } from './sales/new-tax-rate/new-tax-rate.component';
import { PaymentsComponent } from './sales/payments/payments.component';
import { QuotesComponent } from './sales/quotes/quotes.component';
import { RecurringInvoicesComponent } from './sales/recurring-invoices/recurring-invoices.component';
import { TaxRatesComponent } from './sales/tax-rates/tax-rates.component';
import { EmailSettingsComponent } from './setting/email-settings/email-settings.component';
import { GeneralSettingsComponent } from './setting/general-settings/general-settings.component';
import { PaymentsSettingsComponent } from './setting/payments/payments.component';
import { StaffSettingsComponent } from './setting/staff-settings/staff-settings.component';
import { ArchiveTaskComponent } from './task/archive-task/archive-task.component';
import { RunningTaskComponent } from './task/running-task/running-task.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
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

  {path: 'tasks/running', component: RunningTaskComponent},
  {path: 'tasks/archive', component: ArchiveTaskComponent},

  {path: 'add/contact', component: AddContactComponent},
  {path: 'list/contact', component: ListContactComponent},

  {path: 'accounting/client-payment', component: ClientPaymentComponent},
  {path: 'accounting/expense/management', component: ExpenseManagementComponent},
  {path: 'accounting/expense/category', component: ExpenseCategoryComponent},

  {path: 'report/project', component: ProjectReportComponent},
  {path: 'report/client', component: ClientReportComponent},
  {path: 'report/expense', component: ExpenseReportComponent},
  {path: 'report/income-expense-comparison', component: IncomeExpenseComparisonComponent},

  {path: 'settings/general', component: GeneralSettingsComponent},
  {path: 'settings/staff', component: StaffSettingsComponent},
  {path: 'settings/email', component: EmailSettingsComponent},
  {path: 'settings/payment', component: PaymentsSettingsComponent},

  {path: 'user', component: UserComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'notice-board', component: NoticeBoardComponent},
  {path: 'message', component: MessageComponent},
  {path: 'notes', component: NotesComponent},

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
