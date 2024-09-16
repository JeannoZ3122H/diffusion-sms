import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSmsSendComponent } from './new-sms-send.component';

describe('NewSmsSendComponent', () => {
  let component: NewSmsSendComponent;
  let fixture: ComponentFixture<NewSmsSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSmsSendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSmsSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
