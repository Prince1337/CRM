import { Component } from '@angular/core';

/// <reference types="jquery" />

@Component({
  selector: 'app-expense-category',
  templateUrl: './expense-category.component.html',
  styleUrls: ['./expense-category.component.scss']
})
export class ExpenseCategoryComponent {
  categories: Category[] = [
    { name: 'Food', description: 'Expenses related to food and drinks' },
    { name: 'Transportation', description: 'Expenses related to transportation' },
    { name: 'Entertainment', description: 'Expenses related to entertainment activities' }
    ];
    
    newCategory: Category = {
    name: '',
    description: ''
    };
    
    selectedCategory: Category = {
    name: '',
    description: ''
    };
    
    showAddCategoryModal(): void {
      // TODO document why this method 'showAddCategoryModal' is empty
    }
    
    addCategory(): void {
    this.categories.push(this.newCategory);
    this.newCategory = {
    name: '',
    description: ''
    };
    }
    
    showEditCategoryModal(category: Category): void {
    this.selectedCategory = { ...category };
    }
    
    updateCategory(): void {
    const index = this.categories.findIndex(category => category.name === this.selectedCategory.name);
    this.categories[index] = { ...this.selectedCategory };
    }
    
    deleteCategory(category: Category): void {
    const index = this.categories.findIndex(cat => cat.name === category.name);
    this.categories.splice(index, 1);
    }
}

interface Category {
  name: string;
  description: string;
}
