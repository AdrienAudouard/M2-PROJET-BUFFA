import {RawAlbum} from './raw-album';
import {ImageSize} from './enums/image-size';

export class AlbumAdapter {
  rawAlbum: RawAlbum;

  constructor(raw: RawAlbum) {
    this.rawAlbum = raw;
  }

  get title(): string {
    return this.rawAlbum.title;
  }
  get id(): string {
    return this.rawAlbum._id;
  }

  image(size: ImageSize): string {
    return this.rawAlbum.cover[size];
  }

  get songsCount(): number {
    return this.rawAlbum.songs.length;
  }

  get releaseDate(): string {
    const date = this.rawAlbum.dateRelease;

    if (date.length === 4) {
      return `${date}-00-00`;
    }

    return date;
  }

}
