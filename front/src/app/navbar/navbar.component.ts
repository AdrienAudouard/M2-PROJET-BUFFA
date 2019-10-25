import { Component, OnInit } from '@angular/core';
import {ArtisteServiceService} from '../services/artiste-service.service';
import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchAll, switchMap} from 'rxjs/operators';
import {RawSearchResponse} from '../models/RawSearchResponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links = [
    { name: 'Home', path: '/home'},
    { name: 'Top artists', path: '/top-artists'},
    { name: 'Compare two artists', path: '/compare-artists'},
  ];

  constructor(
    private _artistServices: ArtisteServiceService,
    private _router: Router,
  ) {
    this.search = this.search.bind(this);
  }

  ngOnInit() {
  }

  onSelectedItem(item: RawSearchResponse) {
    this._router.navigate(['/artist', item]);
    console.log(item);
  }

  search($text: Observable<string>) {
    return $text.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((text) => this._artistServices.searchArtist(text))
      );
  }
}
