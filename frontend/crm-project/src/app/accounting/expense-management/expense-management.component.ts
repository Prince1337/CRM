import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-management',
  templateUrl: './expense-management.component.html',
  styleUrls: ['./expense-management.component.scss']
})
export class ExpenseManagementComponent {
  expenses = [
    {date: new Date(2022, 2, 1), category: 'Office Supplies', description: 'Pens and Paper', amount: 10},
    {date: new Date(2022, 2, 3), category: 'Internet', description: 'Monthly Internet Bill', amount: 100},
    {date: new Date(2022, 2, 5), category: 'Travel', description: 'Gas for Business Trip', amount: 50},
    {date: new Date(2022, 2, 8), category: 'Meals and Entertainment', description: 'Client Dinner', amount: 75},
    {date: new Date(2022, 2, 10), category: 'Rent', description: 'Office Rent', amount: 1000},
    {date: new Date(2022, 2, 12), category: 'Marketing', description: 'Social Media Ads', amount: 200},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
