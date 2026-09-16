import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultIncidents } from './consult-incidents';

describe('ConsultIncidents', () => {
  let component: ConsultIncidents;
  let fixture: ComponentFixture<ConsultIncidents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultIncidents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultIncidents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
