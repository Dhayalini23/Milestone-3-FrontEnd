import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualFinancialReportComponent } from './annual-financial-report.component';

describe('AnnualFinancialReportComponent', () => {
  let component: AnnualFinancialReportComponent;
  let fixture: ComponentFixture<AnnualFinancialReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnualFinancialReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualFinancialReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
