import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/b-child',
  },
  // { path: '*', redirect: '/404' }
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: () => import(/* webpackChunkName: "test" */ '../views/test.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
