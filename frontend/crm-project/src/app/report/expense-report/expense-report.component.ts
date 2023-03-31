import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.scss'],
})
export class ExpenseReportComponent {
  dateRange: string = '';
  category: string = '';
  categories: string[] = [
    'Food',
    'Transportation',
    'Housing',
    'Entertainment',
    'Other',
  ];
  expenses: any[] = [
    {
      date: '2022-03-15',
      category: 'Food',
      description: 'Lunch at restaurant',
      amount: 15.5,
    },
    {
      date: '2022-03-17',
      category: 'Transportation',
      description: 'Taxi ride to airport',
      amount: 25.0,
    },
    {
      date: '2022-03-19',
      category: 'Housing',
      description: 'Hotel stay for business trip',
      amount: 120.0,
    },
    {
      date: '2022-03-21',
      category: 'Entertainment',
      description: 'Movie tickets',
      amount: 10.0,
    },
    {
      date: '2022-03-23',
      category: 'Food',
      description: 'Dinner with friends',
      amount: 30.0,
    },
    {
      date: '2022-03-25',
      category: 'Other',
      description: 'Gift for coworker',
      amount: 20.0,
    },
  ];

  generateReport() {
    let filteredExpenses = this.expenses.filter((expense) => {
      if (this.dateRange && this.category) {
        return (
          expense.date >= this.dateRange && expense.category === this.category
        );
      } else if (this.dateRange) {
        return expense.date >= this.dateRange;
      } else if (this.category) {
        return expense.category === this.category;
      } else {
        return true;
      }
    });

    this.expenses = filteredExpenses;
  }
}
