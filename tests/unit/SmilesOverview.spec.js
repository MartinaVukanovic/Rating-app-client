import { shallowMount } from '@vue/test-utils';
import SmilesOverview from '../../src/components/SmilesOverview';

// SmilesOverview component

describe('smiles overview', () => {
  it('smiles overview', async () => {
    const wrapper = shallowMount(SmilesOverview, {
      props: {
        sum: [],
        names: [],
      },
    });

    // exists with no data
    const table = wrapper.find({ ref: 'table' });
    expect(wrapper.isVisible()).toBe(true);
  });
});
