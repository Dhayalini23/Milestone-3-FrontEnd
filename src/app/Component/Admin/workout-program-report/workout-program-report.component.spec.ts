import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutProgramReportComponent } from './workout-program-report.component';

describe('WorkoutProgramReportComponent', () => {
  let component: WorkoutProgramReportComponent;
  let fixture: ComponentFixture<WorkoutProgramReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutProgramReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutProgramReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
