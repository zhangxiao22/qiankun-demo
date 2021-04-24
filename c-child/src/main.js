
import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import store from './store'

Vue.config.productionTip = false

let router = null

let instance = null

function render ({ container, parentStore } = {}) {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/c-child' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    store,
    data () {
      return {
        store: parentStore
      }
    },
    render: h => h(App)
  }).$mount(container ? container.querySelector('#cChild') : '#cChild')// index.html 里面的 id 需要改成 appVueHash，否则子项目无法独立运行
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 全局变量来判断环境
  render()
}

export async function bootstrap () {
  console.log('现在进入bootstraped阶段')
}

export async function mount (props) {
  if (props.parentStore) {
    await props.parentStore.dispatch('getResource', { name: 'C应用的资源' })
  }
  console.log('props from main framework', props)
  render(props)
  // 测试一下 body 的事件，不会被沙箱移除
  // document.body.addEventListener('click', e => console.log('document.body.addEventListener'))
  // document.body.onclick = e => console.log('document.body.addEventListener')
}

export async function unmount () {
  console.log('unmount阶段')
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
