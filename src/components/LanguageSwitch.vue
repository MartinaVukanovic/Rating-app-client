<template>
  <div class="buttonContaier">
    <button @click="changeLocal('en')">
      {{ $t('english') }}
    </button>

    <button @click="changeLocal('ba')">
      {{ $t('bosnian') }}
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      en: 'en',
      ba: 'ba',
    };
  },
  methods: {
    ...mapActions(['changeLanguage', 'changeLanguageRucno']),
    changeLocal(locale) {
      this.$i18n.locale = locale;
      this.changeLanguage(locale);
      localStorage.setItem('language', locale);
      this.changeLanguageRucno(locale);
      /*  console.log(locale, 'in method'); */
      /* console.log(localStorage.getItem('language'), 'from local storage'); */
    },
  },
  computed: {
    ...mapGetters(['language']),
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-bottom: 20px;
  border: 0px solid white;
  background-color: var(--stat-background);
  color: rgb(131, 131, 131) !important;
  width: 100px;
  height: 65px;
  border-radius: 4px;
}
</style>
