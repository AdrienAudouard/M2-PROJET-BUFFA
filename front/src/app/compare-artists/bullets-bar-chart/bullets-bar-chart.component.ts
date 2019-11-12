import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {BulletBarChartData} from './model/bullet-bar-chart-data';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-bullets-bar-chart',
  templateUrl: './bullets-bar-chart.component.html',
  styleUrls: ['./bullets-bar-chart.component.scss']
})
export class BulletsBarChartComponent implements OnInit {
  @Input() set data(value: BulletBarChartData[]) {
    this._data = value;
    this.updateChart();
  }

  _data: BulletBarChartData[] = [];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  updateChart() {
    const chart = am4core.create('chart', am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingRight = 40;

    chart.data = this._data;

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'name';
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.labels.template.dx = -40;
    categoryAxis.renderer.minWidth = 120;
    categoryAxis.renderer.tooltip.dx = -40;

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.fillOpacity = 0.3;
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.baseGrid.strokeOpacity = 0;
    valueAxis.renderer.labels.template.dy = 20;

    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = 'value';
    series.dataFields.categoryY = 'name';
    series.tooltipText = '{valueX.value}';
    series.tooltip.pointerOrientation = 'vertical';
    series.tooltip.dy = - 30;
    series.columnsContainer.zIndex = 100;

    const columnTemplate = series.columns.template;
    columnTemplate.height = am4core.percent(50);
    columnTemplate.maxHeight = 50;
    columnTemplate.column.cornerRadius(60, 10, 60, 10);
    columnTemplate.strokeOpacity = 0;

    series.heatRules.push({ target: columnTemplate, property: 'fill', dataField: 'valueX', min: am4core.color('#e5dc36'), max: am4core.color('#5faa46') });
    series.mainContainer.mask = undefined;

    const cursor = new am4charts.XYCursor();
    chart.cursor = cursor;
    cursor.lineX.disabled = true;
    cursor.lineY.disabled = true;
    cursor.behavior = 'none';

    const bullet = columnTemplate.createChild(am4charts.CircleBullet);
    bullet.circle.radius = 30;
    bullet.valign = 'middle';
    bullet.align = 'left';
    bullet.isMeasured = true;
    bullet.interactionsEnabled = false;
    bullet.horizontalCenter = 'right';
    bullet.interactionsEnabled = false;

    const hoverState = bullet.states.create('hover');
    const outlineCircle = bullet.createChild(am4core.Circle);
    outlineCircle.adapter.add('radius', (radius, target) => {
      const circleBullet = target.parent;
      return circleBullet.circle.pixelRadius + 10;
    });

    const image = bullet.createChild(am4core.Image);
    image.width = 60;
    image.height = 60;
    image.horizontalCenter = 'middle';
    image.verticalCenter = 'middle';
    image.propertyFields.href = 'href';

    image.adapter.add('mask', (mask, target) => {
      const circleBullet = target.parent;
      return circleBullet.circle;
    });

    let previousBullet;
    chart.cursor.events.on('cursorpositionchanged',  (event) => {
      let dataItem = series.tooltipDataItem;

      if (dataItem.column) {
        const bullet = dataItem.column.children.getIndex(1);

        if (previousBullet && previousBullet != bullet) {
          previousBullet.isHover = false;
        }

        if (previousBullet != bullet) {

          const hs = bullet.states.getKey('hover');
          hs.properties.dx = dataItem.column.pixelWidth;
          bullet.isHover = true;

          previousBullet = bullet;
        }
      }
    });
  }

}
