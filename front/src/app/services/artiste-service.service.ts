import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable, of } from 'rxjs';
import { RawSearchResponse } from '../models/RawSearchResponse';


@Injectable({
  providedIn: 'root'
})
export class ArtisteServiceService {

  constructor(private http: HttpClient) {
  }
  getArtistField(name: string): Observable<any> {
    // const requestOptions: Object = {
    //   responseType: 'text'
    // }
    return this.http.get(`${environment.api}/search/artist/${name}`);
  }

  searchArtist(searchtext: string): Observable<RawSearchResponse[]> {
    if (searchtext === '') {
      return of([]);
    }

    return this.http.get<RawSearchResponse[]>(`${environment.api}/search/fulltext/${searchtext}`);
  }
}
