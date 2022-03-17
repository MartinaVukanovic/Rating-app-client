<template>
  <div class="settingsContainer">
    <div class="settings">
      <div class="fisrtTxt">
        <p class="settingsTxt">{{ $t('Settings') }}</p>
        <p class="settingsTxt x" @click="$router.go(-1)">x</p>
      </div>
      <hr />
      <div class="emojiPreview other">
        <div>
          <p class="emotionsTxt">{{ $t('settings.EmotionPreview') }}</p>
          <div class="smileyFaceContainer light" v-if="this.theme == 'light'">
            <SmileyFace
              class="smiley-face"
              :type="emotion.name"
              v-for="emotion in emotionList"
              :key="emotion.name"
            ></SmileyFace>
          </div>
          <div class="smileyFaceContainer" v-else>
            <SmileyFace
              class="smiley-face"
              :type="emotion.name"
              v-for="emotion in emotionList"
              :key="emotion.name"
            ></SmileyFace>
          </div>
        </div>
        <div class="numberSelect thankYou">
          <input
            class="inp"
            type="text"
            maxlength="120"
            ref="thankYouMessage"
            required="required"
            v-model="thankYouMessage"
            :class="{ inputError: thankYouMessageError }"
          />
          <label class="txt" @click="focusMessageInput">{{
            $t('settings.MessagePlaceholder')
          }}</label>
          <p class="error" v-if="thankYouMessageError">{{ $t('MessageError') }}</p>
        </div>
      </div>

      <div class="other">
        <div class="numberSelect first">
          <select class="inp" required="required" v-model="numberOfEmotions" ref="numberOfEmotions">
            <option value="3" selected>3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label class="txt">{{ $t('settings.EmotionsNumberPlaceHolder') }}</label>
          <label class="txtUnder">{{ $t('settings.EmotionsNumberLimit') }} </label>
        </div>
        <div class="numberSelect second">
          <input
            class="inp"
            type="number"
            ref="messageTimeout"
            required="required"
            v-model="messageTimeout"
            :class="{ inputError: messageTimeoutError }"
          />
          <label class="txt" @click="focusTimeoutInput"
            >{{ $t('settings.MessageTimeoutPlaceholder') }}
          </label>
          <p class="error" v-if="messageTimeoutError">{{ $t('MessageTimeoutError') }}</p>
          <label class="txtUnder">{{ $t('settings.MessageTimeoutLimit') }} </label>
        </div>
      </div>
    </div>
    <div class="theme">
      <ToggleSwitch @click="toggleTheme" :theme="this.theme"> </ToggleSwitch>
    </div>
    <div class="lang">
      <LanguageSwitch></LanguageSwitch>
    </div>
  </div>
</template>

<script>
import utils from '@/utility';
import { debounce } from 'lodash';
import { mapActions, mapGetters } from 'vuex';
import SmileyFace from '../components/SmileyFace';
import ToggleSwitch from '../components/ToggleSwitch';
import LanguageSwitch from '../components/LanguageSwitch';

export default {
  data() {
    return {
      thankYouMessage: '',
      numberOfEmotions: this.emotionNumber,
      messageTimeout: null,
      thankYouMessageError: '',
      messageTimeoutError: '',
      debouncedSubmit: null,
      theme: '',
    };
  },
  components: {
    SmileyFace,
    ToggleSwitch,
    LanguageSwitch,
  },
  methods: {
    ...mapActions('admin', ['settingsPost']),
    ...mapActions(['toggleSpin']),
    focusMessageInput() {
      this.$refs.thankYouMessage.focus();
    },
    focusTimeoutInput() {
      this.$refs.messageTimeout.focus();
    },
    blurthankYouMessage() {
      this.$refs.thankYouMessage.blur();
    },
    blurnumberOfEmotions() {
      this.$refs.numberOfEmotions.blur();
    },
    blurmessageTimeout() {
      this.$refs.messageTimeout.blur();
    },
    submit(value) {
      if (!value) {
        return;
      }
      if (value === this.thankYouMessage) {
        if (utils.validateString(value, 3, 120)) {
          this.thankYouMessageError = '';
          this.toggleSpin();
          this.settingsPost({ type: 'message', value });
          this.toggleSpin();
          this.thankYouMessage = '';
          this.blurthankYouMessage();
        } else {
          this.thankYouMessageError = 'message needs to be between 3 and 120 characters long';
        }
      } else if (value === this.messageTimeout) {
        if (utils.validateNumber(value, 0, 10)) {
          this.messageTimeoutError = '';
          this.settingsPost({ type: 'messageTime', value });
          this.messageTimeout = null;
          this.blurmessageTimeout();
        } else {
          this.messageTimeoutError = 'message timeout needs to be Integer between 0 and 10';
        }
      } else if (value === this.numberOfEmotions) {
        this.settingsPost({ type: 'numberOfEmotions', value });
        this.blurnumberOfEmotions();
      }
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('theme', this.theme);
    },
  },
  computed: {
    ...mapGetters(['emotionList']),
    ...mapGetters('admin', ['emotionNumber']),
  },
  watch: {
    messageTimeout(value) {
      this.messageTimeoutError = '';
      this.debouncedSubmit(value);
    },
    thankYouMessage(value) {
      this.thankYouMessageError = '';
      this.debouncedSubmit(value);
    },
    numberOfEmotions(value) {
      this.debouncedSubmit(value);
    },
  },
  mounted() {
    this.theme = localStorage.getItem('theme');
    this.numberOfEmotions = this.emotionNumber;
    this.debouncedSubmit = debounce(this.submit, 2000);
  },
};
</script>

