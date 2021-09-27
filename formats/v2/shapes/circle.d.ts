import {Color} from '../base';

export interface Circle {
  x: number;
  y: number;

  radius: number;

  lineColor: Color;

  insideColor?: Color;
  insideTransparency?: number;
}
