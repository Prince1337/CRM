 
  import { Component } from '@angular/core';
  
  @Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
  })
  export class ListContactComponent {
  contacts: Contact[] = contacts;
  
  editContact(contact: Contact) {
  // Implementation for editing a contact
  }
  
  deleteContact(contact: Contact) {
  // Implementation for deleting a contact
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
  }
    console.log(`Deleting contact ${contact.firstName} ${contact.lastName}`);
  }

  }

  interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    }
    
    // Example data
    const contacts: Contact[] = [
    {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-1234'
    },
    {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '555-5678'
    },
    {
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    phone: '555-9101'
    }
    ];