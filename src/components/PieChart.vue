<template>
  <pie-chart class="chart" :colors="colors" :data="pieData"></pie-chart>
</template>
<script>
export default {
  props: ['values', 'names'],
  data() {
    return {
      smiles: this.names,
      pieData: [],
      colors: ['#00a86b', '#41b3e9', '#7a7a7a', '#ffba13', '#f9585a'],
    };
  },
  mounted() {
    this.pieData = [
      [this.names[0], this.values[0]],
      [this.names[1], this.values[1]],
      [this.names[2], this.values[2]],
      [this.names[3], this.values[3]],
      [this.names[4], this.values[4]],
    ];
  },
};
</script>

<style lang="scss" scoped>
.chart {
  background-color: var(--stat-background);
  border-radius: 4px;
  padding: 25px 0px 25px 0px;
}
</style>
