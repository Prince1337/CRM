import { Component } from '@angular/core';

import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/services/expense.service';


@Component({
  selector: 'app-expense-management',
  templateUrl: './expense-management.component.html',
  styleUrls: ['./expense-management.component.scss']
})
export class ExpenseManagementComponent {

  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getAllExpenses().subscribe((expenses: Expense[]) => {
      this.expenses = expenses;
    });
  }

  saveExpense(expense: Expense): void {
    this.expenseService.saveExpense(expense).subscribe((savedExpense: Expense) => {
      this.expenses.push(savedExpense);
    });
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.expenses = this.expenses.filter(expense => expense.id !== id);
    });
  }
  
}

interface Expenses {
  date: Date;
  category: string;
  description: string;
  amount: number;
}
