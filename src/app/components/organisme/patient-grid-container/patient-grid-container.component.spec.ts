import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGridContainerComponent } from './patient-grid-container.component';

describe('PatientGridContainerComponent', () => {
  let component: PatientGridContainerComponent;
  let fixture: ComponentFixture<PatientGridContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientGridContainerComponent]
    });
    fixture = TestBed.createComponent(PatientGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
