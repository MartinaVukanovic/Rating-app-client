<template>
  <div class="body">
    <div class="likeIcon">
      <div class="likeIconImage">
        <img src="../../public/assets/positive-vote.svg" />
        <p class="welcomeText">Rate our service!</p>
      </div>
    </div>
    <div class="container">
      <SmileyFace type="very_satisfied" color="--smile-green" @click="myMethod"></SmileyFace>
      <SmileyFace type="satisfied" color="--smile-blue" @click="myMethod"></SmileyFace>
      <SmileyFace type="dissatisfied" color="--smile-grey" @click="myMethod"></SmileyFace>
      <SmileyFace type="very_dissatisfied" color="--smile-yellow" @click="myMethod"></SmileyFace>
      <SmileyFace type="bad" color="--smile-red" @click="myMethod"></SmileyFace>
    </div>
    <ThankYouMessage v-if="show"></ThankYouMessage>
  </div>
</template>

<script>
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
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
}

.welcomeText {
  margin: auto;
  margin-top: 10%;
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
  margin-bottom: 5vh;
}

.body {
  background-color: #1b1e24;
  min-height: 100vh;
  height: fit-content;
}
</style>
