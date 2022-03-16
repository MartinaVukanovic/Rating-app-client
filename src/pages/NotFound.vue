<template>
  <div class="container">
    <div>
      <SmileyFace type="very_dissatisfied" :class="{ dark: this.theme == 'light' }"></SmileyFace>
    </div>
    <div>404 - page not found</div>
  </div>
</template>

<script>
import SmileyFace from '../components/SmileyFace';

export default {
  components: {
    SmileyFace,
  },
  data() {
    return {
      theme: '',
    };
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
}
.smiley {
  margin-top: -40px;
}
.dark {
  margin-top: -40px;
  filter: invert(1);
}

@media all and (max-width: 760px) {
  .container {
    font-size: 20px;
  }
}
</style>
