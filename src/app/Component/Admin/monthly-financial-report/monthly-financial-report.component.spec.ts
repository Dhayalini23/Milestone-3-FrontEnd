import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyFinancialReportComponent } from './monthly-financial-report.component';

describe('MonthlyFinancialReportComponent', () => {
  let component: MonthlyFinancialReportComponent;
  let fixture: ComponentFixture<MonthlyFinancialReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyFinancialReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyFinancialReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
