<template>
  <div id="app" class="container">
    <div class="date-picker-container">
      <Datepicker
        v-model="date"
        range
        autoApply
        maxRange="5"
        class="datepicker"
        :enableTimePicker="false"
        dark
        noToday
        maxRange="6"
      >
      </Datepicker>
    </div>
    <div class="grafs">
      <AreaChart
        :key="reportsSum"
        class="area-chart"
        :hours="days"
        :values="reportsValues"
        v-if="!checkData"
      ></AreaChart>
      <PieChart
        :key="reportsSum"
        class="pie-chart"
        :values="reportsSum"
        v-if="!checkData"
      ></PieChart>
    </div>
    <SmilesOverview :key="reportsSum" :sum="reportsSum" v-if="!checkData"></SmilesOverview>
  </div>
</template>

<script>
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import { mapActions, mapGetters } from 'vuex';
import AreaChart from '../components/AreaChart';
import PieChart from '../components/PieChart';
import SmilesOverview from '../components/smilesOverview';

export default {
  name: 'App',
  components: {
    AreaChart,
    PieChart,
    SmilesOverview,
    Datepicker,
  },
  data() {
    return {
      date: [],
      startDate: [],
      endDate: [],
      days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    };
  },
  methods: {
    ...mapActions('admin', ['reportsPost']),
    convertTime(date) {
      return date.toISOString().slice(0, 10);
    },
    submit(date1, date2) {
      const startDate = this.convertTime(date1);
      const endDate = this.convertTime(date2);
      this.reportsPost({ startDate, endDate });
    },
  },
  computed: {
    ...mapGetters('admin', ['reportsValues', 'reportsSum']),
    checkData() {
      return this.reportsSum.every((item) => item === 0);
    },
  },
  watch: {
    date(value) {
      this.submit(value[0], value[1]);
    },
  },
  mounted() {
    this.endDate = new Date();
    this.startDate = new Date(new Date().setDate(this.endDate.getDate() - 7));
    this.date = [this.startDate, this.endDate];
    this.submit(this.startDate, this.endDate);
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  width: 100%;
  padding-top: 80px;

  .date-picker-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  .grafs {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin: 0 20px;

    .area-chart {
      min-width: 320px;
      width: 100%;
      height: 300px !important;
      z-index: 5;
    }
    .pie-chart {
      z-index: 5;
      max-width: 550px;
      width: 100%;
    }
  }
}

@media all and (min-width: 769px) {
  .container {
    padding-left: 100px;
    padding-top: 20px;
    padding-right: 64px;
  }
}
@media all and (min-width: 1024px) {
  .container {
    .date-picker-container {
      justify-content: start;
      margin: 0 0 20px 20px;
    }

    .grafs {
      flex-direction: row;

      .line-chart {
        max-width: 70%;
      }
      .pie-chart {
        max-width: 30%;
      }
    }
  }
}
</style>
