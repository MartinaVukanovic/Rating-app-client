<template>
  <div class="admin">
    <div class="picture">
      <img src="../../public/assets/profile-picture.jpg" alt="profile-picture" />
      <LogOut></LogOut>
    </div>
  </div>
</template>

<script>
import LogOut from './LogOut';

export default {
  components: {
    LogOut,
  },
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
    margin-top: 25px;
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
      border-radius: 50%;
    }
  }
}
</style>
