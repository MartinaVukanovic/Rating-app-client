<template>
  <div class="settingsContainer">
    <div class="settings">
      <div class="fisrtTxt">
        <p class="settingsTxt">Settings</p>
        <p class="settingsTxt x">x</p>
      </div>
      <hr />
      <div class="emojiPreview other">
        <div>
          <p class="emotionsTxt">Emotions preview</p>
          <div class="smileyFaceContainer">
            <SmileyFace
              :type="emotion.name"
              v-for="emotion in emotionList"
              :key="emotion.name"
              :color="emotion.color"
            ></SmileyFace>
          </div>
        </div>
        <div class="numberSelect thankYou">
          <input
            class="inp"
            type="text"
            maxlength="120"
            ref="messageInput"
            required="required"
            v-model="thankYouMessage"
          />
          <label class="txt" @click="focusInput(messageInput)">Thank you message</label>
        </div>
      </div>

      <div class="other">
        <div class="numberSelect first">
          <select class="inp" id="foo-thing" required="required" v-model="numberOfEmotions">
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label class="txt">Number of emotions</label>
          <label class="txtUnder">Enter number from 3-5 </label>
        </div>
        <div class="numberSelect second">
          <input
            class="inp"
            type="number"
            minlength="1"
            maxlength="2"
            ref="timeoutInput"
            required="required"
            v-model="messageTimeout"
          />
          <label class="txt" @click="focusInput(timeoutInput)">Message timeout </label>
          <label class="txtUnder">Can be from 0-15 </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import { mapGetters } from 'vuex';
import SmileyFace from '../components/SmileyFace';

export default {
  data() {
    return {
      thankYouMessage: '',
      numberOfEmotions: 3,
      messageTimeout: null,
    };
  },
  components: {
    SmileyFace,
  },
  methods: {
    /* myMethod1() {
      document.getElementById('foo-M').focus();
    },
    myMethod2() {
      document.getElementById('foo-T').focus();
    }, */
    focusInput(x) {
      console.log(this.$refs.x);
      console.log(x);
    },
    debouncedSubmit() {
      return debounce(this.submit, 2000)();
    },
    submit() {
      console.log(this.messageTimeout);
      console.log('submited');
    },
  },
  computed: {
    ...mapGetters(['emotionList']),
  },
  watch: {
    messageTimeout() {
      this.debouncedSubmit();
    },
  },
};
</script>

<style lang="scss" scoped>
.settingsContainer {
  display: flex;
  justify-content: center;
  background-color: var(--stat-background);

  .settings {
    padding: 4vh 5vw 0 5vw;
    height: 100vh;
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
#foo-M:valid + .txt {
  font-size: 12px;
  top: -11px;
  transition: 0.35s;
}
#foo-T:valid + .txt {
  font-size: 12px;
  top: -11px;
  transition: 0.35s;
}
#foo-thing:valid + .txt {
  font-size: 12px;
  top: -11px;
  transition: 0.35s;
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
    background-color: var(--stat-background) !important;
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
    transition: 0.4s;
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

@media only screen and (max-width: 840px) {
  .settings {
    width: 45vw !important;
    padding: 0px !important;
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
</style>
