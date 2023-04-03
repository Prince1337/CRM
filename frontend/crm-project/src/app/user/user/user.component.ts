import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users: User[] = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Doe', email: 'jane@example.com', role: 'Editor' },
    { name: 'Bob Smith', email: 'bob@example.com', role: 'Viewer' },
    { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' }
  ];

  editUser(user: User) {
    // Logic to edit user
  }

  deleteUser(user: User) {
    // Logic to delete user
  }
}

interface User {
  name: string;
  email: string;
  role: string;
}
