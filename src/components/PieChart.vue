<template>
  <div>
    <canvas ref="canvas" class="chart" :data="pieData"></canvas>
  </div>
</template>
<script>
import { Pie } from 'vue-chartjs';

export default {
  props: ['values', 'names'],
  data() {
    return {
      smiles: this.names,
      pieData: [],
      statBcg: 'red',
      localTheme: '',
    };
  },
  extends: Pie,
  mounted() {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'light') {
      this.statBcg = '#dddddd';
    } else {
      this.statBcg = '#2d3038';
    }
    // prettier-ignore
    this.renderChart(
      {
        labels: [this.names[0], this.names[1], this.names[2], this.names[3], this.names[4]],
        datasets: [
          {
            borderColor: this.statBcg,
            backgroundColor: ['#00a86b', '#41b3e9', '#7a7a7a', '#ffba13', '#f9585a'],
            data: [this.values[0], this.values[1], this.values[2], this.values[3], this.values[4]],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false },
    );
  },
};
</script>

<style lang="scss" scoped>
.chart {
  height: 300px !important;
  max-width: 100% !important;
  background-color: var(--stat-background);
  border-radius: 4px;
  padding: 25px 20px 25px 20px;
}
</style>
