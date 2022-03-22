<template>
  <div class="buttonContaier">
    <div class="dropdown">
      <button class="dropbtn"><Translated text="TranslationButton"></Translated></button>
      <div class="dropdown-content">
        <div class="languageContainer" @click="changeLocal('en')" ref="english">
          <Translated text="english"></Translated>
          <img src="../../public/assets/american-flag.png" style="width 15px; height: 15px;" />
        </div>
        <div class="languageContainer bosnian" @click="changeLocal('ba')" ref="bosnian">
          <Translated text="bosnian"></Translated>
          <img src="../../public/assets/bosnian-flag.png" style="width 15px; height: 15px;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Translated from './Translated';

export default {
  components: {
    Translated,
  },
  methods: {
    ...mapActions(['changeLanguage']),
    changeLocal(locale) {
      this.changeLanguage(locale);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.languageContainer {
  display: flex !important;
  justify-content: center;
  gap: 30px;
  align-items: center;
}
button {
  margin-bottom: 15px;
  border: 0px solid white;
  background-color: var(--stat-background);
  color: var(--settings-text);
  width: 150px;
  height: 55px;
  border-radius: 6px;
}
.dropbtn {
  background-color: var(--stat-background);
  color: var(--settings-text);
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer !important;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--stat-background);
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer !important;
}
.dropdown-content div {
  color: var(--settings-text-light);
  padding: 14px 0px;
  text-decoration: none;
  display: block;
}
.dropdown-content div:hover {
  background-color: rgba(0, 0, 0, 0.06);
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
