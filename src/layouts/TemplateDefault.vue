<template>
  <div class="template">
    <NavBar v-if="$route.name == 'Reports' || $route.name == 'Today'"></NavBar>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'x'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
  name: 'TemplateDefault',
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="scss">
.template {
  background-color: var(--background-black);
}

@media all and (min-width: 750px) {
  .template {
    overflow: hidden !important;
  }
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-200px);
}
.route-enter-active {
  transition: all 0.8s ease-out;
}
.route-up-enter-from {
  opacity: 0.5;
  transform: translateY(380px);
}
.route-up-enter-active {
  transition: all 0.9s ease-out;
}
.route-up-leave-to {
  opacity: 0;
  transform: translateY(-200px);
}
.route-up-leave-active {
  transition: all 0.6s ease-in;
}
</style>
