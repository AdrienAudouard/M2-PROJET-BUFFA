import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {RawStats} from '../../models/raw-stats';
import {StatsAdapter} from '../../models/stats-adapter';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getStats(): Observable<StatsAdapter> {
    return forkJoin(
      this.http.get<[RawStats]>(environment.api + '/api/v1/_stats/artist/count'),
      this.http.get<[RawStats]>(environment.api + '/api/v1/_stats/album/count'),
      this.http.get<[RawStats]>(environment.api + '/api/v1/_stats/song/count')
    ).pipe(
      map(([artist, album, song]) => new StatsAdapter(artist, album, song))
    );
  }
}
