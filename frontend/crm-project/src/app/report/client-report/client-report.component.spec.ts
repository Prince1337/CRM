import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientReportComponent } from './client-report.component';
import { FormsModule } from '@angular/forms';

describe('ClientReportComponent', () => {
  let component: ClientReportComponent;
  let fixture: ComponentFixture<ClientReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientReportComponent],
      imports: [
        FormsModule,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize clients', () => {
    expect(component.clients).toEqual([
      { id: 1, name: 'Client A' },
      { id: 2, name: 'Client B' },
      { id: 3, name: 'Client C' },
    ]);
  });

  it('should initialize selectedClient, startDate and endDate', () => {
    expect(component.selectedClient).toBeNull();
    expect(component.startDate).toBeUndefined();
    expect(component.endDate).toBeUndefined();
  });

  describe('generateReport()', () => {
    it('should set report if selectedClient, startDate and endDate are defined', () => {
      component.selectedClient = { id: 1, name: 'Client A' };
      component.startDate = new Date('2022-01-01');
      component.endDate = new Date('2022-01-31');
      component.generateReport();
      expect(component.report).toEqual([
        { name: 'Project A', hours: 40, amount: 400 },
        { name: 'Project B', hours: 25, amount: 250 },
        { name: 'Project C', hours: 15, amount: 150 },
      ]);
    });

    it('should set report to null if selectedClient, startDate or endDate are undefined', () => {
      component.generateReport();
      expect(component.report).toBeNull();

      component.selectedClient = { id: 1, name: 'Client A' };
      component.startDate = new Date('2022-01-01');
      component.generateReport();
      expect(component.report).toBeNull();

      component.startDate = undefined;
      component.endDate = new Date('2022-01-31');
      component.generateReport();
      expect(component.report).toBeNull();

      component.selectedClient = null;
      component.startDate = new Date('2022-01-01');
      component.endDate = new Date('2022-01-31');
      component.generateReport();
      expect(component.report).toBeNull();
    });
  });
});
