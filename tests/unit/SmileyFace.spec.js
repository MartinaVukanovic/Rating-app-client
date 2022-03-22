import { mount } from '@vue/test-utils';
import SmileyFace from '../../src/components/SmileyFace';

describe('smileyFace', () => {
  it('smileyFace', () => {
    const wrapper = mount(SmileyFace);

    expect(wrapper.classes()).toContain('smiley');
    expect(wrapper.isVisible()).toBe(true);
  });
});
