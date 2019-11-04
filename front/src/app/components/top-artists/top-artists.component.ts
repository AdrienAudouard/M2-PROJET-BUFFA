import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {RawCountResponse} from '../../models/raw-count-response';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {
  topAlbumDatas = [];
  topAlbumColorScheme = {
    domain: ['#1abc9c', '#16a085', '#2ecc71', '#27ae60', '#3498db', '#2980b9', '#e67e22', '#e74c3c', '#9b59b6', '#8e44ad']
  };

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.data.subscribe((data: {topAlbum: RawCountResponse[]}) => {
      this.topAlbumDatas = data.topAlbum.map((el) => {
        return { name: el.name, value: el.sum };
      });
    });
  }

}
