/* import { mount } from '@vue/test-utils';
import Home from '../../src/pages/Home';

describe('aaa', () => {
  it('aaa', () => {
    const wrapper = mount(Home);
    expect(wrapper.classes()).toContain('div');
    expect(wrapper.isVisible()).toBe(true);
  });
}); */

import { mount } from '@vue/test-utils';
import SmileyFace from '../../src/components/SmileyFace';

describe('smileyFace', () => {
  it('smileyFace', () => {
    const wrapper = mount(SmileyFace);

    expect(wrapper.classes()).toContain('smiley');
    expect(wrapper.isVisible()).toBe(true);
  });
});
