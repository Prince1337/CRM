import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentsSettingsComponent } from './payments.component';


describe('PaymentsComponent', () => {
  let component: PaymentsSettingsComponent;
  let fixture: ComponentFixture<PaymentsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
