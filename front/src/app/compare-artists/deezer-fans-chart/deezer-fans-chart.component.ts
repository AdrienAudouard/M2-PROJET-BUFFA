import {Component, Input, OnInit} from '@angular/core';
import {ChartData} from '../../models/chart-data';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-deezer-fans-chart',
  templateUrl: './deezer-fans-chart.component.html',
  styleUrls: ['./deezer-fans-chart.component.scss']
})
export class DeezerFansChartComponent implements OnInit {

  @Input() set data(value: ChartData[]) {
    this._data = value;
    this.updateDeezerFansChart();
  }

  _data: ChartData[] = [];

  constructor() { }

  ngOnInit() {
  }

  updateDeezerFansChart() {
    // tslint:disable-next-line:max-line-length
    const iconPath = 'M234.1,40.1c0,40.1,24.7,64.1,61.4,64.1c18.3,0,33.7-5.1,42.3-18.5v18.5 h33.5V-86.8h-34.8v81.2c-7.9-13.4-22.5-19.4-40.8-19.4C259.9-25.1,234.1-0.6,234.1,40.1L234.1,40.1z M337.6,40.1 c0,22.9-15.6,37.2-34.3,37.2c-19.4,0-34.3-14.3-34.3-37.2c0-23.3,15-37.9,34.3-37.9C322,2.2,337.6,17,337.6,40.1z';

    const chart = am4core.create('deezer-fans', am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.paddingLeft = 150;

    chart.data =  this._data;

    const series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = 'value';
    series.dataFields.category = 'name';
    series.alignLabels = true;
// this makes only A label to be visible
    series.labels.template.propertyFields.disabled = 'disabled';
    series.ticks.template.propertyFields.disabled = 'disabled';


    series.maskSprite.path = iconPath;
    series.ticks.template.locationX = 1;
    series.ticks.template.locationY = 0;

    series.labelsContainer.width = 100;

/*    chart.legend = new am4charts.Legend();
    chart.legend.position = 'top';
    chart.legend.paddingRight = 160;
    chart.legend.paddingBottom = 40;
    const marker = chart.legend.markers.template.children.getIndex(0);
    chart.legend.markers.template.width = 40;
    chart.legend.markers.template.height = 40;
    marker.cornerRadius(20, 20, 20, 20);*/
  }

}
