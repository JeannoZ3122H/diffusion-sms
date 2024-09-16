import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoriqueRechargementComponent } from './list-historique-rechargement.component';

describe('ListHistoriqueRechargementComponent', () => {
  let component: ListHistoriqueRechargementComponent;
  let fixture: ComponentFixture<ListHistoriqueRechargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHistoriqueRechargementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListHistoriqueRechargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
