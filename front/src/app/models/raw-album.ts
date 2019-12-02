import {RawPicture} from './raw-picture';
import {RawSong} from './raw-song';

export interface RawAlbum {
  name: string;
  title: string;
  genre: string;
  length: string;
  cover: RawPicture;
  dateRelease: string;
  songs: RawSong[];
  _id: string;
}
