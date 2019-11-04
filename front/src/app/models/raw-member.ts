import {RawLifeSpan} from './raw-life-span';

export interface RawMember extends RawLifeSpan {
  name: string;
  instruments: string[];
  type: string;
}
