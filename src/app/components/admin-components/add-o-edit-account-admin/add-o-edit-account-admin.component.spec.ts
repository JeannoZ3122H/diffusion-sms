import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOEditAccountAdminComponent } from './add-o-edit-account-admin.component';

describe('AddOEditAccountAdminComponent', () => {
  let component: AddOEditAccountAdminComponent;
  let fixture: ComponentFixture<AddOEditAccountAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOEditAccountAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOEditAccountAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
