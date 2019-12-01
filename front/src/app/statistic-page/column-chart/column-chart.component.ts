import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ColumnChartData} from './model/column-chart-data';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit, AfterViewInit {

  @Input() set data(value: ColumnChartData[]) {
    this._data = value;
    this.updateChart();
  }

  chart: am4charts.XYChart;

  _data: ColumnChartData[] = [];

  constructor() { }

  ngOnInit() {
  }


  updateChart() {
    if (this.chart) {
      this.chart.dispose();
    }

    this.chart = am4core.create('column-test-chart', am4charts.XYChart);

    this.chart.data = this._data;

    // Create axes
    let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'name';
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.inside = false;
    categoryAxis.renderer.labels.template.fill = am4core.color('#2c3e50');
    categoryAxis.renderer.labels.template.fontSize = 20;

    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeDasharray = '4,4';
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;

// Do not crop bullets
    this.chart.maskBullets = false;

// Remove padding
    this.chart.paddingBottom = 0;

// Create series
    let series = this.chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'points';
    series.dataFields.categoryX = 'name';
    series.columns.template.propertyFields.fill = 'color';
    series.columns.template.propertyFields.stroke = 'color';
    series.columns.template.column.cornerRadiusTopLeft = 15;
    series.columns.template.column.cornerRadiusTopRight = 15;
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/b]';

// Add bullets
    let bullet = series.bullets.push(new am4charts.Bullet());
    let image = bullet.createChild(am4core.Image);
    image.horizontalCenter = 'middle';
    image.verticalCenter = 'bottom';
    image.dy = 20;
    image.y = am4core.percent(100);
    image.propertyFields.href = 'bullet';
    image.tooltipText = series.columns.template.tooltipText;
    image.propertyFields.fill = 'color';
    image.filters.push(new am4core.DropShadowFilter());
  }

  ngAfterViewInit(): void {
    this.updateChart();
  }
}
