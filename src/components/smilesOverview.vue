<template>
  <div class="stats-count">
    <ul>
      <li>
        <div class="list-field list-field-title">Emotion</div>
        <div class="list-field list-field-title">Count</div>
      </li>
      <li v-for="smile in smiles" :key="smile.type">
        <div class="list-field">{{ smile.name }}</div>
        <div class="list-field">{{ smile.sum }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['sum'],
  data() {
    return {
      smiles: [
        { name: 'Very satisfied', sum: this.sum[0] },
        { name: 'Satisfied', sum: this.sum[1] },
        { name: 'Dissatisfied', sum: this.sum[2] },
        { name: 'Very dissatisfied', sum: this.sum[3] },
        { name: 'Bad', sum: this.sum[4] },
      ],
    };
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
