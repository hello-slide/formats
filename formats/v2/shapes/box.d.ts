import {Color} from '../base';

export interface Box {
  startX: number;
  startY: number;

  width: number;
  height: number;

  lineColor: Color;

  insideColor?: Color;
  insideTransparency?: number;
}
