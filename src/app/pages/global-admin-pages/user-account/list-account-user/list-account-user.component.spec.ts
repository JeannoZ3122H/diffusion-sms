import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountUserComponent } from './list-account-user.component';

describe('ListAccountUserComponent', () => {
  let component: ListAccountUserComponent;
  let fixture: ComponentFixture<ListAccountUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAccountUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAccountUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
