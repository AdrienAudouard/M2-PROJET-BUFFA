import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletsBarChartComponent } from './bullets-bar-chart.component';

describe('BulletsBarChartComponent', () => {
  let component: BulletsBarChartComponent;
  let fixture: ComponentFixture<BulletsBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletsBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
