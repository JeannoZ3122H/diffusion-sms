import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSmsComponent } from './user-sms.component';

describe('UserSmsComponent', () => {
  let component: UserSmsComponent;
  let fixture: ComponentFixture<UserSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
