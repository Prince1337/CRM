import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customers!: Customer[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const customersData = this.dataService.getData("customers");
    if (customersData.length > 0) {
      this.customers = customersData;
    } else {
      this.customers = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@example.com',
          phone: '123-456-7890',
          createdAt: new Date()
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'janedoe@example.com',
          phone: '555-555-5555',
          createdAt: new Date()
        },
        {
          firstName: 'Bob',
          lastName: 'Smith',
          email: 'bobsmith@example.com',
          phone: '555-123-4567',
          createdAt: new Date()
        }
      ];
      this.dataService.saveData(this.customers, "customers");
    }
  }

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

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
}
