import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisteService } from '../../shared/services/artiste.service';
import { ArtistDocumentAdapter } from '../../models/artist-document-adapter';
import * as Enum from '../../models/enums/image-size';


@Component({
    selector: 'app-artist-details',
    templateUrl: './artist-details.component.html',
    styleUrls: ['./artist-details.component.scss']
})

export class ArtistDetailsComponent implements OnInit {
    name = '';
    artistDataSong: ArtistDocumentAdapter;
    artistData: ArtistDocumentAdapter;
    imageSize = Enum.ImageSize;
    headElements = ['#', 'Titre', 'Lecture'];
    songData = [];
    show = false;

    constructor(private route: ActivatedRoute, private artisteService: ArtisteService) { }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.name = params['name'];
            this.getArtist();
        });
    }
    getArtist() {
        this.artisteService.getArtistDocument(this.name).subscribe(data => {
            this.artistData = data;
        });
    }
    displaySongsOfAlbums(event) {
      this.show = !this.show;
      const songData = [];
      const eventDOM = event.target.id;
      this.artisteService.getArtistDocument(this.name).subscribe(data => {
        this.artistDataSong = data;
        const mySong = this.artistDataSong.albums;
        mySong.forEach( (value) => {
          if (eventDOM === value.title) {
            value.rawAlbum.songs.forEach((songs) => {
              songData.push(songs);
            });
          }
        });
      });
      return this.songData = songData;
    }
}

