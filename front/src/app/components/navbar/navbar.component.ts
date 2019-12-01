import { Component, OnInit } from '@angular/core';
import {RawSearchResponse} from '../../models/raw-search-response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links = [
    { name: 'Home', path: '/home'},
    { name: 'Top artists', path: '/top-artists'},
    { name: 'Compare two artists', path: '/compare-artists'},
    { name: 'API Stats', path: '/statistic-page'},
  ];

  constructor(
    private _router: Router,
  ) {
  }

  onSelectedItem(item: RawSearchResponse) {
    this._router.navigate(['/artist', item.name]);
  }
}
