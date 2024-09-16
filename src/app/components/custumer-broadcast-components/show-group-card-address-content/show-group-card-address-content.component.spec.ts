import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGroupCardAddressContentComponent } from './show-group-card-address-content.component';

describe('ShowGroupCardAddressContentComponent', () => {
  let component: ShowGroupCardAddressContentComponent;
  let fixture: ComponentFixture<ShowGroupCardAddressContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowGroupCardAddressContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowGroupCardAddressContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
