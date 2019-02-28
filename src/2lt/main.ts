import chalk from 'chalk';
import { Config } from 'libs/config';
// import { Config } from '../main';

export function main(config: Config) {
  const slices: Slice[] = [];
  const [colCount, rowCount] = config.squares.shape;

  console.log('colCount', colCount);
  console.log('rowCount', rowCount);
  console.log('squares', config.squares);

  const rows = (config.squares as any).tolist();

  rows.forEach((row: any[], rowI) => {
    row.forEach((square: any, colI: number) => {
      if (square === 'x') return;
      const nextSquare = row[colI + 1];
      if (nextSquare === void 0) return;
      if (nextSquare === square) return;
      row[colI] = row[colI + 1] = 'x';
      slices.push({ x1: colI, x2: colI + 1, y1: rowI, y2: rowI });
    });
  });

  config.squares.get(0);
  config.squares.set(0, 0, 4);
  config.squares.get(0, 0);

  const points = slices.reduce(
    (total, { x1, x2, y1, y2 }) =>
      total + (Math.abs(x1 - x2) + 1) * (Math.abs(y1 - y2) + 1),
    0,
  );

  console.log(chalk.green(`You've achieved ${points} points! You are awsum.`));
}

interface Slice {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
