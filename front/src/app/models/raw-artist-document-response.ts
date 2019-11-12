import {RawMember} from './raw-member';
import {RawLifeSpan} from './raw-life-span';
import {RawPicture} from './raw-picture';
import {RawAlbum} from './raw-album';

export interface RawArtistDocumentResponse {
  readonly _id: string;
  readonly name: string;
  readonly urlWikipedia: string;
  readonly urlOfficialWebsite: string;
  readonly urlFacebook: string;
  readonly urlMySpace: string;
  readonly urlTwitter: string;
  readonly locationInfo: string[];
  readonly genres: string[];
  readonly labels: string[];
  readonly members: RawMember[];
  readonly lifeSpan: RawLifeSpan;
  readonly gender: string;
  readonly picture: RawPicture;
  readonly albums: RawAlbum[];
  readonly deezerFans: number;
  readonly locationString: string;
}
