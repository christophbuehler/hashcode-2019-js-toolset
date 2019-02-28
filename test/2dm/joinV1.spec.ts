import { expect } from 'chai';
import chalk from 'chalk';
import 'mocha';
import { filterVertical } from '../../src/2dm/filter-v-h';
import {
  extractLastAndBestMatch,
  extractVerticalPairs,
  findBestPairWithDifferentTagsIndex,
} from '../../src/2dm/joinV1';
import { loadConfig } from '../../src/libs/config';

// const testcase = 'pro';
// const file = 'c_memorable_moments.txt';
// const file = 'a_example.txt';
const file = 'e_shiny_selfies.txt';

const config = loadConfig(file);

const verticals = filterVertical(config.images);

describe('Vertical 1', () => {
  // it('Extract V count', () => {
  //   expect(filterVertical(config.images).length).to.equal(2);
  // });

  const last = verticals[verticals.length - 1];
  // verticals.pop();
  // it('best pair', () => {
  //   expect(findBestPairWithDifferentTagsIndex(last, verticals)).to.equal(3);
  // });

  // const result = extractLastAndBestMatch(verticals);
  // it('extract last and best reduces remaining list', () => {
  //   expect(result.images.length === verticals.length - 1);
  // });

  // it('extract last has last as first', () => {
  //   expect(result.slide.imageOne === last);
  // });

  // it('extract last has 19 as partner', () => {
  //   expect(result.slide.imageTwo.index === 19);
  // });

  // it('extract last has 10 tags', () => {
  //   expect(result.slide.tags.length === 10);
  // });

  const result = extractVerticalPairs(verticals);
  console.log(chalk.red('found ' + result.length + 'slides'));
  it('extract last and best reduces remaining list', () => {
    expect(result.length === 1);
  });

  it('extract last has last as first', () => {
    expect(result[0].imageOne === last);
  });

  it('extract last has 19 as partner', () => {
    expect(result[0].imageTwo.index === 19);
  });

  it('extract last has 10 tags', () => {
    expect(result[0].tags.length === 10);
  });
});
