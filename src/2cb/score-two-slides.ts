import { Slide } from '../shared/slide';

export function scoreTwoSlides(slideOne: Slide, slideTwo: Slide): number {
  const sameTags = slideOne.tags.filter(
    (tag: string) => slideTwo.tags.indexOf(tag) !== -1,
  );

  const uniqueTagsOne = slideOne.tags.filter(
    (tag: string) => slideTwo.tags.indexOf(tag) === -1,
  );

  const uniqueTagsTwo = slideTwo.tags.filter(
    (tag: string) => slideOne.tags.indexOf(tag) === -1,
  );

  return Math.min(uniqueTagsOne.length, uniqueTagsTwo.length, sameTags.length);
}
