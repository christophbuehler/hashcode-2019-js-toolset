import chalk from 'chalk';
import * as moment from 'moment';
import ndarray = require('ndarray');
import * as nj from 'numjs';
import * as mainChristoph from './2cb/main';
import * as mainDaniel from './2dm/main';
import * as mainLuca from './2lt/main';
import { User, user } from './environment';
import { chart } from './libs/charting';
import { getConfig } from './libs/config';
import { readFileSync, writeFileSync } from './libs/file-operations';

console.log(
  chalk.blue(
    `~ Google Hash Code 2019 [build from ${moment().format('HH:mm:ss')}] ~`,
  ),
);

/**
 * Working with files:
 */

const config = getConfig('assets/b_small.in');

console.log(chalk.greenBright(config.maxSquares.toString()));

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
