import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "default",
  },
  mutations: {
    // setResource(state, val) {
    //   const sources = state.sources;
    //   const index = sources.findIndex((item) => item.name === val.name);
    //   index === -1 && state.sources.splice(sources.length, 0, val);
    // },
    // setAppResource(state, val) {
    //   state.sources = val;
    // },
    setState(state, val) {
      Object.assign(state, val)
    },
  },
  actions: {
    // getResource({ commit }, val) {
    //   return new Promise((resolve, reject) => {
    //     commit("setResource", val);
    //     resolve();
    //   });
    // },
    // updateSource({ commit }, val) {
    //   commit("setAppResource", val);
    // },
  },
  modules: {},
});
