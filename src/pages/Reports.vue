<template>
  <div id="app" class="container" :class="theme === 'light' ? 'light-theme' : 'dark-theme'">
    <div class="datepickerContainer">
      <Datepicker
        v-model="date"
        range
        autoApply
        class="datepicker"
        :enableTimePicker="false"
        dark
        noToday
      >
      </Datepicker>
    </div>
    <div class="charts">
      <AreaChart
        v-if="reportsValues.length"
        class="areachart"
        :hours="reportsHours"
        :values="reportsValues"
        :smiles="smiles"
      ></AreaChart>
      <PieChart class="piechart"></PieChart>
    </div>
    <!--   <button class="botun" @click="changeTheme">switch</button> -->
  </div>
</template>

<script>
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import { mapActions, mapGetters } from 'vuex';
import AreaChart from '../components/AreaChart';
import PieChart from '../components/PieChart';

export default {
  name: 'App',
  components: {
    AreaChart,
    PieChart,
    Datepicker,
  },
  data() {
    return {
      date: [],
      startDate: [],
      endDate: [],
      theme: 'light',
    };
  },
  methods: {
    ...mapActions('admin', ['reportsPost']),
    changeTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    },
  },
  computed: {
    ...mapGetters('admin', ['reportsHours', 'reportsValues']),
    ...mapGetters(['smiles']),
  },
  mounted() {
    this.endDate = new Date();
    this.startDate = new Date(new Date().setDate(this.endDate.getDate() - 7));
    this.date = [this.startDate, this.endDate];
    this.reportsPost(this.date);
  },
};
</script>

<style lang="scss" scoped>
.datepickerContainer {
  display: flex;
  justify-content: left;
}
.datepicker {
  margin-top: 20px;
  margin-left: 120px;
  width: 250px;
}
.container {
  max-width: 100%;
  overflow-x: hidden;
  height: 100vh;
  background-color: var(--background-black);
  width: 100%;
  display: table;
}
.charts {
  margin-top: 20px;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
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
  .datepicker {
    margin-left: 0px;
    margin-top: 100px;
  }
  .datepickerContainer {
    display: flex;
    justify-content: center;
  }
}
@media all and (max-width: 760px) {
  .charts {
    margin-top: 20px;
  }
}
.dp__input_wrap {
  margin-left: 10px;
}
</style>
