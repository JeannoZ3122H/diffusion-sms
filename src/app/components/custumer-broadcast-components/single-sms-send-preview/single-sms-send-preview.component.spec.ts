import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSmsSendPreviewComponent } from './single-sms-send-preview.component';

describe('SingleSmsSendPreviewComponent', () => {
  let component: SingleSmsSendPreviewComponent;
  let fixture: ComponentFixture<SingleSmsSendPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSmsSendPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleSmsSendPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
