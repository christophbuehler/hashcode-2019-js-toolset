import { Image } from '../libs/config';

export interface Slide {
  imageOne: Image;
  predecessor?: Slide;
  imageTwo?: Image;
  tags: string[];
}
