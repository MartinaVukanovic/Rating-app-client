<template>
  <div class="body" id="Home">
    <div class="likeIcon">
      <div class="likeIconImage">
        <img src="../../public/assets/positive-vote.svg" />
        <p class="welcomeText"><Translated text="HomeScreenMessage"></Translated></p>
      </div>
    </div>
    <div class="container">
      <SmileyFace
        v-for="emotion in emotionList"
        :key="emotion.name"
        :type="emotion.name"
        :color="emotion.color"
        class="SmileyFace"
        @click="playSound"
      ></SmileyFace>
    </div>
    <transition name="fade">
      <ThankYouMessage v-if="welcomePage" class="ThankYouMessage"></ThankYouMessage>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SmileyFace from '../components/SmileyFace';
import ThankYouMessage from '../components/ThankYouMessage';
import Translated from '../components/Translated';
import sound from '../../public/mp3/smile-click.wav';

export default {
  components: {
    SmileyFace,
    ThankYouMessage,
    Translated,
  },
  data() {
    return {
      show: false,
      localTheme: '',
    };
  },
  methods: {
    ...mapActions(['toggleWelcomePage']),
    myMethod() {
      this.toggleWelcomePage();
      setTimeout(() => {
        this.toggleWelcomePage();
      }, this.MessageTime);
    },
    playSound() {
      const audio = new Audio(sound);
      console.log(audio);
      audio.play();
    },
  },
  computed: {
    ...mapGetters(['emotionList', 'welcomePage']),
    ...mapGetters('admin', ['MessageTime']),
  },
  mounted() {
    const localTheme = localStorage.getItem('themeUser');
    document.documentElement.setAttribute('data-theme', localTheme);
  },
};
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 10vh;
}

.welcomeText {
  margin: auto;
  margin-top: 31px;
  width: 350px;
  color: var(--settings-text-light);
  font-size: 32px;
}

.likeIcon {
  height: 50vh;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 67px;
}

@media only screen and (max-width: 1145px) {
  .likeIcon {
    height: 40vh;
  }
}
@media only screen and (max-width: 425px) {
  .likeIcon {
    height: 35vh;
  }
  .welcomeText {
    font-size: 26px;
  }
  img {
    width: 120px !important;
  }
}

.body {
  font-weight: 400;
  background-color: var(--background-black);
  min-height: 100vh;
  width: 100%;
  display: table;
}
</style>
