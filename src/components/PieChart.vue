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
  height: 300px !important;
  width: 360px !important;
  background-color: var(--stat-background);
  border-radius: 4px;
  padding: 25px 0px 25px 0px;
}
</style>
