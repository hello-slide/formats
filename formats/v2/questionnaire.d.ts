import {TextArea} from './textArea';
import {Graph} from './base';

export interface Questionnaire {
  title: TextArea;

  graph: Graph;

  // graph position.
  graphX: number;
  graphY: number;
}
