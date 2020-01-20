import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RawSearchResponse} from '../../models/raw-search-response';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit{

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  onSelectedItem(item: RawSearchResponse) {
    this._router.navigate(['/artist', item.name]);
  }

}
