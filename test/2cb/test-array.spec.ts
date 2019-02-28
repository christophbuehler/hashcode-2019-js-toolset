import { expect } from 'chai';
import 'mocha';
import '../../src/libs/extend-array';

describe('test array', () => {
  it('col count', () => {
    const arr1d = [1, 1, 1];
    expect(arr1d._colCount2d()).to.equal(-1);
    const arr2d = [[1, 1, 1], [1, 4, 1], [1, 1, 1], [1, 1, 1]];
    expect(arr2d._colCount2d()).to.equal(3);
  });
  it('row count', () => {
    const arr1d = [1, 1, 1];
    expect(arr1d._rowCount2d()).to.equal(3);
    const arr2d = [[1, 1, 1], [1, 4, 1], [1, 1, 1], [1, 1, 1]];
    expect(arr2d._rowCount2d()).to.equal(4);
  });
  it('get', () => {
    const arr2d = [[1, 1, 1], [1, 1, 4], [1, 1, 1], [1, 1, 1]];
    expect(arr2d._get2d(1, 2)).to.equal(4);
    expect(arr2d._get2d(1, 1)).to.equal(1);
  });
});
