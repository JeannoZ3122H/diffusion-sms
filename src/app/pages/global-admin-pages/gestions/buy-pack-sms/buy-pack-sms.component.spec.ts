import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPackSmsComponent } from './buy-pack-sms.component';

describe('BuyPackSmsComponent', () => {
  let component: BuyPackSmsComponent;
  let fixture: ComponentFixture<BuyPackSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyPackSmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyPackSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
