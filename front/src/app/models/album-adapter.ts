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

  image(size: ImageSize): string {
    return this.rawAlbum.cover[size];
  }

  get releaseDate(): string {
    console.log(this.rawAlbum);
    const date = this.rawAlbum.dateRelease;

    if (date.length === 4) {
      return `${date}-00-00`;
    }

    return date;
  }

}
