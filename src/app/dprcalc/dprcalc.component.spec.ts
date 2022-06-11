import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPRCalcComponent } from './dprcalc.component';

describe('DPRCalcComponent', () => {
  let component: DPRCalcComponent;
  let fixture: ComponentFixture<DPRCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DPRCalcComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DPRCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
