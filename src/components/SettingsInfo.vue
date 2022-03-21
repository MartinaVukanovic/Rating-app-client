<template>
  <div class="info-wrapper" @click.self="toggleInfo">
    <div class="info">
      <div class="title">
        <h1>Current settings</h1>
        <button @click="toggleInfo">X</button>
      </div>
      <hr />
      <div class="content">
        <div>
          <h1>Thank you message:</h1>
          <p>{{ thankYouMessage }}</p>
        </div>
        <div>
          <h1>Message timeout:</h1>
          <p>{{ MessageTime }}</p>
        </div>
        <div>
          <h1>Emotions number:</h1>
          <p>{{ emotionNumber }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions('admin', ['toggleInfo']),
  },
  computed: {
    ...mapGetters('admin', ['thankYouMessage', 'MessageTime', 'emotionNumber']),
  },
};
</script>

<style scoped lang="scss">
.info-wrapper {
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba($color: black, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .info {
    background-color: var(--stat-background);
    max-width: 500px;
    max-height: 700px;
    width: 90%;
    height: 80%;
    padding: 10px 20px;

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 25px;
        font-weight: 400;
      }
      button {
        margin-right: 20px;
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: inherit;

        &:hover {
          color: white;
        }
      }
    }

    .content {
      width: 100%;
      margin-top: 50px;

      div {
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 20px 0;

        h1 {
          font-size: 20px;
          font-weight: 400;
          width: 50%;
        }
        p {
          font-size: 15px;
          font-style: italic;
          justify-self: start;
          margin-left: 30px;
          width: 50%;
        }
      }
    }
  }
}
</style>
