import { selectUserInfo } from '@/services/user';

export default {
  state: {
    userInfo: {},
  },
  actions: {
    // 代码示例，请求部分根据自己的实际需求写
    getUserInfo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        selectUserInfo(payload).then((response) => {
          commit('setUserInfo', { ...response.data });

          resolve(response);
        }).catch((e) => {
          reject(e);
        });
      });
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
};
