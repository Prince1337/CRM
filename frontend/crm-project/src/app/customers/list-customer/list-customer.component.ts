import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent {

  customers!: Customer[];

  downloadCSV() {
    const rows = [['First Name', 'Last Name', 'Email', 'Phone', 'Created At']];
    this.customers.forEach(customer => {
      const createdAt = new Date(customer.createdAt).toLocaleString();
      rows.push([customer.firstName, customer.lastName, customer.email, customer.phone, createdAt]);
    });
  
    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "customers.csv");
    document.body.appendChild(link);
    link.click();
  }  

}
