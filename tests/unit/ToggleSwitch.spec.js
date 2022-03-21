import { mount } from '@vue/test-utils';
import ToggleSwitch from '../../src/components/ToggleSwitch';

test('setChecked demo', async () => {
  const wrapper = mount(ToggleSwitch);
  const radioInput = wrapper.find('input[type="checkbox"]');

  await radioInput.setChecked();

  expect(radioInput.element.checked).toBeTruthy();
});
