<template>
  <pie-chart
    class="pie-chart"
    :data="[
      ['Blueberry', 44],
      ['Strawberry', 23],
    ]"
  ></pie-chart>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.pie-chart {
  background-color: var(--stat-background);
}
</style>
