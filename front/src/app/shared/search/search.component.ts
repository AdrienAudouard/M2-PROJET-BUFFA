import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RawSearchResponse} from '../../models/raw-search-response';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {ArtisteService} from '../services/artiste.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() onItemSelected = new EventEmitter<RawSearchResponse>();
  @Input() placeholder = 'Search...';

  constructor(private _artistServices: ArtisteService) {
    this.search = this.search.bind(this);
  }

  onSelectedItem(item: RawSearchResponse) {
    this.onItemSelected.emit(item);
  }

  search($text: Observable<string>) {
    return $text.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((text) => this._artistServices.searchArtist(text))
    );
  }

  formatter = (x: RawSearchResponse) => x.name;

}
