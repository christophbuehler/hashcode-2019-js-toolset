import chalk from 'chalk';
import * as moment from 'moment';
import * as mainChristoph from './2cb/main';
import * as mainDaniel from './2dm/main';
import * as mainLuca from './2lt/main';
import { User, user } from './environment';
import { Config, loadConfig } from './libs/config';
import './libs/extend-array';
import * as mainShared from './shared/main';

console.log(
  chalk.blue(
    `~ Google Hash Code 2019 [build from ${moment().format('HH:mm:ss')}] ~`,
  ),
);

const configNames = [
  'a_example.txt',
  // 'b_lovely_landscapes.txt',
  // 'c_memorable_moments.txt',
  'd_pet_pictures.txt',
  // 'e_shiny_selfies.txt',
];

configNames.forEach((name: string) => run(loadConfig(name)));

function run(config: Config) {
  switch (user) {
    case User.DANIEL:
      console.log(chalk.blue('running code from daniel'));
      mainDaniel.main(config);
      break;
    case User.LUCA:
      console.log(chalk.blue('running code from luca'));
      mainLuca.main(config);
      break;
    case User.CHRISTOPH:
      console.log(chalk.blue('running code from christoph'));
      mainChristoph.main(config);
      break;
    case User.SHARED:
      console.log(chalk.blue('running shared code'));
      mainShared.main();
      break;
  }
}
