import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserMessageComponent } from './view-user-message.component';

describe('ViewUserMessageComponent', () => {
  let component: ViewUserMessageComponent;
  let fixture: ComponentFixture<ViewUserMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewUserMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
