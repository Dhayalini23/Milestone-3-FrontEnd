import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkippedPaymentComponent } from './skipped-payment.component';

describe('SkippedPaymentComponent', () => {
  let component: SkippedPaymentComponent;
  let fixture: ComponentFixture<SkippedPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkippedPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkippedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
