import { queryMapData } from '../services/RequestApi';

export default {

  namespace: 'overview',

  state: {
    data: {
      data: []
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

// export default {
//
//   namespace: 'example',
//
//   state: {},
//
//   subscriptions: {
//     setup({ dispatch, history }) {  // eslint-disable-line
//     },
//   },
//
//   effects: {
//     *fetch({ payload }, { call, put }) {  // eslint-disable-line
//       yield put({ type: 'save' });
//     },
//   },
//
//   reducers: {
//     save(state, action) {
//       return { ...state, ...action.payload };
//     },
//   },
//
// };
