import { searchWithParams } from '../services/RequestApi';

export default {

  namespace: 'search',

  state: {
    data: {}
  },

  subscriptions: {
    setup ({dispatch, history}) {  // eslint-disable-line
    }
  },

  effects: {
    * fetch ({payload}, {put, call}) {
      const response = yield call(searchWithParams, payload);
      yield put({
        type: 'refresh',
        payload: response.data
      });
    }
  },

  reducers: {
    refresh (state, action) {
      return {
        ...state,
        data: action.payload
      };
    }
  }
};
