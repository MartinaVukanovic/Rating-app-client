<template>
  <div class="template">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
  name: 'TemplateDefault',
  components: { NavBar },
};
</script>

<style scoped lang="scss"></style>
