<template>
  <line-chart
    class="line-chart"
    :data="[
      [new Date(), 5],
      [1368174456, 4],
      ['2017-01-01 00:00:00 UTC', 7],
    ]"
  ></line-chart>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.line-chart {
  background-color: var(--stat-background);
}
</style>
