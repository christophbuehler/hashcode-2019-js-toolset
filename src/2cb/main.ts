import chalk from 'chalk';
import { isInt } from '../libs/is-int';

export function main() {}

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
