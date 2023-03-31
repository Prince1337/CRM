import { Component } from '@angular/core';

@Component({
  selector: 'app-income-expense-comparison',
  templateUrl: './income-expense-comparison.component.html',
  styleUrls: ['./income-expense-comparison.component.scss']
})
export class IncomeExpenseComparisonComponent {
  startDate!: string;
  endDate!: string;
  reportData: any;

  generateReport() {
    // Code to generate report data based on startDate and endDate
    // and assign it to this.reportData
  }
}
