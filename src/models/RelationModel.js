import { queryRelationChartData } from '../services/RelationChart.js';

export default {

  namespace: 'relation',

  state: {
    data: {}
  },

  subscriptions: {
    setup ({dispatch, history}) {  // eslint-disable-line
    }
  },

  effects: {
    * fetch ({payload}, {put, call}) {
      const response = yield call(queryRelationChartData, payload);
      yield put({
        type: 'refreshMap',
        payload: response.data
      });
    }
  },

  reducers: {
    refreshMap (state, action) {
      return {
        ...state,
        data: action.payload
      };
    }
  }

};