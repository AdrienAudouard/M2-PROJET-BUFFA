import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {RawSearchResponse} from '../../models/raw-search-response';
import {ArtisteService} from '../../shared/services/artiste.service';
import {RawArtistDocumentResponse} from '../../models/raw-artist-document-response';
import {ArtistDocumentAdapter} from '../../models/artist-document-adapter';
import * as Enum from '../../models/enums/image-size';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  imageSize = Enum.ImageSize;

  @Input() artist: ArtistDocumentAdapter = null;

  @Input() title: string;

  @Output() onArtistLoaded = new EventEmitter<ArtistDocumentAdapter>();
  @Output() onArtistDeleted = new EventEmitter<ArtistDocumentAdapter>();

  constructor(private _artisteService: ArtisteService) { }

  ngOnInit() {
  }

  onDelete() {
    this.onArtistDeleted.emit(this.artist);
  }

  onArtistSelected(name: RawSearchResponse) {
    this._artisteService.getArtistDocument(name.name).subscribe((response) => {
      this.artist = response;
      this.onArtistLoaded.emit(response);
    });
  }

}
