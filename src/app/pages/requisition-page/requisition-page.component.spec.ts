import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionPageComponent } from './requisition-page.component';

describe('RequisitionPageComponent', () => {
  let component: RequisitionPageComponent;
  let fixture: ComponentFixture<RequisitionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
