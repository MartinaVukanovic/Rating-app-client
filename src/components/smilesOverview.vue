<template>
  <div class="stats-count">
    <ul>
      <li>
        <div class="list-field list-field-title">
          <Translated text="Emotion"></Translated
          ><img @click="sortNames" class="arrow-down" src="../../public/assets/arrow-down.svg" />
        </div>
        <div class="list-field list-field-title">
          <Translated text="Count"></Translated
          ><img @click="sortSum" class="arrow-down" src="../../public/assets/arrow-down.svg" />
        </div>
      </li>
      <li v-for="smile in smiles" :key="smile.type" ref="table">
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
      theme: '',
      sortByNames: true,
      sortBySum: true,
    };
  },
  components: {
    Translated,
  },
  methods: {
    sortSum() {
      if (this.sortBySum === true) {
        this.smiles.sort((a, b) => b.sum - a.sum);
        this.sortBySum = false;
      } else {
        this.smiles.sort((a, b) => a.sum - b.sum);
        this.sortBySum = true;
      }
    },
    sortNames() {
      if (this.sortByNames === true) {
        this.smiles.sort((a, b) => b.name.localeCompare(a.name));
        this.sortByNames = false;
      } else {
        this.smiles.sort((a, b) => a.name.localeCompare(b.name));
        this.sortByNames = true;
      }
    },
  },
  mounted() {
    this.sortSum();
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
      display: flex;
      align-items: center;

      .arrow-down {
        margin-left: 20px;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.7);
        filter: invert(0.5);
      }
    }
  }
}

@media all and (max-width: 1024px) {
  .stats-count {
    justify-content: center !important;
    margin-left: -20px;
  }
}
</style>
