import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeGenderReportComponent } from './age-gender-report.component';

describe('AgeGenderReportComponent', () => {
  let component: AgeGenderReportComponent;
  let fixture: ComponentFixture<AgeGenderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgeGenderReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeGenderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
