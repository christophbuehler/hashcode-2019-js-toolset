import { expect } from 'chai';
import 'mocha';
import { main } from '../../src/2lt/main';
import { getConfig } from '../../src/libs/config';

describe('Primary Test 2lt for now', () => {
  it('TestMe should work', () => {
    main(getConfig('assets/b_small.in'));
    // expect(testMe()).to.equal(59);
  });
});
