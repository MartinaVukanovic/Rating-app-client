import { shallowMount } from '@vue/test-utils';
import Translated from '../../src/components/Translated';
import ba from '../../src/locales/ba';
import en from '../../src/locales/en';

// translated component with getter, props and changed language

const translation = {
  ba,
};
const state = { translation };

const translationEn = {
  en,
};
const stateEn = { translationEn };

describe('translated', () => {
  it('translated to ba', async () => {
    const wrapper = shallowMount(Translated, {
      propsData: {
        text: 'Settings',
      },
      computed: {
        getTranslation() {
          return (text) => {
            return state.translation.ba[this.text];
          };
        },
      },
    });

    const span = wrapper.find('span');
    expect(span.exists()).toBe(true);

    expect(wrapper.text()).toContain('Postavke');

    // language set to bosnian, change of props from "Settings" to "HomeScreenMessage"

    await wrapper.setProps({ text: 'HomeScreenMessage' });
    expect(wrapper.text()).toContain('Ocijenite našu uslugu!');
  });

  it('translated to en', async () => {
    const wrapperEn = shallowMount(Translated, {
      propsData: {
        text: 'Settings',
      },
      computed: {
        getTranslation() {
          return (text) => {
            return stateEn.translationEn.en[this.text];
          };
        },
      },
    });

    const span = wrapperEn.find('span');
    expect(span.exists()).toBe(true);

    expect(wrapperEn.text()).toContain('Settings');

    // language set to english, change of props from "Settings" to "HomeScreenMessage"

    await wrapperEn.setProps({ text: 'HomeScreenMessage' });
    expect(wrapperEn.text()).toContain('Rate our service!');
  });
});
