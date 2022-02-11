import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalState: {},
  },
  mutations: {
    setGlobalState(state, val) {
      state.globalState = {...state.globalState,...val}
    },
  },
  actions: {},
  modules: {},
});
