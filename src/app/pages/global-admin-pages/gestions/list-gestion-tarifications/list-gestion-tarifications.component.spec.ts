import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGestionTarificationsComponent } from './list-gestion-tarifications.component';

describe('ListGestionTarificationsComponent', () => {
  let component: ListGestionTarificationsComponent;
  let fixture: ComponentFixture<ListGestionTarificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGestionTarificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGestionTarificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
