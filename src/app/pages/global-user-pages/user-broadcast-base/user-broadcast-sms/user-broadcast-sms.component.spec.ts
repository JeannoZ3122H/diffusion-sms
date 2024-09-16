import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBroadcastSmsComponent } from './user-broadcast-sms.component';

describe('UserBroadcastSmsComponent', () => {
  let component: UserBroadcastSmsComponent;
  let fixture: ComponentFixture<UserBroadcastSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBroadcastSmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBroadcastSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
