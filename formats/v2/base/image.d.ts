export interface Image {
  // Image url or path.
  path: string;

  // Image position.
  x: number;
  y: number;

  // Image size.
  width: number;
  height: number;

  // Filter: blur
  blur?: number;

  // Filter: flip horizontal.
  isFlipHorizontal?: boolean;

  // Filter: flip upside down
  isFlipUpsideDown?: boolean;

  // Filter: rotate.
  //
  // Specify the angle. 0 to 360
  // default to 0.
  rotate: number = 0;

  // Filter: transparency.
  //
  // default to 0.
  transparency: number = 0;
}
