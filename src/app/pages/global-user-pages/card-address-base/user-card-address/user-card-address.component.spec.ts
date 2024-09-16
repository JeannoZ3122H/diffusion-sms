import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardAddressComponent } from './user-card-address.component';

describe('UserCardAddressComponent', () => {
  let component: UserCardAddressComponent;
  let fixture: ComponentFixture<UserCardAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCardAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
