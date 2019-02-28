import chalk from 'chalk';
import { Config } from '../libs/config';

export function main(config: Config) {
  console.log(chalk.red('I AM DANIEL'));
}

export function testMe(): number {
  console.log(chalk.blue('whatever'));
  return 59;
}
