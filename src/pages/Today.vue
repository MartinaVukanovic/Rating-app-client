<template>
  <div class="today">
    <div class="top-row">
      <div class="text-content">
        <div class="title">
          <p>
            <b>
              <p><Translated text="TodayTitle"></Translated></p
            ></b>
          </p>
        </div>
        <div class="subtitle">
          <p>
            <Translated text="TodaySubTitleFirst"></Translated> {{ emotionsSum
            }}<Translated text="TodaySubTitleSecond"></Translated>
          </p>
        </div>
      </div>
      <OvalArtwork class="artwork"></OvalArtwork>
    </div>
    <div class="margin-div"></div>
    <div class="grafs">
      <AreaChart
        class="area-chart"
        :hours="hours"
        :values="todayValues"
        :names="checkNames"
        v-if="!checkData"
      ></AreaChart>
      <PieChart
        class="pie-chart"
        :values="todaySum"
        v-if="!checkData"
        :names="checkNames"
      ></PieChart>
    </div>
    <SmilesOverview :sum="todaySum" v-if="!checkData" :names="checkNames"></SmilesOverview>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import OvalArtwork from '../components/OvalArtwork';
import AreaChart from '../components/AreaChart';
import PieChart from '../components/PieChart';
import Translated from '../components/Translated';
import SmilesOverview from '../components/smilesOverview';

export default {
  name: 'today',
  components: {
    OvalArtwork,
    AreaChart,
    PieChart,
    SmilesOverview,
    Translated,
  },
  data() {
    return {
      hours: [
        '00:00',
        '02:00',
        '04:00',
        '06:00',
        '08:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00',
        '20:00',
        '22:00',
      ],
      sum: 0,
    };
  },
  methods: {
    ...mapActions('admin', ['todayPost']),
    ...mapActions(['toggleSpin']),
  },
  computed: {
    ...mapGetters('admin', ['todayValues', 'todaySum']),
    emotionsSum() {
      return this.todaySum.reduce((partialSum, a) => partialSum + a, 0);
    },
    checkData() {
      return this.todaySum.every((item) => item === 0);
    },
    checkNames() {
      if (localStorage.getItem('translation') === 'ba') {
        return ['Jako zadovoljan', 'Zadovoljan', 'Nezadovoljan', 'Jako nezadovoljan', 'Razočaran'];
      }
      if (localStorage.getItem('translation') === 'hi') {
        return ['बहुत संतुष्ट', 'संतुष्ट', 'असंतुष्ट', 'बहुत असंतुष्ट', 'निराश'];
      }
      return ['Very satisfied', 'Satisfied', 'Dissatisfied', 'Very dissatisfied', 'Bad'];
    },
  },
  mounted() {
    this.theme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', this.theme);
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    this.toggleSpin();
    this.todayPost(date);
    this.toggleSpin();
  },
};
</script>
<style lang="scss" scoped>
.today {
  background-color: var(--background-black);
  min-height: 100vh;
  width: 100%;
  padding-top: 80px;
  display: table;
  .top-row {
    display: flex;
    flex-direction: column;
  }
  .text-content {
    padding: 10px;
    .title {
      max-width: 660px;
      margin: 0 auto;
      p {
        color: var(--settings-text-light);
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        margin: 1rem 0 24px 0;
      }
    }
    .subtitle {
      max-width: 610px;
      margin: 0 auto;
      p {
        font-size: 13px;
        color: var(--settings-text);
        margin: 0 0 24px 0;
        text-align: center;
      }
    }
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
/*media querry*/
@media all and (min-width: 769px) {
  .today {
    padding-left: 100px;
    padding-top: 64px;
    padding-right: 64px;
    .text-content {
      padding: 0 15px 50px 80px;
      .title {
        p {
          text-align: left;
          font-size: 42px;
        }
      }
      .subtitle {
        p {
          text-align: left;
          font-size: 16px;
        }
      }
    }
  }
}
@media all and (min-width: 1024px) {
  .today {
    padding-top: 0;
    .stats-count {
      justify-content: left;
    }
    .top-row {
      flex-direction: row;
      .artwork {
        flex-grow: 2;
        padding-right: 100px;
      }
      .text-content {
        padding-top: 64px;
        flex-grow: 1;
        .title {
          p {
            text-align: left;
            font-size: 36px;
          }
        }
        .subtitle {
          p {
            text-align: left;
            font-size: 15px;
          }
        }
      }
    }
    .margin-div {
      width: 100%;
      height: 2.5vw;
    }
    .grafs {
      flex-direction: row;
      margin-top: -100px;
      .line-chart {
        max-width: 60%;
      }
      .pie-chart {
        max-width: 30%;
      }
    }
  }
}
@media all and (min-width: 1440px) {
  .today {
    .top-row {
      .artwork {
        padding-right: 0;
      }
      .text-content {
        .title {
          p {
            text-align: left;
            font-size: 48px;
          }
        }
        .subtitle {
          p {
            text-align: left;
            font-size: 18px;
          }
        }
      }
    }
    .margin-div {
      width: 100%;
      height: 5vw;
    }
  }
}
/*end of media querry*/
</style>
