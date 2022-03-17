<template>
  <div class="today">
    <div class="top-row">
      <div class="text-content">
        <div class="title">
          <p>
            <b>
              <p>{{ $t('TodayTitle') }}</p></b
            >
          </p>
        </div>
        <div class="subtitle">
          <p>{{ $t('TodaySubTitleFirst') }} {{ $t('TodaySubTitleSecond') }}</p>
        </div>
      </div>
      <OvalArtwork class="artwork"></OvalArtwork>
    </div>
    <div class="margin-div"></div>
    <div class="grafs">
      <AreaChart
        v-if="todayHours.length"
        class="area-chart"
        :hours="todayHours"
        :values="todayValues"
        :smiles="smiles"
      ></AreaChart>
      <PieChart class="pie-chart"></PieChart>
    </div>
    <div class="stats-count">
      <ul>
        <li>
          <div class="list-field list-field-title">{{ $t('Emotion') }}</div>
          <div class="list-field list-field-title">{{ $t('Count') }}</div>
        </li>
        <li v-for="smile in smiles" :key="smile.type">
          <div class="list-field">{{ smile.type }}</div>
          <div class="list-field">{{ smile.count }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import OvalArtwork from '../components/OvalArtwork';
import AreaChart from '../components/AreaChart';
import PieChart from '../components/PieChart';

export default {
  name: 'today',
  components: {
    OvalArtwork,
    AreaChart,
    PieChart,
  },
  data() {
    return {
      /* smiles: [
        { count: 26, type: 'very_satisfied' },
        { count: 14, type: 'satisfied' },
        { count: 35, type: 'dissatisfied' },
        { count: 8, type: 'very_dissatisfied' },
        { count: 155, type: 'bad' },
      ], */
    };
  },
  methods: {
    ...mapActions('admin', ['todayPost']),
  },
  computed: {
    ...mapGetters('admin', ['todayHours', 'todayValues']),
    ...mapGetters(['smiles']),
  },
  mounted() {
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    this.todayPost(date);
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
  .area-chart {
    min-width: 320px;
    width: 60vw !important;
    height: 300px !important;
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
    margin: 0 40px;
    .pie-chart {
      max-width: 425px;
    }
  }
  .stats-count {
    display: flex;
    justify-content: left;
  }
  ul {
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-self: center;
    width: 50vw;
    min-width: 320px;
    background-color: var(--stat-background);
    margin: 20px 0px 20px 40px;
    list-style-type: none;
    padding: 0;
    li {
      border-bottom: 1px solid rgb(85, 85, 85);
      display: flex;
      list-style-type: none;
      .list-field {
        width: 50%;
        color: var(--settings-text);
        font-size: 12px;
        height: 47px;
        line-height: 47px;
        padding-left: calc(20px + 0.5vw);
      }
      .list-field-title {
        background-color: var(--stat-background);
      }
    }
  }
}
@media all and (max-width: 1020px) {
  .stats-count {
    justify-content: center !important;
    margin-left: -40px;
  }
}
/*media querry*/
@media all and (min-width: 769px) {
  .today .text-content {
    padding: 0 1rem 5rem;
  }
  .today {
    padding-left: 100px;
    padding-top: 64px;
    .text-content {
      padding-left: 64px;
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
        width: 60%;
      }
      .pie-chart {
        width: 30%;
      }
    }
  }
}
@media all and (min-width: 1440px) {
  .today {
    .top-row {
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
