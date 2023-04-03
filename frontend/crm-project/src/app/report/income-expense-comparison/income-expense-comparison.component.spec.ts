import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenseComparisonComponent } from './income-expense-comparison.component';
import { FormsModule } from '@angular/forms';

describe('IncomeExpenseComparisonComponent', () => {
  let component: IncomeExpenseComparisonComponent;
  let fixture: ComponentFixture<IncomeExpenseComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeExpenseComparisonComponent ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeExpenseComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
