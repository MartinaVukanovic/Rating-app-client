import { mount } from '@vue/test-utils';
import SmileyFace from '../../src/components/SmileyFace';

describe('smileyFace', () => {
  it('smileyFace', () => {
    const wrapper = mount(SmileyFace);

    expect(wrapper.classes()).toContain('smiley');
    expect(wrapper.isVisible()).toBe(true);
  });
});

/* test('trigger demo', async () => {
  const clickHandler = stub();
  const wrapper = mount(SmileyFace, {
    propsData: { clickHandler },
  });

  const divArray = wrapper.findAll('div');
  await divArray.trigger('click');
  expect(clickHandler.called).toBe(true);
}); */
