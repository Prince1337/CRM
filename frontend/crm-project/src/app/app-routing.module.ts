import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { ListCustomerComponent } from './customers/list-customer/list-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'add/customer', component: AddCustomerComponent},
  {path: 'list/customer', component: ListCustomerComponent},


  
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
