<template>
  <div class="container">
    <div class="notFound">
      <p class="text" :class="{ darkText: this.theme == 'light' }">4</p>
      <transition name="bounce" appear>
        <SmileyFace
          type="very_dissatisfied"
          :class="{ dark: this.theme == 'light' }"
          class="imgS"
        ></SmileyFace
      ></transition>
      <p class="text" :class="{ darkText: this.theme == 'light' }">4</p>
    </div>
    <div class="sub-text"><Translated text="NotFoundError"></Translated></div>
    <div class="redirect-text-one"><Translated text="NotFoundTry"></Translated></div>
    <div class="redirect-text-two" @click="goToMainScreen">
      <Translated text="MainScreen"></Translated>
    </div>
  </div>
</template>

<script>
import SmileyFace from '../components/SmileyFace';
import Translated from '../components/Translated';

export default {
  components: {
    SmileyFace,
    Translated,
  },
  data() {
    return {
      theme: '',
    };
  },
  methods: {
    goToMainScreen() {
      this.$router.push('/');
    },
  },
  mounted() {
    this.theme = localStorage.getItem('theme');
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-weight: 300;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-black);
  height: 100vh;
  width: 100%;
  color: var(--settings-text);
  .imgS {
    width: 115px !important;
    height: 190px !important;
  }
  .darkText {
    color: #777777;
  }
  .sub-text {
    margin-top: -60px;
    text-align: center;
  }
  .redirect-text-one {
    margin-top: 25px;
  }
  .redirect-text-two {
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--settings-text-light);
    margin-top: 8px;
  }
  .dark {
    filter: invert(3);
  }
  .notFound {
    display: flex;
    margin-top: -100px;
    .text {
      font-size: 85px;
      font-weight: bold;
    }
  }
}

@media all and (max-width: 760px) {
  .container {
    font-size: 20px;
  }
}

.bounce-enter-active {
  animation: bounce-in 1.8s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  95% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
