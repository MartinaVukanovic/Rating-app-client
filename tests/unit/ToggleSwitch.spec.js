import { mount } from '@vue/test-utils';
import ToggleSwitch from '../../src/components/ToggleSwitch';

// toggle switch with valid and invalid props

describe('toggle switch', () => {
  it('toggle switch', async () => {
    const wrapper = mount(ToggleSwitch);
    const radioInput = wrapper.find('input[type="checkbox"]');

    // default
    expect(radioInput.element.checked).toBeFalsy();

    // checked
    await radioInput.setChecked();
    expect(radioInput.element.checked).toBeTruthy();

    // prop: "light"
    await wrapper.setProps({ theme: 'light' });
    expect(radioInput.element.checked).toBeTruthy();

    // prop: "dark"
    await wrapper.setProps({ theme: 'dark' });
    expect(radioInput.element.checked).toBeFalsy();

    // prop: ""
    await wrapper.setProps({ theme: '' });
    expect(radioInput.element.checked).toBeFalsy();
  });
});
