import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountAdminComponent } from './list-account-admin.component';

describe('ListAccountAdminComponent', () => {
  let component: ListAccountAdminComponent;
  let fixture: ComponentFixture<ListAccountAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAccountAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAccountAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
