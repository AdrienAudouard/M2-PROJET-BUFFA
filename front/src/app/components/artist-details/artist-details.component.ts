import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ArtisteService } from "../../shared/services/artiste.service"

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  name = '';
  artistData;


  constructor(private route: ActivatedRoute, private artisteService: ArtisteService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    this.artisteService.getArtistField().subscribe(data => {
      console.log("data" + data);
      this.artistData = data;
      console.log("Tab artist" + this.artistData);
    });

  }

}
