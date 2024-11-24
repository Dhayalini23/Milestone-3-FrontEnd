import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProgramComponent } from './view-all-program.component';

describe('ViewAllProgramComponent', () => {
  let component: ViewAllProgramComponent;
  let fixture: ComponentFixture<ViewAllProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
