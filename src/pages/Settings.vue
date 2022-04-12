<template>
  <div class="settingsContainer">
    <Error50x v-if="getError === 500"></Error50x>
    <div class="error429">
      <Error429 v-if="getError === 429"></Error429>
    </div>
    <transition name="modal">
      <SettingsModal class="modal" v-if="showModal"></SettingsModal>
    </transition>
    <div class="settings">
      <div class="fisrtTxt">
        <div class="settingsTxt">
          <p class="settingsTxt"><Translated text="Settings"></Translated></p>
          <img
            src="../../public/assets/info.svg"
            class="info-icon"
            :class="{ dark: this.theme == 'light' }"
            @click="toggleInfo"
          />
          <transition>
            <SettingsInfo v-if="getInfo" class="settings-info"></SettingsInfo>
          </transition>
        </div>
        <p class="settingsTxt x" @click="$router.go(-1)">x</p>
      </div>
      <hr />
      <div class="emojiPreview other">
        <div>
          <p class="emotionsTxt"><Translated text="EmotionPreview"></Translated></p>
          <div class="smileyFaceContainer light" :class="{ dark: this.theme == 'light' }">
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
            :disabled="messageTimeout > 0 || numberOfEmotions || videoURL.length"
            class="inp"
            type="text"
            maxlength="120"
            ref="thankYouMessage"
            required="required"
            v-model="thankYouMessage"
            :class="{ inputError: thankYouMessageError }"
          />
          <label class="txt"><Translated text="MessagePlaceholder"></Translated></label>
          <p class="error" v-if="thankYouMessageError">
            <Translated text="MessageError"></Translated>
          </p>
        </div>
      </div>

      <div class="other bottom">
        <div class="numberSelect first">
          <select
            class="inp"
            required="required"
            v-model="numberOfEmotions"
            ref="numberOfEmotions"
            :disabled="thankYouMessage.length || messageTimeout > 0 || videoURL.length"
          >
            <option value="3" selected>3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label class="txt"><Translated text="EmotionsNumberPlaceHolder"></Translated></label>
          <label class="txtUnder"><Translated text="EmotionsNumberLimit"></Translated> </label>
        </div>
        <div class="numberSelect second">
          <input
            :disabled="thankYouMessage.length || numberOfEmotions || videoURL.length"
            class="inp"
            type="number"
            ref="messageTimeout"
            required="required"
            v-model="messageTimeout"
            :class="{ inputError: messageTimeoutError }"
          />
          <label class="txt"><Translated text="MessageTimeoutPlaceholder"></Translated> </label>
          <p class="error" v-if="messageTimeoutError">
            <Translated text="MessageTimeoutError"></Translated>
          </p>
          <label class="txtUnder"><Translated text="MessageTimeoutLimit"></Translated> </label>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div class="pickContainer">
      <div class="lang">
        <LanguageSwitch></LanguageSwitch>
      </div>
      <div class="numberSelect thankYou">
        <input
          :disabled="messageTimeout > 0 || numberOfEmotions || thankYouMessage.length"
          class="inp"
          type="text"
          required="required"
          ref="video"
          v-model="videoURL"
        />
        <label class="txt songTxt"
          ><Translated v-if="!videoCheck" text="MusicPlaceHolder"></Translated>
          <Translated v-if="videoCheck" text="MusicPlaceHolderActive"></Translated>
        </label>
        <p class="error" v-if="youtubeError">
          <Translated text="YoutubeError"></Translated>
        </p>
        <button @click="deleteVideo" class="delete-video">
          <Translated text="DeleteVideo"></Translated>
        </button>
      </div>
      <div class="theme">
        <ToggleSwitch @click="toggleThemeUser" :theme="this.themeUser" class="switches">
        </ToggleSwitch>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '@/utility';
import { debounce } from 'lodash';
import { mapActions, mapGetters } from 'vuex';
import SmileyFace from '../components/SmileyFace';
import ToggleSwitch from '../components/ToggleSwitch';
import SettingsInfo from '../components/SettingsInfo';
import LanguageSwitch from '../components/LanguageSwitch';
import Translated from '../components/Translated';
import SettingsModal from '../components/SettingsModal';
import Error50x from '../components/Error50x';
import Error429 from '../components/Error429';

