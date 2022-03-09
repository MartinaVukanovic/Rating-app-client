<template>
  <div class="today">
    <div class="top-row">
      <div class="text-content">
        <div><p class="title">Today is a new day. Check your ratings!</p></div>
        <div>
          <p class="subtitle">
            Graphs presents you rating results. Today you have 225 rates, check it on dashboard.
          </p>
        </div>
      </div>
      <OvalArtwork class="artwork"></OvalArtwork>
    </div>
    <div class="charts">
      <AreaChart class="areachart"></AreaChart>
      <PieChart class="piechart"></PieChart>
    </div>
    <div class="stats-count">
      <ul>
        <li>
          <div class="list-field list-field-title">Emotion</div>
          <div class="list-field list-field-title">Count</div>
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
import OvalArtwork from '../components/OvalArtwork';
import AreaChart from '../components/AreaChart';
import PieChart from '../components/PieChart';

export default {
  name: 'today',
  components: { OvalArtwork, AreaChart, PieChart },
  data() {
    return {
      smiles: [
        { count: 26, type: 'very_satisfied' },
        { count: 14, type: 'satisfied' },
        { count: 35, type: 'dissatisfied' },
        { count: 8, type: 'very_dissatisfied' },
        { count: 155, type: 'bad' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.top-row {
  display: flex;
  flex-wrap: wrap;
  height: 60vh;
}
.artwork {
  width: 48vw;
}
.text-content {
  margin-top: 50px;
  margin-left: 150px;
}
.today {
  background-color: var(--background-black);
  height: 100vh;
  width: 100%;
  display: table;
}
.title {
  font-size: 48px;
  max-width: 610px;
  color: rgba(255, 255, 255, 0.7);
}
.charts {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.areachart {
  margin-left: 50px;
  height: 300px !important;
  min-width: 320px !important;
  width: 60vw !important;
}
.subtitle {
  margin-top: -30px;
  font-size: 18px;
  max-width: 630px;
  color: rgba(255, 255, 255, 0.6);
}
@media all and (max-width: 768px) {
  .stats-count {
    margin-left: 0px !important;
    display: flex;
    justify-content: space-around !important;
  }

  ul {
    width: 82vw !important;
  }
  .title {
    font-size: 28px;
  }
  .subtitle {
    margin-top: -20px;
    font-size: 12px;
    padding-right: 5px;
  }
  .text-content {
    margin-top: 80px;
    margin-left: 20px;
  }
  .artwork {
    width: 80vw;
  }
  .areachart {
    margin-left: 0px !important;
  }
}

.stats-count {
  min-width: 320px;
  margin-left: 130px;
  display: flex;
  justify-content: left;
}
ul {
  color: rgba(255, 255, 255, 0.85);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 50vw;
  background-color: var(--stat-background);
  margin: 20px 20px;
  list-style-type: none;
  padding: 0;
  li {
    border-bottom: 1px solid rgb(85, 85, 85);
    display: flex;
    list-style-type: none;
    .list-field {
      width: 50%;
      color: rgba(255, 255, 255, 0.85);
      font-size: 12px;
      height: 47px;
      line-height: 47px;
      padding-left: calc(20px + 0.5vw);
    }
    .list-field-title {
      background-color: rgba(255, 255, 255, 0.03);
    }
  }
}
</style>
