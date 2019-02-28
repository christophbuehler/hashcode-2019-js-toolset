import chalk from 'chalk';
import { create } from 'domain';
import { extractVerticalPairs } from '../2dm/joinV1';
import exportSlides from '../2lt/export-slides';
import { Config, Image } from '../libs/config';
import { isInt } from '../libs/is-int';
import { Slide } from '../shared/slide';
import getSameTags from './get-same-tags';
import getTotalScore from './get-total-score';
import getUniqueTags from './get-unique-tags';
import { scoreTags } from './score-tags';

export function main(config: Config) {
  console.log(chalk.red('Creating slides.'));

  // Erstellung von Slides.
  const verticalImages = config.images.filter((image) => image.isVertical);
  const horizontalImages = config.images.filter((image) => !image.isVertical);
  const horizontalSlides = horizontalImages.map((image) => createSlide(image));
  const verticalSlides = extractVerticalPairs(verticalImages);

  console.log(chalk.red('Writing slides output.'));

  // const slides = sortSlides(horizontalSlides);
  const slides = sortSlides(horizontalSlides.concat(verticalSlides), config);

  const score = getTotalScore(slides);
  console.log(chalk.green(`You scored ${score} points. You are awsum!`));

  exportSlides(slides, config);
}

export function sortSlides(slides: Slide[], config: Config): Slide[] {
  /**
   * Get array of best or good matches.
   * @param slide slide to get best matches
   */
  const getBestSlides =
    config.fileName === 'b_lovely_landscapes.txt'
      ? (slide: Slide) => {
          const match = slides.find((a) => !a.predecessor);
          return match ? [match] : [];
        }
      : (slide: Slide) => {
          const tags = slide.tags;
          const sorted = slides
            .filter((a) => !a.predecessor)
            .find((a) => scoreTags(tags, a.tags) > 0);
          return sorted ? [sorted] : [];
        };

  const len = slides.length;
  slides[0].predecessor = 'FIRST SLIDE' as any;
  const arrangedSlides = [slides[0]];

  do {
    const currentSlide = arrangedSlides[arrangedSlides.length - 1];
    const bestMatches = getBestSlides(currentSlide);
    const newSlide = bestMatches.find((match: Slide) => !match.predecessor);

    if (newSlide) {
      newSlide.predecessor = currentSlide;
      arrangedSlides.push(newSlide);
    } else {
      const unoccupiedSlide = slides.find((slide) => !slide.predecessor);
      if (unoccupiedSlide) {
        unoccupiedSlide.predecessor = currentSlide;
        arrangedSlides.push(unoccupiedSlide);
      } else {
        console.log(chalk.magenta('Done sorty mi frend.'));
      }
    }
  } while (arrangedSlides.length < len);

  return arrangedSlides;
}

export function createSlide(imageOne: Image, imageTwo?: Image): Slide {
  if (imageTwo) {
    const tagsOne = imageOne.tags;
    const tagsTwo = imageTwo.tags;
    const tags = getUniqueTags(tagsOne, tagsTwo).concat(tagsTwo);

    return {
      imageOne,
      imageTwo,
      tags,
    };
  }
  return {
    imageOne,
    tags: imageOne.tags,
  };
}

/**
 * Get all valid shapes starting with this square (top left).
 * @param x
 * @param y
 * @param squares
 * @param minIngredient
 * @param maxSize
 */
export function allSlicesForSquare(
  x: number,
  y: number,
  squares: string[][],
  minPerIngredient: number,
  maxSize: number,
): any[] {
  const slices = [];
  const minSize = minPerIngredient * 2;
  for (let size = minSize; size <= maxSize; size++) {
    const shapes = possibleShapesWithSize(size);
    const potSlices = shapes
      .map((shape) => sliceAtPosition(shape, x, y))
      .filter((slice) =>
        sliceContainsIngredients(squares, slice, minPerIngredient),
      )
      .filter((slice) => sliceIsInBounds(slice, squares));

    potSlices.forEach((slice) => slices.push(slice));
  }
  return slices;
}

export function sliceIsInBounds(slice, squares): boolean {
  const colCount = squares.length;
  const rowCount = squares[0].length;
  return slice.x2 < colCount && slice.y2 < rowCount;
}

export function sliceContainsIngredients(
  squares,
  slice,
  minPerIngredient,
): boolean {
  const squareArr = sliceToSquares(slice);

  let shroomCount = 0;
  let tomatoCount = 0;
  for (const square of squareArr) {
    const val = squares[square.x][square.y];
    if (val === 'M') {
      shroomCount++;
    } else if (val === 'T') {
      tomatoCount++;
    }
  }
  return shroomCount >= minPerIngredient && tomatoCount >= minPerIngredient;
}

export function sliceToSquares(slice): any[] {
  const squares = [];
  for (let x = slice.x1; x < slice.x2; x++) {
    for (let y = slice.y1; y < slice.y2; y++) {
      squares.push({ x, y });
    }
  }
  return squares;
}

export function sliceAtPosition(shape, x, y) {
  return {
    x1: x,
    y1: y,
    x2: x + shape.x,
    y2: y + shape.y,
  };
}

export function possibleShapesWithSize(size: number) {
  if (size < 2) throw new Error(`shape size too small`);
  let x = 0;
  const shapes = [];
  do {
    x++;
    if (x > size) return shapes;
    const y = size / x;
    if (!isInt(y)) continue;
    shapes.push({ x, y });
  } while (true);
}
