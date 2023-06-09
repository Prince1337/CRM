import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSettingsComponent } from './staff-settings.component';
import { FormsModule } from '@angular/forms';

describe('StaffSettingsComponent', () => {
  let component: StaffSettingsComponent;
  let fixture: ComponentFixture<StaffSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSettingsComponent ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
