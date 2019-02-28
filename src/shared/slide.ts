import { Image } from '../libs/config';

export interface Slide {
  imageOne: Image;
  imageTwo?: Image;
  tags: string[];
}
