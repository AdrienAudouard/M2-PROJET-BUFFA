import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {RawCountResponse} from '../models/RawCountResponse';
import {EMPTY, Observable, of} from 'rxjs';
import {ArtisteServiceService} from '../services/artiste-service.service';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TopAlbumResolver implements Resolve<RawCountResponse[]> {
  constructor(private artistService: ArtisteServiceService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RawCountResponse[]> {
    return this.artistService.getTopArtist()
      .pipe(mergeMap(response => {
        if (response) {
          return of(response);
        } else { // id not found
          this.router.navigate(['/home']);
          return [];
        }
      }));
  }

}
