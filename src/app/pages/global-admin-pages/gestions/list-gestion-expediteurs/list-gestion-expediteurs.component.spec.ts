import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGestionExpediteursComponent } from './list-gestion-expediteurs.component';

describe('ListGestionExpediteursComponent', () => {
  let component: ListGestionExpediteursComponent;
  let fixture: ComponentFixture<ListGestionExpediteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGestionExpediteursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGestionExpediteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
