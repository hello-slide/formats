import {Color} from '.';

export interface Graph {
  // graph type.
  //
  // - bar: bar graph
  // - pie: pie chart
  type: string;

  // graph size
  size: number;

  elements: GraphElement[];
}

export interface GraphElement {
  text: string;
  id: string;

  textColor: Color;
  barOrPieColor: Color;

  // text size
  size: number;
}
