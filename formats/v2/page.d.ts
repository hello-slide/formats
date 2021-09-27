import type {Image, Metadata} from './base';

import type {TextArea} from './textArea';
import type {Background} from './background';
import type {Shape} from './shape';
import type {Quiz} from './quiz';
import type {Question} from './question';
import type {Questionnaire} from './questionnaire';

export interface Content {
  type: 'textarea' | 'image' | 'shape' | 'quiz' | 'question' | 'questionnaire';

  // page contents.
  //
  // - text area
  // - image
  // - shape
  // - quiz
  // - question
  // - questionnaire
  element: TextArea | Image | Shape | Quiz | Question | Questionnaire;
}

export interface Page {
  metadata: Metadata;
  background: Background;

  contents: Content[];
}
