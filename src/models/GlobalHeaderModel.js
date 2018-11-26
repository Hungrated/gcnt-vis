import { routerRedux } from 'dva/router';

export default {

  namespace: 'header',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    * redirect ({ payload }, { put }) {
      yield put(routerRedux.push('/user', {name: 'dkvirus', age: 20}));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
