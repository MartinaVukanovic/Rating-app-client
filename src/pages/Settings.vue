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
            <SmileyFace :type="item.imgType" v-for="item in items" :key="item.id"></SmileyFace>
          </div>
        </div>
        <div class="numberSelect thankYou">
          <input class="inp" type="text" maxlength="120" id="foo-M" required="required" />
          <label class="txt" @click="myMethod1">Thank you message</label>
        </div>
      </div>

      <div class="other">
        <div class="numberSelect first">
          <select class="inp" id="foo-thing" required="required">
            <option value="Option 1">3</option>
            <option value="Option 2">4</option>
            <option value="Option 3">5</option>
          </select>
          <label class="txt">Number of emotions</label>
          <label class="txtUnder">Enter number from 3-5 </label>
        </div>
        <div class="numberSelect second">
          <input
            class="inp"
            type="text"
            minlength="1"
            maxlength="2"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            id="foo-T"
            required="required"
          />
          <label class="txt" @click="myMethod2">Message timeout </label>
          <label class="txtUnder">Can be from 0-15 </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmileyFace from '../components/SmileyFace';

export default {
  data() {
    return {
      items: [
        { id: 1, imgType: 'very_satisfied' },
        { id: 2, imgType: 'satisfied' },
        { id: 3, imgType: 'dissatisfied' },
        { id: 4, imgType: 'very_dissatisfied' },
        { id: 5, imgType: 'bad' },
      ],
    };
  },
  components: {
    SmileyFace,
  },
  methods: {
    myMethod1() {
      document.getElementById('foo-M').focus();
    },
    myMethod2() {
      document.getElementById('foo-T').focus();
    },
  },
};
</script>

<style lang="scss" scoped>
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
    overflow: hidden;
    padding: 10px 16px 10px 16px;
    height: 40px;
    min-width: 220px;
    width: 25vw;
    border: 1px var(--settings-border) solid;
    color: var(--settings-text-light);
    border-radius: 4px;
    background-color: var(--stat-background);
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
.settingsTxt {
  color: var(--settings-text-light);
  font-size: 24px;
}
.x {
  color: var(--settings-text);
}
.settingsContainer {
  display: flex;
  justify-content: center;
  background-color: var(--stat-background);
  .settings {
    padding: 4vh 5vw 0 5vw;
    height: 100vh;
    width: 65vw;
  }
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
