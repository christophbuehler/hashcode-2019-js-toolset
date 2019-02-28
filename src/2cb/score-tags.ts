import getSameTags from './get-same-tags';
import getUniqueTags from './get-unique-tags';

export function scoreTags(tagsOne: string[], tagsTwo: string[]): number {
  const sameTags = getSameTags(tagsOne, tagsTwo);

  if (sameTags.length === 0) return 0;

  const uniqueTagsOne = getUniqueTags(tagsOne, tagsTwo);

  if (uniqueTagsOne.length === 0) return 0;

  const uniqueTagsTwo = getUniqueTags(tagsTwo, tagsOne);

  return Math.min(uniqueTagsOne.length, uniqueTagsTwo.length, sameTags.length);
}
