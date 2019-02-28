import { expect } from 'chai';
import 'mocha';
import sumOfGrid from '../../src/2lt/sum-of-grid';

describe('utils', () => {
  it('test sum of grid', () => {
    const grid = [[1, 2, 3, 4], [1, 6, 3, 4], [3, 2, 3, 4]];
    expect(sumOfGrid(grid)).to.equal(36);
  });
});
