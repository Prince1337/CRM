import { Component } from '@angular/core';
import { UserList } from 'src/app/model/user-list';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users!: UserList[];

  constructor(private userService: UserListService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  editUser(user: UserList) {
    // Logic to edit user
  }

  deleteUser(user: UserList) {
    // Logic to delete user
  }
}