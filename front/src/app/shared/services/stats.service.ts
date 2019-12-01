import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RawArtistStats} from '../../models/raw-artist-stats';
import {ArtistStatsAdapter} from '../../models/artist-stats-adapter';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getStats(): Observable<ArtistStatsAdapter> {
    return this.http.get<[RawArtistStats]>(environment.api + '/api/v1/_stats/artist/count').pipe(map((r) => new ArtistStatsAdapter(r)));
  }
}
