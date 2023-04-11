import { Component } from '@angular/core';
import { DataService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-expense-management',
  templateUrl: './expense-management.component.html',
  styleUrls: ['./expense-management.component.scss']
})
export class ExpenseManagementComponent {
  expenses!: Expenses[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const expensesData = this.dataService.getData("expenses");
    if (expensesData.length > 0) {
      this.expenses = expensesData;
    } else {
      this.expenses = [
        {
          date: new Date(),
          category: 'Food',
          description: 'Expenses related to food and drinks',
          amount: 100
        },
        {
          date: new Date(),
          category: 'Transportation',
          description: 'Expenses related to transportation',
          amount: 200
        },
        {
          date: new Date(),
          category: 'Entertainment',
          description: 'Expenses related to entertainment activities',
          amount: 300
        }
      ];
      this.dataService.saveData(this.expenses, 'expenses');
    }
  } 

  deleteExpenses(expenses: Expenses):void {
    const index = this.expenses.findIndex(expense => expense.date === expenses.date);
    this.expenses.splice(index, 1);
    this.dataService.saveData(this.expenses, 'expenses');
  }
}

interface Expenses {
  date: Date;
  category: string;
  description: string;
  amount: number;
}
