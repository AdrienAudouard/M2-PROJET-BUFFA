import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticPageComponent } from './statistic-page/statistic-page.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';

@NgModule({
  declarations: [StatisticPageComponent, ColumnChartComponent],
  imports: [
    CommonModule
  ]
})
export class StatisticPageModule { }
