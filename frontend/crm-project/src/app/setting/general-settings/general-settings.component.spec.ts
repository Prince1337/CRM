import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSettingsComponent } from './general-settings.component';
import { FormsModule } from '@angular/forms';

describe('GeneralSettingsComponent', () => {
  let component: GeneralSettingsComponent;
  let fixture: ComponentFixture<GeneralSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSettingsComponent ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
