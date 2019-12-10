import {RawStats} from './raw-stats';
import {Stats} from './enums/stats';

export class StatsAdapter {
  artistRaw: RawStats[] = [];
  albumRaw: RawStats[] = [];
  songRaw: RawStats[] = [];

  constructor(rawArtistStats: [RawStats], rawAlbumStats: [RawStats], rawSongStats: [RawStats]) {
    this.artistRaw = rawArtistStats;
    this.albumRaw = rawAlbumStats;
    this.songRaw = rawSongStats;
  }

  getArtistsStat(stat: Stats): number {
    return this._getStat(stat, this.artistRaw);
  }

  getAlbumStat(stat: Stats): number {
    return this._getStat(stat, this.albumRaw);
  }

  getSongStat(stat: Stats): number {
    return this._getStat(stat, this.songRaw);
  }

  private _getStat(stat: Stats, raw: RawStats[]) {
    for (let i = 0; i < raw.length; i++) {
      if (raw[i]._id === stat) {
        return raw[i].value;
      }
    }

    return -1;
  }
}
