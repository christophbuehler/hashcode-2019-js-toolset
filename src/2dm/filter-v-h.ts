import { Image } from '../libs/config';

export function filterVertical(images: Image[]): Image[] {
  return images.filter((i) => i.isVertical);
}

export function filterHorizontal(images: Image[]): Image[] {
  return images.filter((i) => !i.isVertical);
}
