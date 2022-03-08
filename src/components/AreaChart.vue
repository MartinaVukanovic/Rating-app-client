<template>
  <div>
    <canvas ref="canvas" class="areaChart"></canvas>
  </div>
</template>
<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null,
      gradient3: null,
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 400);
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 400);
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 400);

    this.gradient.addColorStop(0, 'rgba(4, 210,124, 0.35)');
    this.gradient.addColorStop(0.5, 'rgba(4, 210,124, 0.25)');
    this.gradient.addColorStop(1, 'rgba(4, 210,124, 0)');

    this.gradient2.addColorStop(0, 'rgba(249, 88, 90, 0.35)');
    this.gradient2.addColorStop(0.5, 'rgba(249, 88, 90, 0.25)');
    this.gradient2.addColorStop(1, 'rgba(249, 88, 90, 0)');

    this.gradient3.addColorStop(0, 'rgba(176, 176, 178, 0.35)');
    this.gradient3.addColorStop(0.5, 'rgba(176, 176, 178, 0.25)');
    this.gradient3.addColorStop(1, 'rgba(176, 176, 178, 0)');

    this.renderChart(
      {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            borderColor: '#04D27C',
            pointBackgroundColor: 'white',
            borderWidth: 1.5,
            pointBorderColor: 'black',
            backgroundColor: this.gradient,
            data: [40, 39, 10, 40, 39, 80, 40],
          },
          {
            label: 'Data Two',
            borderColor: '#F9585A',
            pointBackgroundColor: 'white',
            pointBorderColor: 'black',
            borderWidth: 1.5,
            backgroundColor: this.gradient2,
            data: [60, 55, 32, 10, 2, 12, 53],
          },
          {
            label: 'Data tri',
            borderColor: '#B0B0B2',
            pointBackgroundColor: 'white',
            pointBorderColor: 'black',
            borderWidth: 1.5,
            backgroundColor: this.gradient3,
            data: [30, 30, 20, 13, 32, 12, 43],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false },
    );
  },
};
</script>

<style lang="scss" scoped>
.areaChart {
  border-radius: 4px;
  background-color: var(--stat-background);
  height: 300px !important;
  width: 600px !important;
}
</style>
