import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSingleContactComponent } from './import-single-contact.component';

describe('ImportSingleContactComponent', () => {
  let component: ImportSingleContactComponent;
  let fixture: ComponentFixture<ImportSingleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportSingleContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportSingleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
