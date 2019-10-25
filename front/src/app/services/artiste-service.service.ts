import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';


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

}
