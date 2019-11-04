import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
    objectKeys = Object.keys;
    imageSize = Enum.ImageSize;

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
            console.log(this.artistData);
        });
    }
}

