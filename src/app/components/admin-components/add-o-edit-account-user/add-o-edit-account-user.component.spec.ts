import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOEditAccountUserComponent } from './add-o-edit-account-user.component';

describe('AddOEditAccountUserComponent', () => {
  let component: AddOEditAccountUserComponent;
  let fixture: ComponentFixture<AddOEditAccountUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOEditAccountUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOEditAccountUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
