import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ArtistDocumentAdapter} from '../../../models/artist-document-adapter';
import {ArtisteService} from '../../../shared/services/artiste.service';
import * as Enum from '../../../models/enums/image-size';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-img-artist',
  templateUrl: './img-artist.component.html',
  styleUrls: ['./img-artist.component.scss'],
})
export class ImgArtistComponent implements OnInit {
  name = '';
  imageSize = Enum.ImageSize;
  artistData: ArtistDocumentAdapter;

  constructor(private readonly element: ElementRef, private route: ActivatedRoute, private artisteService: ArtisteService) { }
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
  getMainColorOfImg() {
    const imgSection = document.getElementById('artist-area');
    const canvas = document.createElement('canvas');
    canvas.width = this.element.nativeElement.offSetWidth;
    canvas.height = this.element.nativeElement.offSetHeight;
    const context = canvas.getContext('2d');
    context.drawImage(canvas, 0, 0);
    const randomPosX = Math.floor(Math.random() * (this.element.nativeElement - 1) + 1);
    const randomPosY = Math.floor(Math.random() * (this.element.nativeElement - 1) + 1);
    const getPixelColor = context.getImageData(randomPosX, randomPosY, 1, 1);

    const randomPosX2 = Math.floor(Math.random() * (this.element.nativeElement - 1) + 1);
    const randomPosY2 = Math.floor(Math.random() * (this.element.nativeElement - 1) + 1);
    const getPixelColor2 = context.getImageData(randomPosX2, randomPosY2, 1, 1);
    imgSection.style.backgroundImage = `linear-gradient(to right, rgb(
    ${getPixelColor[0]},${getPixelColor[1]},
    ${getPixelColor[2]}),rgb(${getPixelColor2[0]},
    ${getPixelColor2[1]},${getPixelColor2[2]}))`;
  }
}
