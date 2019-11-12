import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerFansChartComponent } from './deezer-fans-chart.component';

describe('DeezerFansChartComponent', () => {
  let component: DeezerFansChartComponent;
  let fixture: ComponentFixture<DeezerFansChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeezerFansChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerFansChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
