import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoriqueDiffusionComponent } from './list-historique-diffusion.component';

describe('ListHistoriqueDiffusionComponent', () => {
  let component: ListHistoriqueDiffusionComponent;
  let fixture: ComponentFixture<ListHistoriqueDiffusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHistoriqueDiffusionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListHistoriqueDiffusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
