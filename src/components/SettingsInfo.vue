<template>
  <div class="info-wrapper" @click.self="toggleInfo" ref="infoAround">
    <div class="info" ref="info">
      <div class="title">
        <h1><Translated text="CurrentSettings"></Translated></h1>
        <button @click="toggleInfo">x</button>
      </div>
      <hr />
      <div class="content">
        <div>
          <h1><Translated text="MessagePlaceholder"></Translated>:</h1>
          <p>{{ thankYouMessage }}</p>
        </div>
        <div>
          <h1><Translated text="MessageTimeoutPlaceholder"></Translated>:</h1>
          <p>{{ MessageTime }} s</p>
        </div>
        <div>
          <h1><Translated text="EmotionsNumberPlaceHolder"></Translated>:</h1>
          <p>{{ emotionNumber }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Translated from './Translated';

export default {
  components: {
    Translated,
  },
  methods: {
    ...mapActions('admin', ['toggleInfo']),
  },
  computed: {
    ...mapGetters('admin', ['thankYouMessage', 'MessageTime', 'emotionNumber']),
  },
};
</script>

<style scoped lang="scss">
hr {
  border: 0px;
  border-top: 1px solid var(--settings-border);
  margin: 10px 0px 40px 0;
  padding: 0;
}
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
    border-radius: 4px;
    background-color: var(--stat-background);
    max-width: 500px;
    max-height: 700px;
    width: 90%;
    padding: 30px 35px;

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
          font-size: 18px;
          font-style: italic;
          justify-self: start;
          margin-left: 40px;
          width: 48%;
        }
      }
    }
  }
}
@media only screen and (max-width: 570px) {
  .info {
    padding: 20px 20px !important;
  }
}
</style>
