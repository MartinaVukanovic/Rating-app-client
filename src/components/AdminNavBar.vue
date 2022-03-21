<template>
  <div class="admin">
    <div class="picture">
      <img src="../../public/assets/profile-picture.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>

<style scoped lang="scss">
.admin {
  position: fixed;
  right: 0;
  width: 64px;
  height: 100vh;
  background-color: var(--stat-background);
  z-index: 100;

  .picture {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 50%;
    }
  }
}
</style>
