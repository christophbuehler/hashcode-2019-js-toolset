import chalk from 'chalk';
import moment = require('moment');

console.log(
  chalk.blue(
    `~ Google Hash Code 2019 [build from ${moment().format('hh:mm:ss')}] ~`,
  ),
);

/**
 * The sum of two values.
 * @param a val1
 * @param b val2
 */
export function sum(a: number, b: number) {
  return a + b;
}

/**
 * Working with files:
 */
import { readFileSync, writeFileSync } from './libs/file-operations';
const bSmall = readFileSync('assets/b_small.in');
const config = toConfig(bSmall);
console.log('toConfig', toConfig(bSmall));
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
