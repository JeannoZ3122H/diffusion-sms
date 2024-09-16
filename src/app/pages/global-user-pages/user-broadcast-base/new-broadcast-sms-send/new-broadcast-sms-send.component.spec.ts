import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBroadcastSmsSendComponent } from './new-broadcast-sms-send.component';

describe('NewBroadcastSmsSendComponent', () => {
  let component: NewBroadcastSmsSendComponent;
  let fixture: ComponentFixture<NewBroadcastSmsSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBroadcastSmsSendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewBroadcastSmsSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
