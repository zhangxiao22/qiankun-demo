/*
 * @Author: Hzh
 * @Date: 2021-04-23 09:57:53
 * @LastEditTime: 2021-04-24 17:26:00
 * @LastEditors: Hzh
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sources: [
      {
        name: '主应用的资源'
      }
    ]// 资源
  },
  mutations: {
    setResource (state, val) {
      const sources = state.sources
      const index = sources.findIndex(item => item.name === val.name)
      index === -1 && state.sources.splice(sources.length, 0, val)
    },
    setAppResource (state, val) {
      state.sources = val
    }
  },
  actions: {
    getResource ({ commit }, val) {
      return new Promise((resolve, reject) => {
        commit('setResource', val)
        resolve()
      })
    },

    updateSource ({ commit }, val) {
      commit('setAppResource', val)
    }
  },
  modules: {
  }
})
