import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupContactComponent } from './add-group-contact.component';

describe('AddGroupContactComponent', () => {
  let component: AddGroupContactComponent;
  let fixture: ComponentFixture<AddGroupContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGroupContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGroupContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
