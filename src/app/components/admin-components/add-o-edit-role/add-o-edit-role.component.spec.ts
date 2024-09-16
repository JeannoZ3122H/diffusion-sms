import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOEditRoleComponent } from './add-o-edit-role.component';

describe('AddOEditRoleComponent', () => {
  let component: AddOEditRoleComponent;
  let fixture: ComponentFixture<AddOEditRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOEditRoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOEditRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
