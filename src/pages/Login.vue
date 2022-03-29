<template>
  <div class="loginContainer">
    <button @click="handleSignIn" class="login">log in with google</button>
    <img src="../../public/assets/googlelogo.png" alt="google icon" class="icon" />
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  data() {
    return {
      Vue3GoogleOath: inject('Vue3GoogleOauth'),
      user: '',
    };
  },
  methods: {
    async handleSignIn() {
      try {
        const authCode = await this.$gAuth.getAuthCode();
        return authCode;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loginContainer {
  padding: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 100vh;
}
.login {
  color: var(--settings-text-light);
  background-color: transparent;
  border-radius: 4px;
  height: 40px;
  width: 250px;
  border: 1px solid var(--settings-text-light);
}
.login:hover {
  cursor: pointer;
  background-color: var(--stat-green);
  border: 1px solid var(--stat-green);
  color: white;
}
.login:active {
  transform: translateX(2px);
  transform: translateY(2px);
}
.icon {
  margin-left: 12px;
  margin-top: -14vh;
  height: 44px;
  width: 44px;
}

@media only screen and (min-width: 406px) {
  .icon {
    margin-left: 12px;
    margin-top: -5px;
  }
}
</style>
