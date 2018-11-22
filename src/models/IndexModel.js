import { queryMapData } from '../services/RequestApi';

export default {

  namespace: 'index',

  state: {
    data: {
      airportsFields: [],
      airlineFields: [],
      airports: [],
      airlines: [],
      routes: []
    }
  },

  subscriptions: {
    setup ({dispatch, history}) {  // eslint-disable-line
    }
  },

  effects: {
    * fetch ({payload}, {put, call}) {
      const response = yield call(queryMapData, payload);
      // if (response.data.code !== 0) {
      //   console.error('error');
      // }
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
