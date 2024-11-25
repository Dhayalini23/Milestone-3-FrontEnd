import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminMessageComponent } from './user-admin-message.component';

describe('UserAdminMessageComponent', () => {
  let component: UserAdminMessageComponent;
  let fixture: ComponentFixture<UserAdminMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAdminMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdminMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
