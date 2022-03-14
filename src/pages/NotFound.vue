<template>
  <div class="container">
    <SmileyFace type="very_dissatisfied"></SmileyFace>
    <div>404 - page not found</div>
  </div>
</template>

<script>
import SmileyFace from '../components/SmileyFace';

export default {
  components: {
    SmileyFace,
  },
};
</script>

<style lang="scss" scoped>
.container {
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

@media all and (max-width: 760px) {
  .container {
    font-size: 20px;
  }
}
</style>
