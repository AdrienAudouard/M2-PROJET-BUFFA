import {RawArtistDocumentResponse} from './raw-artist-document-response';
import {SocialNetworkType} from './enums/social-network-type';
import {ImageSize} from './enums/image-size';
import {AlbumAdapter} from './album-adapter';

export class ArtistDocumentAdapter {
  rawArtistDocumentresponse: RawArtistDocumentResponse;

  private _socialNetworksLinks: Map<SocialNetworkType, string>;

  readonly color: string;

  constructor(raw: RawArtistDocumentResponse) {
    this.rawArtistDocumentresponse = raw;
    this.color = this.getRandomColor();

    this.initAlbumsCovers();
  }

  initAlbumsCovers() {
    for (let i = 0; i < this.rawArtistDocumentresponse.albums.length; i ++) {
      const album = this.rawArtistDocumentresponse.albums[i];
      if (album.cover === undefined) {
        album.cover = this.rawArtistDocumentresponse.picture;
      }
    }
  }

  private _initSocialNetworksLinks() {
    const map = new Map<SocialNetworkType, string>();

    const objs = [
      { type: SocialNetworkType.WIKIPEDIA, url: this.rawArtistDocumentresponse.urlWikipedia },
      { type: SocialNetworkType.TWITTER, url: this.rawArtistDocumentresponse.urlTwitter },
      { type: SocialNetworkType.MYSPACE, url: this.rawArtistDocumentresponse.urlMySpace },
      { type: SocialNetworkType.WEB_SITE, url: this.rawArtistDocumentresponse.urlOfficialWebsite },
      { type: SocialNetworkType.FACEBOOK, url: this.rawArtistDocumentresponse.urlFacebook }
    ];

    for (const { type, url } of objs) {
      if (url !== undefined) {
        map.set(type, url);
      }
    }

    this._socialNetworksLinks = map;
  }

  get albums(): AlbumAdapter[] {
    return this.rawArtistDocumentresponse.albums
      .filter((el) => el.dateRelease !== undefined)
      .map((el) => new AlbumAdapter(el));
  }

  get id(): string {
    return this.rawArtistDocumentresponse._id;
  }

  image(size: ImageSize): string {
    return this.rawArtistDocumentresponse.picture[size];
  }

  get name(): string {
    return this.rawArtistDocumentresponse.name;
  }

  get age(): number {
    const { lifeSpan } = this.rawArtistDocumentresponse;

    if (lifeSpan.begin === '') { return 0; }

    const beginYear = lifeSpan.begin.split('-')[0];

    if (lifeSpan.end === '') {
      const actualYear = new Date().getFullYear();
      return actualYear - parseInt(beginYear, 10);
    }

    const endYear = lifeSpan.end.split('-')[0];

    return parseInt(endYear, 10) - parseInt(beginYear, 10);
  }

  get locationString(): string {
    return this.rawArtistDocumentresponse.locationInfo.join(', ');
  }

  get birthdate(): string {
    return this.rawArtistDocumentresponse.lifeSpan.begin;
  }

  getSocialNetworkLink(type: SocialNetworkType): string {
    return this._socialNetworksLinks.get(type);
  }

  get socialNetworksLinks(): Map<SocialNetworkType, string> {
    return this._socialNetworksLinks;
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
