export interface Metadata {
  // Page name.
  name: string;

  // version of using types.
  version: string;

  // canvas size.
  // default to 192x1080(FHD).
  canvasWidth: number = 1920;
  canvasHeight: number = 1080;
}
