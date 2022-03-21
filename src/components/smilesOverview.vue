<template>
  <div class="stats-count">
    <ul>
      <li>
        <div class="list-field list-field-title"><Translated text="Emotion"></Translated></div>
        <div class="list-field list-field-title"><Translated text="Count"></Translated></div>
      </li>
      <li v-for="smile in smiles" :key="smile.type">
        <div class="list-field">{{ smile.name }}</div>
        <div class="list-field">{{ smile.sum }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Translated from './Translated';

export default {
  props: ['sum', 'names'],
  data() {
    return {
      smiles: [
        { name: this.names[0], sum: this.sum[0] },
        { name: this.names[1], sum: this.sum[1] },
        { name: this.names[2], sum: this.sum[2] },
        { name: this.names[3], sum: this.sum[3] },
        { name: this.names[4], sum: this.sum[4] },
      ],
    };
  },
  components: {
    Translated,
  },
};
</script>

<style scoped lang="scss">
.stats-count {
  display: flex;
  justify-content: left;
}
ul {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 50vw;
  min-width: 320px;
  background-color: var(--stat-background);
  margin: 20px 0px 20px 20px;
  list-style-type: none;
  padding: 0;
  li {
    border-bottom: 1px solid rgb(85, 85, 85);
    display: flex;
    list-style-type: none;
    .list-field {
      width: 50%;
      color: var(--settings-text);
      font-size: 12px;
      height: 47px;
      line-height: 47px;
      padding-left: calc(20px + 0.5vw);
    }
    .list-field-title {
      background-color: var(--stat-background);
    }
  }
}

@media all and (max-width: 1024px) {
  .stats-count {
    justify-content: center !important;
    margin-left: -40px;
  }
}
</style>
