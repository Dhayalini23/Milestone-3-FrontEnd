import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyFinancialReportComponent } from './early-financial-report.component';

describe('EarlyFinancialReportComponent', () => {
  let component: EarlyFinancialReportComponent;
  let fixture: ComponentFixture<EarlyFinancialReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarlyFinancialReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarlyFinancialReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
