import { Component } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  contact: Contact = new Contact();

  onSubmit() {
    // Hier wird die Logik für das Speichern des Kontakts implementiert
    console.log('Contact saved!');
    // Formular zurücksetzen
  }
}
