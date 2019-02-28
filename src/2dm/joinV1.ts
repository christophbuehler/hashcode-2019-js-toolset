import chalk from 'chalk';
import { createSlide } from '../2cb/main';
import { scoreTags } from '../2cb/score-tags';
import { Config, Image } from '../libs/config';
import { Slide } from '../shared/slide';
import { filterVertical } from './filter-v-h';
import { scoreTagsMissmatch } from './scoreTagsMissmatch';

const minTagsToStop = 5;

// export function joinV1(config: Config): Slide[] {
//   const vList = filterVertical(config.images);

//   for (let i = 0; i < vList.length; i++) {
//     let score = 0;
//     let bestMatch = 0;
//     for (let i2 = i + 1; i2 < vList.length; i2++) {
//       const tempScore = scoreTags(vList[i].tags, vList[i2].tags);
//       if (tempScore > score) {
//         score = tempScore;
//         bestMatch = i2;
//       }
//     }
//   }

//   return null;
// }

export interface ProcessingList {
  originals: Image[];
  unused: Image[];
  slides: Slide[];
}

export function extractVerticalPairs(vImages: Image[]): Slide[] {
  const list: ProcessingList = {
    originals: vImages,
    unused: new Array<Image>(),
    slides: new Array<Slide>(),
  };

  const loopCount = 0;
  while (list.originals.length > 0) {
    // console.log(chalk.gray('in loop ' + loopCount++));
    extractLastAndBestMatch(list);
  }
  mergeRemaining(list);

  return list.slides;
}

// todo: maybe add this
function mergeRemaining(list: ProcessingList): void {
  return;
}

export function extractLastAndBestMatch(list: ProcessingList) {
  const vImages = list.originals;

  const first = vImages[vImages.length - 1];
  vImages.pop();
  const bestIndex = findBestPairWithDifferentTagsIndex(first, vImages);

  if (bestIndex === -1) {
    list.unused.push(first);
    return;
  }

  const bestmatch = vImages[bestIndex];
  vImages.splice(bestIndex, 1);

  const slide: Slide = createSlide(first, bestmatch);
  list.slides.push(slide);
}

export interface ImagesAndSlide {
  slide: Slide;
  images: Image[];
}

export function findBestPairWithDifferentTagsIndex(
  original: Image,
  vImages: Image[],
): number {
  let score = 0;
  let bestMatch = -1;
  for (let i = 0; i < vImages.length; i++) {
    const tempScore = scoreTagsMissmatch(original.tags, vImages[i].tags);
    if (tempScore > score) {
      score = tempScore;
      bestMatch = i;
      if (score >= minTagsToStop) break;
    }
  }
  if (score > 0) return bestMatch;
  return -1;
}
