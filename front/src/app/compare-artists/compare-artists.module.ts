import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompareArtistsComponent} from './compare-artists/compare-artists.component';
import { SearchCardComponent } from './search-card/search-card.component';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { TimelineComponent } from './timeline/timeline.component';
import { DeezerFansChartComponent } from './deezer-fans-chart/deezer-fans-chart.component';
import { BulletsBarChartComponent } from './bullets-bar-chart/bullets-bar-chart.component';
import { SunburstChartComponent } from './sunburst-chart/sunburst-chart.component';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    CompareArtistsComponent,
    SearchCardComponent,
    TimelineComponent,
    DeezerFansChartComponent,
    BulletsBarChartComponent,
    SunburstChartComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        FontAwesomeModule,
        NgxChartsModule,
        NgxSpinnerModule
    ]
})
export class CompareArtistsModule { }
