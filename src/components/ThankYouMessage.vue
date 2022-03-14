<template>
  <div class="container2">
    <img src="../../public/assets/check.svg" alt="checkedIcon" />
    <p class="TMessage">{{ thankYouMessage }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('admin', ['thankYouMessage']),
  },
};
</script>

<style lang="scss" scoped>
.container2 {
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100vw;
  background-color: var(--background-black);
}

.TMessage {
  color: var(--settings-text-light);
  font-size: 32px;
  text-align: center;
}
</style>
