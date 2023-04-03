import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseReportComponent } from './expense-report.component';
import { FormsModule } from '@angular/forms';

describe('ExpenseReportComponent', () => {
  let component: ExpenseReportComponent;
  let fixture: ComponentFixture<ExpenseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseReportComponent ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
