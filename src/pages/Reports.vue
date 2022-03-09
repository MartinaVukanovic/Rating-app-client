<template>
  <div id="app" class="container">
    <div class="charts">
      <AreaChart class="areachart" @click="somePrint"></AreaChart>
      <PieChart class="piechart"></PieChart>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AreaChart from '../components/AreaChart';
import PieChart from '../components/PieChart';

export default {
  name: 'App',
  components: {
    AreaChart,
    PieChart,
  },
  methods: {
    ...mapActions(['somePrint']),
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-color: var(--background-black);
  width: 100%;
  display: table;
}
.charts {
  margin-top: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.areachart {
  margin-left: 15px;
  margin-right: 15px;
  height: 300px !important;
  width: 940px !important;
}
.piechart {
  width: 340px !important;
  height: 300px !important;
}
@media all and (max-width: 1000px) {
  .charts {
    margin-top: 100px;
  }
}
</style>
