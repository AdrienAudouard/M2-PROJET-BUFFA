import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ArtisteServiceService} from '../../services/artiste-service.service';

@Component({
    selector: 'app-artist-details',
    templateUrl: './artist-details.component.html',
    styleUrls: ['./artist-details.component.scss']
})

export class ArtistDetailsComponent implements OnInit {
    name = '';
    artistData = {};
    albumData = {};
    objectKeys = Object.keys;

    constructor(private route: ActivatedRoute, private artisteService: ArtisteServiceService) { }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.name = params['name'];
            this.getArtist();
        });
    }
    getArtist() {
        this.artisteService.getArtistField(this.name).subscribe(data => {
            this.artistData = data;
            console.log(this.artistData);
            this.albumData = data.albums;
            console.log(this.albumData);
        });
    }
}