export default {
  data() {
    return {
      thankYouMessage: '',
      numberOfEmotions: null,
      messageTimeout: null,
      thankYouMessageError: '',
      messageTimeoutError: '',
      debouncedSubmit: null,
      theme: '',
      themeUser: '',
      showModal: false,
      videoURL: '',
      videoPlaying: localStorage.getItem('video'),
      youtubeError: '',
    };
  },
  components: {
    SmileyFace,
    ToggleSwitch,
    SettingsInfo,
    LanguageSwitch,
    Translated,
    SettingsModal,
    Error50x,
    Error429,
  },
  methods: {
    ...mapActions('admin', ['settingsPost', 'toggleInfo']),
    ...mapActions(['toggleSpin']),
    blurthankYouMessage() {
      this.$refs.thankYouMessage.blur();
    },
    blurnumberOfEmotions() {
      this.$refs.numberOfEmotions.blur();
    },
    blurmessageTimeout() {
      this.$refs.messageTimeout.blur();
    },
    blurvideo() {
      this.$refs.video.blur();
    },
    // submit settings changes
    submit(value) {
      if (!value && value !== 0) {
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
          this.toggleModal();
        } else {
          this.thankYouMessageError = 'message needs to be between 3 and 120 characters long';
        }
      } else if (value === this.messageTimeout) {
        if (utils.validateNumber(value, 0, 11)) {
          this.messageTimeoutError = '';
          this.toggleSpin();
          this.settingsPost({ type: 'messageDelay', value });
          this.toggleSpin();
          this.messageTimeout = null;
          this.blurmessageTimeout();
          this.toggleModal();
        } else {
          this.messageTimeoutError = 'message timeout needs to be Integer between 0 and 10';
        }
      } else if (value === this.numberOfEmotions) {
        this.toggleSpin();
        this.settingsPost({ type: 'numberOfEmoji', value });
        this.toggleSpin();
        this.numberOfEmotions = null;
        this.blurnumberOfEmotions();
        this.toggleModal();
      } else if (value === this.videoURL) {
        if (utils.validateYoutubeLink(value)) {
          const videoId = value.split('v=')[1].substring(0, 11);
          localStorage.setItem('video', videoId);
          this.videoPlaying = videoId;
          this.videoURL = '';
          this.blurvideo();
        } else {
          this.youtubeError = 'NOT valid youtube link';
        }
      }
    },
    deleteVideo() {
      localStorage.removeItem('video');
      this.videoPlaying = localStorage.getItem('video');
    },
    toggleThemeUser() {
      this.themeUser = this.themeUser === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeUser', this.themeUser);
    },
    toggleModal() {
      this.showModal = false;
      setTimeout(() => {
        if (this.getError) {
          this.showModal = false;
        } else if (!this.getError) {
          this.showModal = !this.showModal;
          setTimeout(() => {
            this.showModal = !this.showModal;
          }, 1500);
        }
      }, 1000);
    },
  },
  computed: {
    ...mapGetters(['emotionList']),
    ...mapGetters('admin', ['emotionNumber', 'getInfo', 'getError']),
    videoCheck() {
      if (this.videoPlaying) {
        return true;
      }
      return false;
    },
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
    videoURL(value) {
      this.youtubeError = '';
      this.debouncedSubmit(value);
    },
  },
  mounted() {
    this.theme = localStorage.getItem('theme');
    this.themeUser = localStorage.getItem('themeUser');
    document.documentElement.setAttribute('data-theme', this.theme);
    this.debouncedSubmit = debounce(this.submit, 2000);
  },
};
</script>

<style lang="scss" scoped>
/* Modal */

.modal {
  height: 180px;
  position: absolute;
  padding: 20px;
  top: 50px;
  z-index: 10;
}
.modal-enter-active {
  animation: bounce-in 0.5s;
}
.modal-leave-active {
  opacity: 0;
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

/* End of modal */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.dark {
  filter: invert(0.8) !important;
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
  min-height: 100vh;

  .settings {
    padding: 4vh 5vw 0 5vw;
    width: 65vw;

    .settingsTxt {
      color: var(--settings-text-light);
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;

      .info-icon {
        height: 18px;
        margin-left: 15px;
        cursor: help;
        color: rgba(255, 255, 255, 0.7);
        filter: invert(0.3);
      }
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
.songInp:valid + .songTxt {
  font-size: 12px;
  top: -11px;
  background-color: var(--stat-background);
  z-index: 2;
}

.songInp:focus + .songTxt {
  font-size: 12px;
  top: -11px;
  z-index: 2;
  transition: 0.4s;
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
  margin-top: -10px;
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
  align-items: center;
  justify-content: space-between;
}
.other.bottom {
  margin-top: 25px;
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
    pointer-events: none;
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
.delete-video {
  border: 1px solid var(--settings-text);
  background: transparent;
  border-radius: 5px;
  padding: 5px 10px;
  color: var(--settings-text);
  margin-top: 20px;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;

  &:active {
    transform: scale(0.95);
  }
}
.pickContainer {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  max-width: 65vw;
  margin-bottom: 50px;
  min-width: 220px;
}
input.inp.songInp {
  height: 55px;
}
.youtube-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 842px) {
  .theme {
    margin-top: 0px !important;
  }
  .musicPicker {
    margin-top: 20px !important;
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
  .other.bottom {
    margin-top: 0px;
  }
  .numberSelect {
    margin-top: 20px;
  }

  .second {
    margin-top: 40px;
  }
  .thankYou {
    margin-top: 10px;
  }
  .pickContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media only screen and (max-width: 550px) {
  .settings {
    width: 60vw !important;
  }
  .theme {
    gap: 0px !important;
  }
}
.pickContainer {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 55vw;
  margin-top: 20px;
}

.theme {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
.switchTxt {
  text-align: center;
  max-width: 180px;
  color: var(--settings-text);
}
.themePart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.musicPicker {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.songTxt {
  color: var(--settings-text);
}
</style>
