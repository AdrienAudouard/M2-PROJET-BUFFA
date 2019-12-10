import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from './search/search.component';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {ArtisteService} from './services/artiste.service';
import {DateTimeService} from './services/date-time.service';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [
    SearchComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    NgbTypeaheadModule
  ],
  providers: [
    ArtisteService,
    DateTimeService,
  ],
  exports: [
    SearchComponent,
    CardComponent,
  ]
})
export class SharedModule { }
