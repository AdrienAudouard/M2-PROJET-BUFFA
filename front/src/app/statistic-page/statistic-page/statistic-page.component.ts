import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StatsService} from '../../shared/services/stats.service';
import {Stats} from '../../models/enums/stats';
import {StackedBarModel} from '../stacked-bar-chart/model/stackedBarModel';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit, AfterViewInit {

  socialNetworkData = [];
  totalCountData: StackedBarModel = { artists: 0, albums: 0, songs: 0 };

  constructor(private _statsService: StatsService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._statsService.getStats().subscribe((stats) => {
      this.totalCountData = {
        artists: stats.getArtistsStat(Stats.TOTAL_COUNT),
        albums: stats.getAlbumStat(Stats.TOTAL_COUNT),
        songs: stats.getSongStat(Stats.TOTAL_COUNT)
      };

      this.socialNetworkData = [{
        name: 'Facebook',
        points: stats.getArtistsStat(Stats.FACEBOOK),
        color: '#4b9fee',
        bullet: 'https://cdn.freebiesupply.com/logos/thumbs/1x/facebook-2-logo.png'
      }, {
        name: 'Twitter',
        points: stats.getArtistsStat(Stats.TWITTER),
        color: '#006893',
        bullet: 'https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png'
      }, {
        name: 'Wikipedia',
        points: stats.getArtistsStat(Stats.WIKIPEDIA),
        color: '#bdc3c7',
        bullet: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png'
      }, {
        name: 'Deezer',
        points: stats.getArtistsStat(Stats.DEEZER),
        color: '#2c3e50',
        bullet: 'http://pluspng.com/img-png/deezer-png--187.png'
      }, {
        name: 'Amazon',
        points: stats.getArtistsStat(Stats.AMAZON),
        color: '#e67e22',
        bullet: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
      }, {
        name: 'Itunes',
        points: stats.getArtistsStat(Stats.ITUNES),
        color: '#e74c3c',
        bullet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ITunes_logo.svg/1200px-ITunes_logo.svg.png'
      }, {
        name: 'Spotify',
        points: stats.getArtistsStat(Stats.SPOTIFY),
        color: '#27ae60',
        bullet: 'https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png'
      }].sort((e1, e2) => (e2.points - e1.points));
    });
  }

}
