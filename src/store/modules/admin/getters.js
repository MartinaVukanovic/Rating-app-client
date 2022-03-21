import utils from '@/utility';

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
  todayValues(state) {
    const { smilesData } = utils.handleTodayData(state.today);
    return smilesData;
  },
  todaySum(state) {
    const { smilesSum } = utils.handleTodayData(state.today);
    return smilesSum;
  },
  reportsValues(state) {
    const { smilesData } = utils.handleReportsData(state.reports);
    return smilesData;
  },
  reportsSum(state) {
    const { smilesSum } = utils.handleReportsData(state.reports);
    return smilesSum;
  },
};
