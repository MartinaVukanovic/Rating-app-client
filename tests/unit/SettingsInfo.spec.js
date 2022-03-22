// Cannot read properties of undefined (reading 'dispatch') state toggleInfo?

import { shallowMount } from '@vue/test-utils';
import SettingsInfo from '../../src/components/SettingsInfo';

const info = false;
const message = 'hello';
const messageTime = '10';
const numberOfEmotions = '5';

const state = { info, message, messageTime, numberOfEmotions };

describe('settings info', () => {
  it('settings info', async () => {
    const wrapper = shallowMount(SettingsInfo, {
      computed: {
        thankYouMessage(state) {
          console.log(state.message);
          return state.message;
        },
        MessageTime(state) {
          return state.messageTime;
        },
        emotionNumber(state) {
          return state.numberOfEmotions;
        },
        toggleInfo(state) {
          console.log(state);
        },
      },
    });

    const infoAround = wrapper.find({ ref: 'infoAround' });
    expect(infoAround.exists()).toBe(true);

    const info = wrapper.find({ ref: 'info' });
    expect(info.isVisible()).toBe(true);

    await infoAround.trigger('click');
    expect(info.isVisible()).toBe(true);

    expect(wrapper.isVisible()).toBe(true);
  });
});
