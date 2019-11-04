import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompareArtistsComponent} from './compare-artists/compare-artists.component';
import { SearchCardComponent } from './search-card/search-card.component';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CompareArtistsComponent,
    SearchCardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    NgxChartsModule
  ]
})
export class CompareArtistsModule { }
