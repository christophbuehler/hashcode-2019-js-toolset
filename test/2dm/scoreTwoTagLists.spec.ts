import { expect } from 'chai';
import 'mocha';
import { scoreTags } from '../../src/2cb/score-tags';

const t1 = ['t1', 't2', 't3'];
const t2 = ['t3', 't4', 't5', 't17'];
const t3 = ['a', 'b', 'c'];
const t4 = ['t2'];
const t5 = ['t3', 't5', 'tx1', 'tx2'];

describe('Testing ScoreTwoTagLists', () => {
  it('t1 and t2', () => {
    expect(scoreTags(t1, t2)).to.equal(1);
  });
  it('t1 and t3', () => {
    expect(scoreTags(t1, t3)).to.equal(0);
  });
  it('t3 and t5', () => {
    expect(scoreTags(t2, t5)).to.equal(2);
  });
});
