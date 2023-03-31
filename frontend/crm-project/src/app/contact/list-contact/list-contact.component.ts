import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  
  contacts!: Contact[];

  ngOnInit() {
    this.getContacts();
  }
  
  getContacts(): void {
    // TODO:todo
  }
  
  editContact(contact: Contact): void {
    // navigate to edit contact page with contact id
  }
  
  deleteContact(contact: Contact): void {
    // delete contact from database and update contacts array
  }

}
