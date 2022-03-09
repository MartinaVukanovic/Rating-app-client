<template>
  <div class="body">
    <div class="likeIcon">
      <div class="likeIconImage">
        <img src="../../public/assets/positive-vote.svg" />
        <p class="welcomeText">Rate our service!</p>
      </div>
    </div>
    <div class="container">
      <!-- <SmileyFace type="very_satisfied" color="--smile-green" @click="myMethod"></SmileyFace>
      <SmileyFace type="satisfied" color="--smile-blue" @click="myMethod"></SmileyFace>
      <SmileyFace type="dissatisfied" color="--smile-grey" @click="myMethod"></SmileyFace>
      <SmileyFace type="very_dissatisfied" color="--smile-yellow" @click="myMethod"></SmileyFace>
      <SmileyFace type="bad" color="--smile-red" @click="myMethod"></SmileyFace> -->
      <SmileyFace
        v-for="emotion in emotionList"
        :key="emotion.name"
        :type="emotion.name"
        :color="emotion.color"
        >{{ emotion.name }}</SmileyFace
      >
    </div>
    <ThankYouMessage v-if="welcomePage"></ThankYouMessage>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SmileyFace from '../components/SmileyFace';
import ThankYouMessage from '../components/ThankYouMessage';

export default {
  components: {
    SmileyFace,
    ThankYouMessage,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    myMethod() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 5000);
    },
  },
  computed: {
    ...mapGetters(['emotionList', 'welcomePage']),
  },
};
</script>

<style lang="css" scoped>
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
  width: 250px;
  color: rgb(255, 255, 255, 0.7);
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
}

.body {
  background-color: #1b1e24;
  min-height: 100vh;
  width: 100%;
  display: table;
}
</style>
