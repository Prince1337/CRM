import { Component } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent {
  companyName!: string;
  address!: string;
  phoneNumber!: string;
  email!: string;
}
