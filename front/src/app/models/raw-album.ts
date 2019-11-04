import {RawPicture} from './raw-picture';

export interface RawAlbum {
  name: string;
  title: string;
  genre: string;
  length: string;
  cover: RawPicture;
  dateRelease: string;
}
