import {TextFormat} from './base';
import {TextArea} from './textArea';

export interface Question {
  question: TextArea;

  answerX: number;
  answerY: number;

  answerWidth: number;
  answerHeight: number;

  answerText: TextFormat;
}
