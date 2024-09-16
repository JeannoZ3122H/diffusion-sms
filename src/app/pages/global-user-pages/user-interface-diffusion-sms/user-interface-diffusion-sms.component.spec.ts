import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterfaceDiffusionSmsComponent } from './user-interface-diffusion-sms.component';

describe('UserInterfaceDiffusionSmsComponent', () => {
  let component: UserInterfaceDiffusionSmsComponent;
  let fixture: ComponentFixture<UserInterfaceDiffusionSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInterfaceDiffusionSmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInterfaceDiffusionSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
