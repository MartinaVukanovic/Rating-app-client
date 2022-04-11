<template>
  <div class="container">
    <Error401 v-if="this.notAuthorized" class="errorMessage"></Error401>
    <div class="loginContainer">
      <button @click="handleSignIn" class="login">
        <Translated text="Login"></Translated>
      </button>
      <img src="../../public/assets/googlelogo.png" alt="google icon" class="icon" />
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Translated from '../components/Translated';
import Error401 from '../components/Error401';

export default {
  components: {
    Translated,
    Error401,
  },
  data() {
    return {
      Vue3GoogleOath: inject('Vue3GoogleOauth'),
      user: '',
    };
  },
  methods: {
    ...mapActions(['setUser']),
    ...mapActions('admin', ['userLogin']),
    async handleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        const auth = this.$gAuth.instance.currentUser.get().getAuthResponse();
        const accesToken = auth.access_token;

        await this.userLogin(accesToken);
        return googleUser;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
  computed: {
    ...mapGetters('admin', ['notAuthorized']),
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .errorMessage {
    position: absolute;
  }
  .loginContainer {
    padding: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    height: 100vh;

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
      height: 44px;
      width: 44px;
    }
  }
}
@media only screen and (min-width: 406px) {
  .icon {
    margin-left: 12px;
    margin-top: -5px;
  }
}
</style>
