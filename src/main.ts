import chalk from 'chalk';
import moment = require('moment');
import { chart } from './libs/charting';
import { readFileSync, writeFileSync } from './libs/file-operations';

console.log(
  chalk.blue(
    `~ Google Hash Code 2019 [build from ${moment().format('HH:mm:ss')}] ~`,
  ),
);

chart();

/**
 * The sum of two values (for testing).
 * @param a val1
 * @param b val2
 */
export function sum(a: number, b: number) {
  return a + b;
}

/**
 * Working with files:
 */
const bSmall = readFileSync('assets/b_small.in');
const config = toConfig(bSmall);
writeFileSync('out/test.txt', config);

/**
 * Raw input to config.
 * @param raw raw input string from file
 */
function toConfig(raw: string) {
  const arr = raw.split('\r\n');
  const header = arr[0].split(' ');

  arr.splice(0, 1);

  return {
    rowCound: header[0],
    colCount: header[1],
    minOfEach: header[2],
    maxSquares: header[3],
    squares: arr,
  };
}
