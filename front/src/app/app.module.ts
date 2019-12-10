import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CompareArtistsModule} from './compare-artists/compare-artists.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TopArtistsComponent} from './components/top-artists/top-artists.component';
import {ArtistDetailsComponent} from './components/artist-details/artist-details.component';
import { FooterComponent } from './components/footer/footer.component';
import {StatisticPageModule} from './statistic-page/statistic-page.module';
import { ImgArtistComponent } from './components/artist-details/img-artist/img-artist.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailsComponent,
    HomeComponent,
    NavbarComponent,
    TopArtistsComponent,
    FooterComponent,
    ImgArtistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    CompareArtistsModule,
    StatisticPageModule,
    SharedModule,
    NgxAudioPlayerModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
