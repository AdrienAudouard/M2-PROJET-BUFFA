import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtistDetailsComponent} from './components/artist-details/artist-details.component';
import {HomeComponent} from './components/home/home.component';
import {TopArtistsComponent} from './components/top-artists/top-artists.component';
import {TopAlbumResolver} from './resolver/top-album-resolver';
import {CompareArtistsComponent} from './compare-artists/compare-artists/compare-artists.component';

const routes: Routes = [
  { path: 'artist/:name', component: ArtistDetailsComponent },
  { path: 'top-artists',
    component: TopArtistsComponent,
    resolve: {
      topAlbum: TopAlbumResolver
    }
  },
  { path: 'home', component: HomeComponent },
  { path: 'compare-artists', component: CompareArtistsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
