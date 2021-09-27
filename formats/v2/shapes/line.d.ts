import type {Color} from '../base';

export interface Line {
  startX: number;
  startY: number;

  endX: number;
  endY: number;

  // line color
  color: Color;

  // line width.
  // default to 1px.
  width: number = 1;

  // Tip type.
  //
  // type of:
  // - none: default.
  // - allow
  // - circle
  startTipType: string = 'none';
  endTipType: string = 'none';
}
