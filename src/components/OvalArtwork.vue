<template>
  <div class="wrapper">
    <div class="oval">
      <div class="artwork"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wrapper {
  z-index: 0;
  max-width: 1012px;
  max-height: 450px;
  width: 100%;
  height: auto;
  height: 70vw;
  margin: 0 auto;

  .oval {
    max-width: 1012px;
    max-height: 455px;
    height: 100%;
    background-image: url('../../public/assets/Oval-copy.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
    margin: auto;
    position: relative;
    overflow: visible;

    .artwork {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      max-width: 623px;
      max-height: 431px;
      height: 70%;
      width: 70%;
      background-image: url('../../public/assets/Artwork.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: top center;
    }
  }
}
/* media querry */

@media all and (min-width: 1024px) {
  .wrapper {
    .oval {
    }
    .artwork {
    }
  }
}
/* end of media querry */
</style>
