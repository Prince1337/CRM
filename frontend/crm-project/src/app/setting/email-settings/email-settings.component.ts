import { Component } from '@angular/core';

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss']
})
export class EmailSettingsComponent {
  senderEmail!: string;
  smtpHost!: string;
  smtpPort!: number;
  smtpUsername!: string;
  smtpPassword!: string;

  saveEmailSettings() {
    // Code zum Speichern der E-Mail-Einstellungen
  }
}
