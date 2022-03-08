<template>
  <div id="app">
    <Spinner v-if="spin"></Spinner>
    <TemplateDefault></TemplateDefault>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TemplateDefault from '@/layouts/TemplateDefault';
import Spinner from './components/Spinner';

export default {
  name: 'App',
  methods: {},
  components: {
    TemplateDefault,
    Spinner,
  },
  computed: {
    ...mapGetters(['spin']),
  },
};
</script>

<style lang="scss">
@import 'styles/reset';

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
  --settings-text-light: rgba(255, 255, 255, 0.85);
  --settings-border: rgba(255, 255, 255, 0.2);
}
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
