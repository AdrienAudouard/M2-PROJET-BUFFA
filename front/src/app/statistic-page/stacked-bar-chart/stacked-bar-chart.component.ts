import {Component, Input, OnInit} from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import {StackedBarModel} from './model/stackedBarModel';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit {

  @Input() set data(value: StackedBarModel) {
    this._data = value;
    this.updateChart();
  }

  chart: am4charts.XYChart;

  _data: StackedBarModel = { artists: 0, albums: 0, songs: 0 };

  constructor() { }

  ngOnInit() {
  }

  updateChart() {
    const chart = am4core.create('stacked-bar-chart', am4charts.XYChart);
    const data = this._data;
    data['cat'] = 'Total';

    chart.data = [data];

    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';

// Create axes
    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'cat';
    categoryAxis.renderer.grid.template.opacity = 0;

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.grid.template.opacity = 0;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
    valueAxis.renderer.ticks.template.stroke = am4core.color('#495C43');
    valueAxis.renderer.ticks.template.length = 10;
    valueAxis.renderer.line.strokeOpacity = 0.5;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.minGridDistance = 100;

// Create series
    function createSeries(field, name) {
      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = 'cat';
      series.stacked = true;
      series.name = name;

      const labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.locationX = 0.5;
      labelBullet.label.text = '{valueX}';
      labelBullet.label.fill = am4core.color('#fff');
    }

    createSeries('artists', 'Artists');
    createSeries('albums', 'Albums');
    createSeries('songs', 'Songs');
  }

}