<style lang="scss" scoped>
.light {
  filter: invert(1);
}
.error {
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--stat-red);
  margin: 5px 0 0 5px;
  max-width: 220px;
}
.settingsContainer {
  display: flex;
  align-items: center;
  background-color: var(--stat-background);
  flex-direction: column;
  height: 100vh;

  .settings {
    padding: 4vh 5vw 0 5vw;
    width: 65vw;

    .settingsTxt {
      color: var(--settings-text-light);
      font-size: 24px;
    }
    .x {
      color: var(--settings-text);
    }
  }
}
.inp:valid + .txt {
  font-size: 12px;
  top: -11px;
}
select option {
  background-color: var(--stat-background);
}
hr {
  border: 0;
  border-top: 1px solid var(--settings-border);
  margin: 10px 0px 40px 0;
  padding: 0;
}
.emojiPreview {
  margin-top: -30px;
}
.fisrtTxt {
  display: flex;
  justify-content: space-between;
}
.fisrtTxt .x {
  cursor: pointer;
}
.fisrtTxt .x:hover {
  color: white;
}
.other {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: -8px;
}
.smileyFaceContainer {
  display: flex;
  margin-top: -12px;
  .smiley {
    height: 55px;
    width: 38px;
    border: none !important;
  }
}
.numberSelect {
  margin-top: 20px;
  position: relative;
  .txt {
    cursor: pointer;
    color: var(--settings-text);
    background-color: var(--stat-background);
    padding: 0 10px 0 10px;
    top: 12px;
    left: 8px;
    position: absolute;
    font-size: 16px;
  }
  .txtUnder {
    color: var(--settings-text);
    background-color: var(--stat-background);
    padding: 0 10px 0 10px;
    left: -10px;
    position: absolute;
    font-size: 12px;
    bottom: -21px;
  }
  .inp {
    cursor: pointer;
    overflow: hidden;
    padding: 10px 16px 10px 16px;
    height: 40px;
    min-width: 220px;
    width: 25vw;
    border: 1px var(--settings-border) solid;
    color: var(--settings-text-light);
    border-radius: 4px;
    background: transparent;
    z-index: 2;
  }
  .inputContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }
}
.inp:focus + .txt {
  font-size: 12px;
  top: -11px;
  transition: 0.4s;
}
.emotionsTxt {
  color: var(--settings-text);
  font-size: 12px;
}
.inp:focus.inputError {
  outline: 1px var(--stat-red) solid;
}
.smiley-face {
  pointer-events: none;
}
.theme {
  margin-top: 90px;
}
@media only screen and (max-width: 842px) {
  .theme {
    margin-top: 90px;
  }
  .lang {
    margin-top: 60px !important;
  }
  .settings {
    margin-top: 50px;
    padding: 0px !important;
    width: 40vw !important;
  }
  .other {
    justify-content: center;
    margin-top: -17px;
  }
  .numberSelect {
    margin-top: 50px;
  }

  .second {
    margin-top: 40px;
  }
  .thankYou {
    margin-top: 10px;
  }
}
@media only screen and (max-width: 550px) {
  .settings {
    width: 60vw !important;
  }
}
.lang {
  margin-top: 28vh;
}
</style>
