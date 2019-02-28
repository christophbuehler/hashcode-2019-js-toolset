import chalk from 'chalk';
import * as moment from 'moment';
import ndarray = require('ndarray');
import * as nj from 'numjs';
import * as mainChristoph from './2cb/main';
import * as mainDaniel from './2dm/main';
import * as mainLuca from './2lt/main';
import { User, user } from './environment';
import { chart } from './libs/charting';
import { readFileSync, writeFileSync } from './libs/file-operations';

console.log(
  chalk.blue(
    `~ Google Hash Code 2019 [build from ${moment().format('HH:mm:ss')}] ~`,
  ),
);

/**
 * Working with files:
 */
const bSmall = readFileSync('assets/b_small.in');
const config = toConfig(bSmall);

console.log(chalk.red(`I AM ${user}`));
switch (user) {
  case User.DANIEL:
    mainDaniel.main();
    break;
  case User.LUCA:
    mainLuca.main(config);
    break;
  case User.CHRISTOPH:
    mainChristoph.main();
    break;
}

chart();

/**
 * The sum of two values (for testing).
 * @param a val1
 * @param b val2
 */
export function sum(a: number, b: number) {
  return a + b;
}

// writeFileSync('out/test.txt', config);

/**
 * Raw input to config.
 * @param raw raw input string from file
 */
function toConfig(raw: string): Config {
  const arr = raw.split('\r\n');
  const header = arr[0].split(' ');

  arr.splice(0, 1);

  const rowCount = parseInt(header[0], 10);
  const colCount = parseInt(header[1], 10);
  const dataOneDim = arr.join('').split('');

  return {
    rowCount,
    colCount,
    minOfEach: parseInt(header[2], 10),
    maxSquares: parseInt(header[3], 10),
    squares: nj.array(dataOneDim).reshape(rowCount, colCount),
  };
}

export interface Config {
  rowCount: number;
  colCount: number;
  minOfEach: number;
  maxSquares: number;
  squares: ndarray<string>;
}
