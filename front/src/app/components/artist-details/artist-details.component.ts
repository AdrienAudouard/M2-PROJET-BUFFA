import {Component, ElementRef, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ArtisteService} from '../../shared/services/artiste.service';
import {ArtistDocumentAdapter} from '../../models/artist-document-adapter';
import * as Enum from '../../models/enums/image-size';

@Component({
    selector: 'app-artist-details',
    templateUrl: './artist-details.component.html',
    styleUrls: ['./artist-details.component.scss']
})

export class ArtistDetailsComponent implements OnInit {
    name = '';
    artistData: ArtistDocumentAdapter;
    artistDataSong: ArtistDocumentAdapter;
    imageSize = Enum.ImageSize;
    headElements = ['#', 'Titre'];
    songData = [];
    show = false;

    constructor(private route: ActivatedRoute, private artisteService: ArtisteService, public readonly element: ElementRef) { }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.name = params['name'];
            this.getArtist();
            this.getMainColorOfImg();
        });
    }
    getArtist() {
        this.artisteService.getArtistDocument(this.name).subscribe(data => {
            this.artistData = data;
            console.log(this.artistData);
        });
    }
    // Créer un composant à part qui s'occupe simplement du main image de l'artiste
    getMainColorOfImg() {
      const img_Artist = document.getElementById('img_artist');

      const canvas = document.createElement('canvas');
      canvas.width = this.element.nativeElement.offSetWidth;
      canvas.height = this.element.nativeElement.offSetHeight;
      const context = canvas.getContext('2d');
      context.drawImage(this.element.nativeElement, 0, 0);
      const randomPosX = Math.floor(Math.random() * (this.element.nativeElement - 1) + 1);
      const randomPosY = Math.floor(Math.random() * (this.element.nativeElement - 1) + 1);
      const getPixelColor = context.getImageData(randomPosX, randomPosY, 1, 1);

      const randomPosX2 = Math.floor(Math.random() * (this.element.nativeElement - 1) + 1);
      const randomPosY2 = Math.floor(Math.random() * (this.element.nativeElement - 1) + 1);
      const getPixelColor2 = context.getImageData(randomPosX2, randomPosY2, 1, 1);
      img_Artist.style.backgroundImage = `linear-gradient(to right, rgb(${getPixelColor[0]},${getPixelColor[1]},${getPixelColor[2]}),rgb(${getPixelColor2[0]},${getPixelColor2[1]},${getPixelColor2[2]}))`;
    }
    // Créer un composant à part pour afficher les albums puis les chanssons au clic sur l'image de l'album ciblée
    displaySongsOfAlbums(event) {
      this.show = !this.show;
      const songData = [];
      const eventDOM = event.target.id;
      this.artisteService.getArtistDocument(this.name).subscribe(data => {
        this.artistDataSong = data;
        const mySong = this.artistDataSong.albums;
        mySong.forEach(function (value) {
          if (eventDOM === value.title) {
            value.rawAlbum.songs.forEach(function(songs) {
              songData.push(songs);
            });
          }
        });
      });
      return this.songData = songData;
    }
}

