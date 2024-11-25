import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSubscribtionsComponent } from './view-all-subscribtions.component';

describe('ViewAllSubscribtionsComponent', () => {
  let component: ViewAllSubscribtionsComponent;
  let fixture: ComponentFixture<ViewAllSubscribtionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllSubscribtionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllSubscribtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
