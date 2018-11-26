import { routerRedux } from 'dva/router';

export default {

  namespace: 'header',

  state: {},

  effects: {
    * redirect ({ payload }, { put }) {
      yield put(routerRedux.push(payload.link, payload.params));
    },
  },

  reducers: {
  }
};
