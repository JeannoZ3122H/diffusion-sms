import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOldConnectedEventsComponent } from './confirm-old-connected-events.component';

describe('ConfirmOldConnectedEventsComponent', () => {
  let component: ConfirmOldConnectedEventsComponent;
  let fixture: ComponentFixture<ConfirmOldConnectedEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmOldConnectedEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmOldConnectedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
