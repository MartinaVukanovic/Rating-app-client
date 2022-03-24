import { mount } from '@vue/test-utils';
import SmileyFace from '../../src/components/SmileyFace';

describe('smileyFace', () => {
  it('smileyFace', () => {
    const wrapper = mount(SmileyFace, {
      propsData: {
        type: 'bad',
        color: 'red',
      },
    });

    // is visible and containes div, image and smiley class

    expect(wrapper.find('div').isVisible()).toBe(true);
    expect(wrapper.find('img').isVisible()).toBe(true);
    expect(wrapper.classes()).toContain('smiley');
    expect(wrapper.isVisible()).toBe(true);
  });
});
