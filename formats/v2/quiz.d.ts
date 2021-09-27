import {Graph} from './base';
import {TextArea} from './textArea';

export interface Quiz {
  question: TextArea;

  graph: Graph;

  // graph position.
  graphX: number;
  graphY: number;

  answer: QuizAnswer;
}

export interface QuizAnswer {
  id: string;

  text: TextArea;
}
