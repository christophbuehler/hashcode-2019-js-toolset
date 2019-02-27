import { expect } from 'chai';
import 'mocha';
import { sum } from '../src/main';

describe('test wicked maths', () => {
  it('random test from main', () => {
    expect(sum(1, 4)).to.equal(5);
  });
});
