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
        thankYouMessage() {
          return state.message;
        },
        MessageTime() {
          return state.messageTime;
        },
        emotionNumber() {
          return state.numberOfEmotions;
        },
        toggleInfo() {
          return state.info;
        },
      },
    });

    const infoAround = wrapper.find({ ref: 'infoAround' });
    expect(infoAround.exists()).toBe(true);

    const info = wrapper.find({ ref: 'info' });
    expect(info.exists()).toBe(true);

    await infoAround.trigger('click');
    expect(info.isVisible()).toBe(true);
  });
});
