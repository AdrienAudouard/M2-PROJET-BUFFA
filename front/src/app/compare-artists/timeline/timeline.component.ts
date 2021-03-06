import {Component, Input, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_timeline from '@amcharts/amcharts4/plugins/timeline';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_bullets from '@amcharts/amcharts4/plugins/bullets';
import {DateTimeService} from '../../shared/services/date-time.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() set data(value: any[]) {
    this._data = value;
    this.updateTimeLineChart();
  }

  _data: any[] = [];

  constructor(private _dtService: DateTimeService) { }

  ngOnInit() {
  }


  updateTimeLineChart() {
    const chart = am4core.create('timeline', am4plugins_timeline.SerpentineChart);
    chart.curveContainer.padding(100, 20, 50, 20);
    chart.levelCount = 3;
    chart.yAxisRadius = am4core.percent(20);
    chart.yAxisInnerRadius = am4core.percent(2);
    chart.maskBullets = false;

    chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';
    chart.dateFormatter.dateFormat = 'dd-MM-yyyy';

    chart.data = this._data;
    chart.data.push({
      category: '',
      start: this._dtService.todayDateTimelineFormat,
      end: this._dtService.todayDateTimelineFormat,
      color: 'black',
      text: `Today`,
      textDisabled: false,
    });

    chart.fontSize = 10;
    chart.tooltipContainer.fontSize = 10;

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis() as any);
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis() as any);
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.renderer.line.strokeDasharray = '1,4';
    dateAxis.renderer.line.c
    dateAxis.renderer.line.strokeOpacity = 0.5;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor('alternativeBackground');
    dateAxis.tooltip.label.paddingTop = 7;
    dateAxis.endLocation = 0;
    dateAxis.startLocation = -0.5;

    const labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = 'middle';
    labelTemplate.fillOpacity = 0.4;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor('background');
    labelTemplate.background.fillOpacity = 0;
    labelTemplate.padding(-7, 7, 7, 7);

    const series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(15);

    series.dataFields.openDateX = 'start';
    series.dataFields.dateX = 'end';
    series.dataFields.categoryY = 'category';
    series.baseAxis = categoryAxis;
    series.columns.template.propertyFields.fill = 'color'; // get color from data
    series.columns.template.propertyFields.stroke = 'color';
    series.columns.template.strokeOpacity = 0;
    series.columns.template.fillOpacity = 0.6;

    const imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.locationX = 1;
    imageBullet1.propertyFields.stroke = 'color';
    imageBullet1.background.propertyFields.fill = 'color';
    imageBullet1.image = new am4core.Image();
    imageBullet1.tooltipText = '{start}: {text}';
    imageBullet1.image.propertyFields.href = 'icon';
    imageBullet1.image.scale = 0.5;
    imageBullet1.circle.radius = am4core.percent(100);
    imageBullet1.dy = -5;


    const textBullet = series.bullets.push(new am4charts.LabelBullet());
    textBullet.label.propertyFields.text = 'text';
    textBullet.disabled = true;
    textBullet.propertyFields.disabled = 'textDisabled';
    textBullet.label.strokeOpacity = 0;
    textBullet.locationX = 1;
    textBullet.dy = - 100;
    textBullet.label.textAlign = 'middle';

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = 'center';
    chart.scrollbarX.width = am4core.percent(75);
    chart.scrollbarX.opacity = 0.5;

    const cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = '1,4';
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;


    const label = chart.createChild(am4core.Label);
    label.text = 'Another unlucky day in the office.';
    label.isMeasured = false;
    label.y = am4core.percent(40);
    label.x = am4core.percent(50);
    label.horizontalCenter = 'middle';
    label.fontSize = 20;
  }
}
