import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPayComponent } from './member-pay.component';

describe('MemberPayComponent', () => {
  let component: MemberPayComponent;
  let fixture: ComponentFixture<MemberPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
