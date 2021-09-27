export interface Color {
  // Color type.
  //
  // mono: 'mono',
  // gradation: 'Gradation',
  //
  // default to 'mono'
  type: string = 'mono';

  // Color.
  //
  // If type is gradation, specify more than one.
  color: string[] | string;
}
