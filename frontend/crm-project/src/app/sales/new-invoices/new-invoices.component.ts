import { Component } from '@angular/core';

@Component({
  selector: 'app-new-invoices',
  templateUrl: './new-invoices.component.html',
  styleUrls: ['./new-invoices.component.scss']
})
export class NewInvoicesComponent {
  invoice: any = {};
  customers!: Customer[];
  
  onSubmit(form: any) {
  console.log(form);
  // TODO: Save invoice data to database
  }
}

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
}