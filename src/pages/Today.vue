<template>
  <div class="today">
    <div class="top-row">
      <div class="text-content">
        <div class="title"><p>Today is a new day. Check your ratings!</p></div>
        <div class="subtitle">
          <p>
            Graphs presents you rating results. Today you have 225 rates, check it on dashboard.
          </p>
        </div>
      </div>
      <OvalArtwork class="artwork"></OvalArtwork>
    </div>
    <div class="grafs">
      <LineChart></LineChart>
      <PieChart></PieChart>
    </div>
  </div>
</template>

<script>
import OvalArtwork from '../components/OvalArtwork';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';

export default {
  name: 'today',
  components: { OvalArtwork, LineChart, PieChart },
};
</script>
<style lang="scss" scoped>
.today {
  background-color: var(--background-black);
  min-height: 100vh;
  width: 100%;
  padding-top: 80px;

  .top-row {
    display: flex;
    flex-direction: column;
  }

  .text-content {
    padding: 0 1rem 5rem;

    .title {
      max-width: 610px;
      margin: 0 auto;

      p {
        color: rgba(255, 255, 255, 0.7);
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
        color: rgba(255, 255, 255, 0.6);
        margin: 0 0 24px 0;
        text-align: center;
      }
    }
  }

  .grafs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 20px;
  }
}

/*media querry*/
@media all and (min-width: 769px) {
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
  }
}
@media all and (min-width: 1440px) {
  .today {
    .top-row {
      .artwork {
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
  }
}
/*end of media querry*/
</style>
