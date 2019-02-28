import getSameTags from '../2cb/get-same-tags';

export function scoreTagsMissmatch(
  tagsOne: string[],
  tagsTwo: string[],
): number {
  // const sameTags = getSameTags(tagsOne, tagsTwo);

  const uniqueTagsOne = tagsOne.filter(
    (tag: string) => tagsTwo.indexOf(tag) === -1,
  );

  const uniqueTagsTwo = tagsTwo.filter(
    (tag: string) => tagsOne.indexOf(tag) === -1,
  );

  return uniqueTagsOne.length + uniqueTagsTwo.length;
}
