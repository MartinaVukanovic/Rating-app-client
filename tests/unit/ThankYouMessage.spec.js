import { shallowMount } from '@vue/test-utils';
import ThankYouMessage from '../../src/components/ThankYouMessage';

// ThankYouMessage component

const message = 'Thank you!';
const state = { message };

describe('thank you message', () => {
  it('thank you message', () => {
    const wrapper = shallowMount(ThankYouMessage, {
      computed: {
        thankYouMessage() {
          return state.message;
        },
      },
    });

    // containes div, image and paragraph

    expect(wrapper.find('div').isVisible()).toBe(true);
    expect(wrapper.find('img').isVisible()).toBe(true);
    expect(wrapper.find('p').isVisible()).toBe(true);

    // returns given value from state

    expect(wrapper.text()).toContain(message);
  });
});
