export default function getUniqueTags(tagsOne: string[], tagsTwo: string[]) {
  return tagsOne.filter((tag: string) => tagsTwo.indexOf(tag) === -1);
}
