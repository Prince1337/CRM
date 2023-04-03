import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-settings',
  templateUrl: './staff-settings.component.html',
  styleUrls: ['./staff-settings.component.scss']
})
export class StaffSettingsComponent {
  staff = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    position: ''
  };

  save() {
    // Code to save staff settings
  }
}
