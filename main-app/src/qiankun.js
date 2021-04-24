/*
 * @Author: Hzh
 * @Date: 2021-04-22 18:55:32
 * @LastEditTime: 2021-04-23 17:51:05
 * @LastEditors: Hzh
 * @Description:乾坤注册
 */
import {
  registerMicroApps,
  start,
  prefetchApps
  // loadMicroApp
} from 'qiankun'

// function genActiveRule (routerPrefix) {
//   return location => location.pathname.startsWith(routerPrefix)
// }

export const useQiankun = () => {
  const apps = [
    {
      name: 'b-child',
      entry: 'http://localhost:8022',
      container: '#appContainer',
      activeRule: '/b-child',
      props: {
        msg: '我是父应用传过来的值，传递给B应用'
      }
    },
    {
      name: 'c-child',
      entry: 'http://localhost:8033',
      container: '#appContainer',
      activeRule: '/c-child',
      props: {
        msg: '我是父应用传过来的值，传递给C应用'
      }
    }
  ]

  registerMicroApps(apps, {
    beforeLoad: [
      app => {
        console.log('beforeLoad阶段', app.name)
      }
    ],
    beforeMount: [
      app => {
        console.log('应用每次进入都会调用 mount 方法')
        console.log('beforeMount阶段', app.name)
      }
    ],
    afterMount: [
      app => {
        console.log('afterMount阶段', app.name)
      }
    ],
    beforeUnmount: [
      app => {
        console.log('应用每次 切出/卸载')
        console.log('beforeUnmount阶段', app.name)
      }
    ],
    afterUnmount: [
      app => {
        console.log('afterUnmount阶段', app.name)
      }
    ]
  })

  start({ experimentalStyleIsolation: true, prefetch: 'all' })
}

// export const microApp = loadMicroApp({
//   name: 'child-app',
//   entry: '//localhost:8022',
//   container: '#appContainer',
//   props: {
//     msg: '我是父应用传过来的值'
//   }
// })

// export async function userMicroApp () {
//   return await loadMicroApp({
//     name: 'child-app',
//     entry: '//localhost:8022',
//     container: '#microContainer',
//     props: {
//       msg: '我是父应用传过来的值'
//     }
//   })

// }

// export function unmountMicroApp () {
//   microApp.unmount()
// }

export const usePrefetchApps = () => {
  prefetchApps([
    { name: 'b-child', entry: 'http://localhost:8022' },
    { name: 'c-child', entry: 'http://localhost:8033' }
  ])
}
