<template>
  <pie-chart class="chart" :colors="colors" :data="colorsData"></pie-chart>
</template>
<script>
export default {
  data() {
    return {
      colorsData: [
        ['very satisfied', 44],
        ['satisfied', 23],
        ['dissatisfied', 13],
      ],
      colors: ['#04D27C', '#F9585A', '#B0B0B2'],
    };
  },
};
</script>

<style lang="scss" scoped>
.chart {
>>>>>>> main
  background-color: var(--stat-background);
}
</style>
