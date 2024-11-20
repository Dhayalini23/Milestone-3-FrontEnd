import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiviewReportComponent } from './riview-report.component';

describe('RiviewReportComponent', () => {
  let component: RiviewReportComponent;
  let fixture: ComponentFixture<RiviewReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiviewReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiviewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
