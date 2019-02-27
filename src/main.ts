import chalk from 'chalk';
import moment = require('moment');

console.log(
  chalk.blue(
    `~ Google Hash Code 2019 [build from ${moment().format('hh:mm:ss')}] ~`,
  ),
);

/**
 * Working with files:
 * import { readFileSync, writeFileSync } from './libs/file-operations';
 * const bSmall = readFileSync('src/b_small.in');
 * writeFileSync('out/test.txt', bSmall);
 */
