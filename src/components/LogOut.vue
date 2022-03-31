<template>
  <button @click="signout" class="logout">
    <Translated text="Logout"></Translated>
  </button>
</template>

<script>
import Translated from './Translated';
import router from '../router';

export default {
  components: {
    Translated,
  },
  methods: {
    signout() {
      localStorage.removeItem('authCode');
      this.authCodeLocal = localStorage.getItem('authCode');
      router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.logout {
  padding: 5px;
  margin-top: 15px;
  color: var(--settings-text-light);
  background-color: transparent;
  border-radius: 4px;
  height: 40px;
  width: 56px;
  text-align: center;
  font-size: 12px;
  border: 1px solid var(--settings-text-light);
}
.logout:hover {
  cursor: pointer;
  background-color: var(--stat-red);
  border: 1px solid var(--stat-red);
  color: white;
}
.logout:active {
  transform: translateX(2px);
  transform: translateY(2px);
}
</style>
