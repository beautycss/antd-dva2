import { getFakeChartData } from '../services/api';

export default {
  namespace: 'home',

  state: {
    list: [],
  },

  effects: {
    *fetchList({ payload, callback }, { call, put }) {
      const response = yield call(getFakeChartData, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
