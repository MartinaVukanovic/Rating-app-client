import { shallowMount } from '@vue/test-utils';
import SmilesOverview from '../../src/components/SmilesOverview';

// SmilesOverview component (same for AreaChart and PieChart components)

describe('smiles overview', () => {
  it('smiles overview', async () => {
    const wrapper = shallowMount(SmilesOverview, {
      props: {
        sum: [],
        names: [],
      },
    });

    // exists with valid sent props with zero data

    const table = wrapper.find({ ref: 'table' });
    expect(wrapper.isVisible()).toBe(true);
  });
});
