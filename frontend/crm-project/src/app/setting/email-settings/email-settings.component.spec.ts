import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSettingsComponent } from './email-settings.component';
import { FormsModule } from '@angular/forms';

describe('EmailSettingsComponent', () => {
  let component: EmailSettingsComponent;
  let fixture: ComponentFixture<EmailSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSettingsComponent ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
