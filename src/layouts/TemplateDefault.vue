<template>
  <div class="template">
    <NavBar
      v-if="$route.name !== 'Settings' && $route.name !== 'Home' && $route.name !== 'Login'"
    ></NavBar>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
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
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 0.5s cubic-bezier(0.5, 0.2, 0.44, 1.16);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active {
  transition: all 0.5s cubic-bezier(0.5, 0.2, 0.44, 1.16);
}
</style>
