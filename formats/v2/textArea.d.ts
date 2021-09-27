import type {Text} from './base';

export interface TextArea {
  // position.
  x: number;
  y: number;

  // area size.
  width: number;
  height: number;

  // text meta.
  text: Text;
}
