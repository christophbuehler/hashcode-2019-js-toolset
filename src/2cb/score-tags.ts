import getSameTags from './get-same-tags';

export function scoreTags(tagsOne: string[], tagsTwo: string[]): number {
  const sameTags = getSameTags(tagsOne, tagsTwo);

  const uniqueTagsOne = tagsOne.filter(
    (tag: string) => tagsTwo.indexOf(tag) === -1,
  );

  const uniqueTagsTwo = tagsTwo.filter(
    (tag: string) => tagsOne.indexOf(tag) === -1,
  );

  return Math.min(uniqueTagsOne.length, uniqueTagsTwo.length, sameTags.length);
}
