export default {
  thankYouMessage(state) {
    return state.message;
  },
  getToday(state) {
    return state.today;
  },
  MessageTime(state) {
    return state.messageTime;
},
  emotionNumber(state) {
    return state.numberOfEmotions;
  },
  todayHours(state) {
    const hours = [];
    state.today.forEach((hour) => {
      hours.push(Object.keys(hour)[0]);
    });
    return hours;
  },
  todayValues(state) {
    const emotions = [[], [], [], [], []];
    state.today.forEach((emotion) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 5; i++) {
        emotions[i].push(Object.values(Object.values(emotion)[0])[i]);
      }
    });
    return emotions;
  },
  reportsHours(state) {
    const hours = [];
    state.reports.forEach((hour) => {
      hours.push(Object.keys(hour)[0]);
    });
    return hours;
  },
  reportsValues(state) {
    const emotions = [[], [], [], [], []];
    state.reports.forEach((emotion) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 5; i++) {
        emotions[i].push(Object.values(Object.values(emotion)[0])[i]);
      }
    });
    return emotions;
  },
};
