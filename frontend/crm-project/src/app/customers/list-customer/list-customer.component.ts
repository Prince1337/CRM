import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/model/customer';
import { DataService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[] = [];

  ngOnInit(): void {
    this.dataService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  constructor(private dataService: DataService) { }
  editCustomer(customer: Customer): void {
    // Implementierung der Edit-Funktion
    console.log(`Editing customer ${customer.firstName} ${customer.lastName}`);
  }

  deleteCustomer(customer: Customer): void {
    // Implementierung der Delete-Funktion
    const index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
      this.dataService.saveData(this.customers, "customers");
    }
    console.log(`Deleting customer ${customer.firstName} ${customer.lastName}`);
  }

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
