import utils from '@/utility';

export default {
  thankYouMessage(state) {
    return state.message;
  },
  MessageTime(state) {
    return state.messageTime;
  },
  emotionNumber(state) {
    return state.numberOfEmotions;
  },
  getInfo(state) {
    return state.info;
  },
  getToday(state) {
    return state.today;
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
  getError(state) {
    return state.errorExists;
  },
  notAuthorized(state) {
    return state.notAuthorized;
  },
};
