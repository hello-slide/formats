import type {Image, Metadata} from './base';

import type {TextArea} from './textArea';
import type {Background} from './background';
import type {Shape} from './shape';
import type {Quiz} from './quiz';
import type {Question} from './question';

// page contents.
//
// - text area
// - image
// - shape
// - quiz
// - question
export type Contents = TextArea | Image | Shape | Quiz | Question;

export interface Page {
  metadata: Metadata;
  background: Background;

  contents: Contents[];
}
