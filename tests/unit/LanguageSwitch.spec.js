import { shallowMount } from '@vue/test-utils';
import LanguageSwitch from '../../src/components/LanguageSwitch';

// LanguageSwitch component

describe('language switch', () => {
  const $store = {
    state: {
      translation: 'ba',
    },
    dispatch: jest.fn(), // changeLanguage(locale)
  };

  it('language switch', async () => {
    const wrapper = shallowMount(LanguageSwitch, {
      global: {
        mocks: { $store },
      },
    });

    // checked if change of language is called on click

    const bosnian = wrapper.find({ ref: 'bosnian' });
    expect(bosnian.exists()).toBe(true);
    await bosnian.trigger('click');
    expect($store.dispatch).toHaveBeenCalled();

    const english = wrapper.find({ ref: 'english' });
    expect(english.exists()).toBe(true);
    await english.trigger('click');
    expect($store.dispatch).toHaveBeenCalled();

    const hindi = wrapper.find({ ref: 'hindi' });
    expect(hindi.exists()).toBe(true);
    await hindi.trigger('click');
    expect($store.dispatch).toHaveBeenCalled();
  });
});
