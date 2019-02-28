import { expect } from 'chai';
import 'mocha';
import { testMe } from '../../src/2dm/main';

describe('Primary Test 2dm for now', () => {
  it('TestMe should work', () => {
    expect(testMe()).to.equal(59);
  });
});
