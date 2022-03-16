<template>
  <div id="app">
    <Spinner v-if="spin"></Spinner>
    <TemplateDefault></TemplateDefault>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TemplateDefault from '@/layouts/TemplateDefault';
import Spinner from './components/Spinner';

export default {
  name: 'App',
  components: {
    TemplateDefault,
    Spinner,
  },
  methods: {
    ...mapActions('admin', ['settingsGet']),
  },
  computed: {
    ...mapGetters(['spin']),
  },
  mounted() {
    this.settingsGet();
    const localTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', localTheme);
  },
};
</script>

<style lang="scss">
@import 'styles/reset';
@import 'styles/datepicker';

:root {
  --smile-green: #00a86b;
  --smile-red: #f9585a;
  --smile-blue: #41b3e9;
  --smile-grey: #7a7a7a;
  --smile-yellow: #ffba13;
  --background-black: #1b1e24;
  --blue-checked: #425bd9;
  --stat-green: #04d27c;
  --stat-red: #f9585a;
  --stat-grey: #b0b0b2;
  --stat-background: #2d3038;
  --settings-text: rgba(255, 255, 255, 0.5);
  --settings-text-light: rgba(255, 255, 255, 0.7);
  --settings-border: rgba(255, 255, 255, 0.2);
  --calendar: #2d3038;
  --calendar-header: rgb(0, 107, 245, 0.8);
  --calendar-month: white;
  --calendar-end: #006bf5;
  --calendar-text-color: white;
  --background-black-calendar: var(--background-black);
}

[data-theme='light'] {
  --background-black: #ececec;
  --stat-background: #dddddd;
  --settings-text-light: rgba(0, 0, 0, 0.85);
  --settings-text: rgba(0, 0, 0, 0.85);
  --settings-border: rgba(0, 0, 0, 0.3);
  --calendar: #f0e5e5;
  --calendar-white: white;
  --calendar-header: rgba(214, 100, 33, 0.8);
  --calendar-month: black;
  --calendar-end: #e96d47;
  --calendar-text-color: rgb(70, 70, 70);
  --background-black-calendar: rgba(233, 109, 71, 0.4);
}

html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
