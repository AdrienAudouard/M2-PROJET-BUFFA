import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {RawCountResponse} from '../models/raw-count-response';
import {EMPTY, Observable, of} from 'rxjs';
import {ArtisteService} from '../shared/services/artiste.service';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TopAlbumResolver implements Resolve<RawCountResponse[]> {
  constructor(private artistService: ArtisteService, private router: Router) {}

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
