<template>
  <pie-chart class="chart" :colors="colors" :data="pieData"></pie-chart>
  <!-- <div>
    <canvas ref="canvas" class="pie-chart"></canvas>
  </div> -->
</template>
<script>
export default {
  props: ['values'],
  data() {
    return {
      smiles: ['Very satisfied', 'Satisfied', 'Dissatisfied', 'Very dissatisfied', 'Bad'],
      pieData: [],
      colors: ['#00a86b', '#41b3e9', '#7a7a7a', '#ffba13', '#f9585a'],
    };
  },
  mounted() {
    this.pieData = [
      ['Very satisfied', this.values[0]],
      ['Satisfied', this.values[1]],
      ['Dissatisfied', this.values[2]],
      ['Very dissatisfied', this.values[3]],
      ['Bad', this.values[4]],
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
