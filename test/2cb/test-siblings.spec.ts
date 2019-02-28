import { expect } from 'chai';
import 'mocha';
import getSiblings from '../../src/2cb/get-siblings';

describe('test siblings', () => {
  it('test siblings', () => {
    const grid = [[1, 2, 3, 4], [1, 6, 3, 4], [3, 2, 3, 4]];
    expect(getSiblings(grid, 1, 1).length).to.equal(4);
    expect(getSiblings(grid, 1, 1, true).length).to.equal(8);
  });
});
