import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecurringInvoicesComponent } from './new-recurring-invoices.component';

describe('NewRecurringInvoicesComponent', () => {
  let component: NewRecurringInvoicesComponent;
  let fixture: ComponentFixture<NewRecurringInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecurringInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRecurringInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
