import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGestionOperateursComponent } from './list-gestion-operateurs.component';

describe('ListGestionOperateursComponent', () => {
  let component: ListGestionOperateursComponent;
  let fixture: ComponentFixture<ListGestionOperateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGestionOperateursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGestionOperateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
