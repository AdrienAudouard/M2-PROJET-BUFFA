import {RawArtistStats} from './raw-artist-stats';
import {Stats} from './enums/stats';

export class ArtistStatsAdapter {
  raw: RawArtistStats[] = [];

  constructor(raw: [RawArtistStats]) {
    this.raw = raw;
  }

  getStat(stat: Stats): number {
    for (let i = 0; i < this.raw.length; i++) {
      if (this.raw[i]._id === stat) {
        return this.raw[i].value;
      }
    }

    return 0;
  }
}
