<template>
  <transition name="down" appear>
    <div class="error-505">
      <p class="error-number">401</p>
      <img src="../../public/assets/error-401.png" class="error" width="300px" />
      <p class="title"><Translated text="Error401tittle"></Translated></p>
      <p class="text-other"><Translated text="Error401fix"></Translated></p>
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
  margin: 20px 0px -30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: var(--settings-text-light);
  padding: 20px 20px;
  min-width: 300px;
  width: 35vw;
  background-color: var(--stat-background-success);
  border-radius: 15px;
  .error {
    width: 250px;
    margin-top: -80px;
  }
  .title {
    font-weight: 500;
    margin: 5px 0px 15px 0px;
    font-size: 26px;
  }
  .error-number {
    font-weight: 500;
    margin: 20px 0px 0px 35px;
    letter-spacing: 28px;
    font-size: 50px;
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
