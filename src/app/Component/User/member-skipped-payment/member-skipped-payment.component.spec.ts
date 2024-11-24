import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSkippedPaymentComponent } from './member-skipped-payment.component';

describe('MemberSkippedPaymentComponent', () => {
  let component: MemberSkippedPaymentComponent;
  let fixture: ComponentFixture<MemberSkippedPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberSkippedPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberSkippedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
