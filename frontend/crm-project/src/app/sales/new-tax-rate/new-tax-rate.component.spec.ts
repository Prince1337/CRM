import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaxRateComponent } from './new-tax-rate.component';

describe('NewTaxRateComponent', () => {
  let component: NewTaxRateComponent;
  let fixture: ComponentFixture<NewTaxRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaxRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTaxRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
