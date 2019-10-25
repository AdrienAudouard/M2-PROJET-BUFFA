import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import {Observable, of} from 'rxjs';
import {RawSearchResponse} from '../models/RawSearchResponse';
import {RawCountResponse} from "../models/RawCountResponse";


@Injectable({
  providedIn: 'root'
})
export class ArtisteServiceService {

  constructor(private http: HttpClient) {
  }
  getArtistField(): Observable<any> {
    // const requestOptions: Object = {
    //   responseType: 'text'
    // }
    return this.http.get<any>(environment.api);
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
