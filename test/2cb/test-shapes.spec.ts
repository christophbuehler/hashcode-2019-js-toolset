import { expect } from 'chai';
import 'mocha';
import { possibleShapesWithSize } from '../../src/2cb/main';

describe('test shapes', () => {
  it('all possible shapes with size', () => {
    expect(possibleShapesWithSize(2).length).to.equal(2);
    expect(possibleShapesWithSize(3).length).to.equal(2);
    expect(possibleShapesWithSize(4).length).to.equal(3);
    expect(possibleShapesWithSize(5).length).to.equal(2);
    expect(possibleShapesWithSize(6).length).to.equal(4);
  });

  it('slices for square');
});
