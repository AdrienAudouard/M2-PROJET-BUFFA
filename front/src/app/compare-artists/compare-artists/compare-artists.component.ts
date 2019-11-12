import {Component, OnInit} from '@angular/core';
import {ArtistDocumentAdapter} from '../../models/artist-document-adapter';
import {ChartData} from '../../models/chart-data';
import {ImageSize} from '../../models/enums/image-size';
import {DateTimeService} from '../../shared/services/date-time.service';
import {AlbumAdapter} from '../../models/album-adapter';
import {BulletBarChartData} from '../bullets-bar-chart/model/bullet-bar-chart-data';
import {SunburstData} from '../sunburst-chart/models/sunburst-data';

@Component({
  selector: 'app-compare-artists',
  templateUrl: './compare-artists.component.html',
  styleUrls: ['./compare-artists.component.scss']
})
export class CompareArtistsComponent implements OnInit {

  cardCount = [{ artist: null }];
  artistsLoaded: ArtistDocumentAdapter[] = [];
  view = [700, 400];
  timelineData: any[] = [];
  deezerFansDatas: ChartData[] = [];
  barChartData: BulletBarChartData[] = [];
  sunburstData: SunburstData[] = [];

  constructor(private _dtService: DateTimeService) {
    this.view = [innerWidth / 2, 200];
  }

  ngOnInit() {

  }

  addAddCard() {
    this.cardCount.push({ artist: null });
    console.log(this.cardCount);
  }

  onArtistDeleted(artist: ArtistDocumentAdapter) {
    this.artistsLoaded = this.artistsLoaded.filter((el) => el.id !== artist.id);
    this.cardCount = this.cardCount.filter((el) => el.artist.id !== artist.id);
    this.updateCharts();
  }

  onNewArtistLoaded(artist: ArtistDocumentAdapter, index: number) {
    this.artistsLoaded.push(artist);
    this.cardCount[index] = { artist };
    this.updateCharts();
  }

  updateCharts() {
    this.updateTimelineData();
    this.updateDeezerFansDatas();
    this.updateBarChatData();
    this.updateSunburstData();
  }

  updateBarChatData() {
    this.barChartData = this.artistsLoaded.map((el) => {
      return { name: el.name, value: el.albums.length, href: el.image(ImageSize.MEDIUM) };
    });
  }

  updateTimelineData() {
    const datas = [];

    this.artistsLoaded.forEach((el: ArtistDocumentAdapter) => {
      datas.push({
        category: '',
        start: el.birthdate,
        end: el.birthdate,
        color: el.color,
        text: `Birth of ${el.name}`,
        textDisabled: false,
        icon: el.image(ImageSize.MEDIUM)
      });

      el.albums.forEach((album: AlbumAdapter) => {
        datas.push({
          category: '',
          start: album.releaseDate,
          end: album.releaseDate,
          color: el.color,
          text: album.title,
          textDisabled: false,
          icon: album.image(ImageSize.MEDIUM)
        });
      });
    });

    this.timelineData = datas;
  }

  get ageDatas(): ChartData[] {
    return this.artistsLoaded.map((el) => {
      return { name: el.name, value: el.age};
    });
  }

  updateDeezerFansDatas() {
    this.deezerFansDatas = this.artistsLoaded.map((el) => {
      return { name: el.name, value: el.deezerFans};
    });
  }

  updateSunburstData() {
    this.sunburstData = this.artistsLoaded.map((el) => {
      const children = [];

      el.albums.forEach((album) => {
        children.push({ name: album.title, value: album.songsCount });
      });

      return {
        name: el.name,
        children
      };
    });
  }

  get hasDatas(): boolean {
    for (const card of this.cardCount) {
      if (card.artist !== null) {
        return true;
      }
    }

    return false;
  }
}
