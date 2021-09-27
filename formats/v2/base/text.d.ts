import type {Color} from '.';

export interface Text extends TextFormat {
  text: string;
}

export interface TextFormat {
  // text size.
  size: number;

  // font name.
  font: string;

  // text color
  color: Color;

  // Filter: italic
  //
  // default false
  italic: boolean = false;

  // Filter: bold
  //
  // default false
  bold: boolean = false;
}
