import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBroadcastSmsSendPreviewComponent } from './single-broadcast-sms-send-preview.component';

describe('SingleBroadcastSmsSendPreviewComponent', () => {
  let component: SingleBroadcastSmsSendPreviewComponent;
  let fixture: ComponentFixture<SingleBroadcastSmsSendPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBroadcastSmsSendPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleBroadcastSmsSendPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
