import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-category',
  templateUrl: './expense-category.component.html',
  styleUrls: ['./expense-category.component.scss']
})
export class ExpenseCategoryComponent {
  categories = [
    { name: 'Category 1', description: 'Description 1' },
    { name: 'Category 2', description: 'Description 2' }
    ];
    
    newCategory = { name: '', description: '' };
    selectedCategory = { name: '', description: '' };
    
    showAddCategoryModal() {
    // show add category modal code here
    }
    
    addCategory() {
    // add category code here
    this.newCategory = { name: '', description: '' };
    }
    
    showEditCategoryModal(category: { name: string; description: string; }) {
    // show edit category modal code here
    this.selectedCategory = category;
    }
    
    updateCategory() {
    // update category code here
    this.selectedCategory = { name: '', description: '' };
    }
    
    deleteCategory(category: any) {
    // delete category code here
    }
}
