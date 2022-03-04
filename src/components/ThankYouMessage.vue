<template>
  <div class="container">
    <img src="../../public/assets/check.svg" alt="checkedIcon" />
    <p class="TMessage">Thank you for your rating!</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
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
  background-color: #1b1e24;
}

.TMessage {
  color: rgb(255, 255, 255, 0.7);
  font-size: 32px;
}
</style>
