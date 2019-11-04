import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {RawSearchResponse} from '../../models/raw-search-response';
import {RawArtistDocumentResponse} from '../../models/raw-artist-document-response';
import {RawCountResponse} from '../../models/raw-count-response';
import {ArtistDocumentAdapter} from '../../models/artist-document-adapter';
import {map} from 'rxjs/operators';
import {RawAlbum} from '../../models/raw-album';


@Injectable({
  providedIn: 'root'
})
export class ArtisteService {

  constructor(private http: HttpClient) {
  }

  getArtistField(): Observable<any> {
    // const requestOptions: Object = {
    //   responseType: 'text'
    // }
    return this.http.get<any>(environment.api);
  }

  getArtistDocument(name: string): Observable<ArtistDocumentAdapter> {
    return this.http.get<RawArtistDocumentResponse>(`${environment.api}/api/v1/artist_all/name/${name}`)
      .pipe(map(el => new ArtistDocumentAdapter(el)));
  }

  searchArtist(searchtext: string): Observable<RawSearchResponse[]> {
    if (searchtext === '') {
      return of([]);
    }

    return this.http.get<RawSearchResponse[]>(`${environment.api}/search/fulltext/${searchtext}`);
  }

  getTopArtist(): Observable<RawCountResponse[]> {
    return this.http.get<RawCountResponse[]>(`${environment.api}/api/v1/artist/count/album?limit=10`);
  }
}
