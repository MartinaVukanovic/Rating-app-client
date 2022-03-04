<template>
  <div id="app">
    <TemplateDefault></TemplateDefault>
  </div>
</template>

<script>
import TemplateDefault from '@/layouts/TemplateDefault';


export default {
  name: 'App',
  methods: {},
  components: {
    TemplateDefault,
  },
};
</script>

<style lang="scss">
@import 'styles/reset';

:root {
  --smile-green:#00A86B;
  --smile-red:#F9585A;
  --smile-blue:#41B3E9;
  --smile-grey:#7A7A7A;
  --smile-yellow:#FFBA13;
  --background-black:#1B1E24;
  --blue-checked:#425BD9;
  --stat-green:#04D27C;
  --stat-red:#F9585A;
  --stat-grey:#B0B0B2;
  --stat-background:#2D3038;
  --white-text: rgba(255,255,255,0.8)
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
