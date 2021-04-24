/*
 * @Author: Hzh
 * @Date: 2021-04-23 09:57:53
 * @LastEditTime: 2021-04-24 21:13:25
 * @LastEditors: Hzh
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  useQiankun
} from './qiankun'

Vue.config.productionTip = false

const vueApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

vueApp.$nextTick(() => {
  useQiankun()
})
