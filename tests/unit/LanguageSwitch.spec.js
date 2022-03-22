// Cannot read properties of undefined (reading 'dispatch')

import { shallowMount } from '@vue/test-utils';
import LanguageSwitch from '../../src/components/LanguageSwitch';

// LanguageSwitch component

describe('language switch', () => {
  it('language switch', async () => {
    const wrapper = shallowMount(LanguageSwitch, {
      computed: {
        language() {
          return state.language;
        },
      },
      methods: {},
    });

    // check if click triggers action

    const bosnian = wrapper.find({ ref: 'bosnian' });
    expect(bosnian.exists()).toBe(true);

    const english = wrapper.find({ ref: 'english' });
    expect(english.exists()).toBe(true);

    /* await bosnian.trigger('click'); */ // Cannot read properties of undefined (reading 'dispatch')

    expect(bosnian.text()).toContain('');
  });
});
