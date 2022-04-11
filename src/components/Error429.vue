<template>
  <transition name="down" appear>
    <div class="error-505">
      <p class="error-number">429</p>
      <p class="title"><Translated text="Error429tittle"></Translated></p>
      <p class="text-other"><Translated text="Error429fix"></Translated></p>
    </div>
  </transition>
</template>

<script>
import Translated from './Translated';

export default {
  components: {
    Translated,
  },
};
</script>

<style lang="scss" scoped>
.error-505 {
  margin: 50px 0px -30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: var(--settings-text-light);
  padding: 20px 20px;
  min-width: 300px;
  width: 42vw;
  background-color: var(--stat-background-success);
  border-radius: 15px;
  .title {
    font-weight: 500;
    margin: 5px 0px 15px 0px;
    font-size: 26px;
  }
  .error-number {
    font-weight: 600;
    letter-spacing: 3px;
    margin: 0;
    font-size: 56px;
  }
  .text-other {
    margin: 0;
    color: var(--settings-text);
  }
}

.down-enter-from {
  opacity: 0.2;
  transform: translateY(-400px);
}
.down-enter-active {
  transition: all 1.4s cubic-bezier(0.26, 0.1, 0.37, 1.3);
}
</style>
