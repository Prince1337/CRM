import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-expense-category',
  templateUrl: './expense-category.component.html',
  styleUrls: ['./expense-category.component.scss']
})
export class ExpenseCategoryComponent implements OnInit {
  categories!: Category[];
  newCategory: Category = { name: '', description: '' };
  selectedCategory: Category = { name: '', description: '' };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const categoriesData = this.dataService.getData("categories");
    if (categoriesData.length > 0) {
      this.categories = categoriesData;
    } else {
      this.categories = [
        { name: 'Food', description: 'Expenses related to food and drinks' },
        { name: 'Transportation', description: 'Expenses related to transportation' },
        { name: 'Entertainment', description: 'Expenses related to entertainment activities' }
      ];
      this.dataService.saveData(this.categories, 'categories');
    }
  }

  addCategory(): void {
    this.categories.push(this.newCategory);
    this.newCategory = { name: '', description: '' };
    this.dataService.saveData(this.categories, 'categories');
  }

  updateCategory(): void {
    const index = this.categories.findIndex(category => category.name === this.selectedCategory.name);
    this.categories[index] = { ...this.selectedCategory };
    this.dataService.saveData(this.categories, 'categories');
  }

  deleteCategory(category: Category): void {
    const index = this.categories.findIndex(cat => cat.name === category.name);
    this.categories.splice(index, 1);
    this.dataService.saveData(this.categories, 'categories');
  }
}

interface Category {
  name: string;
  description: string;
}
