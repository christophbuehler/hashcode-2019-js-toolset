import chalk from 'chalk';
import * as moment from 'moment';
import * as mainChristoph from './2cb/main';
import * as mainDaniel from './2dm/main';
import * as mainLuca from './2lt/main';
import { User, user } from './environment';
import { loadConfig } from './libs/config';
import './libs/extend-array';
import * as mainShared from './shared/main';

console.log(
  chalk.blue(
    `~ Google Hash Code 2019 [build from ${moment().format('HH:mm:ss')}] ~`,
  ),
);

const config = loadConfig('assets/b_small.in');

switch (user) {
  case User.DANIEL:
    console.log(chalk.blue('running code from daniel'));
    mainDaniel.main();
    break;
  case User.LUCA:
    console.log(chalk.blue('running code from luca'));
    mainLuca.main(config);
    break;
  case User.CHRISTOPH:
    console.log(chalk.blue('running code from christoph'));
    mainChristoph.main();
    break;
  case User.SHARED:
    console.log(chalk.blue('running shared code'));
    mainShared.main();
    break;
}
