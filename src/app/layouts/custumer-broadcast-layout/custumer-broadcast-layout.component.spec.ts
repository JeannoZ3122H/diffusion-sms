import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerBroadcastLayoutComponent } from './custumer-broadcast-layout.component';

describe('CustumerBroadcastLayoutComponent', () => {
  let component: CustumerBroadcastLayoutComponent;
  let fixture: ComponentFixture<CustumerBroadcastLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustumerBroadcastLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustumerBroadcastLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
