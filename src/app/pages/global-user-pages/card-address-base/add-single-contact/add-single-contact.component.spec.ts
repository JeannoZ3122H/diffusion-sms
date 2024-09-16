import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSingleContactComponent } from './add-single-contact.component';

describe('AddSingleContactComponent', () => {
  let component: AddSingleContactComponent;
  let fixture: ComponentFixture<AddSingleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSingleContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSingleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
