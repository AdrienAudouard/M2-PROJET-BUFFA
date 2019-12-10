import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticPageComponent } from './statistic-page/statistic-page.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import {SharedModule} from '../shared/shared.module';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';

@NgModule({
  declarations: [StatisticPageComponent, ColumnChartComponent, StackedBarChartComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StatisticPageModule { }
