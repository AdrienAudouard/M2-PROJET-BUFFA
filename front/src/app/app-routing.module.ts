import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtistDetailsComponent} from './artist-details/artist-details.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'artist/:name', component: ArtistDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
