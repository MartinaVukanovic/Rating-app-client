<template>
  <button @click="signout" class="logout">
    <Translated text="Logout"></Translated>
  </button>
</template>

<script>
import { inject } from 'vue';
import { mapActions, mapMutations } from 'vuex';
import Translated from './Translated';

export default {
  data() {
    return {
      Vue3GoogleOath: inject('Vue3GoogleOauth'),
    };
  },
  components: {
    Translated,
  },
  methods: {
    ...mapMutations('admin', ['NOT_AUTHORIZED']),
    ...mapActions('admin', ['logoutUser']),
    signout() {
      try {
        this.$gAuth.signOut();
        this.logoutUser(localStorage.getItem('user'));
        this.NOT_AUTHORIZED();
        localStorage.removeItem('user');
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
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
