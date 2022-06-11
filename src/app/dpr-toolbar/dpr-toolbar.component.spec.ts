import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DprToolbarComponent } from './dpr-toolbar.component';

describe('DprToolbarComponent', () => {
  let component: DprToolbarComponent;
  let fixture: ComponentFixture<DprToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DprToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DprToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
