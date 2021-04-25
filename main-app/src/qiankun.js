/*
 * @Author: Hzh
 * @Date: 2021-04-22 18:55:32
 * @LastEditTime: 2021-04-25 15:20:48
 * @LastEditors: Hzh
 * @Description:qiankun注册
 */
import {
  registerMicroApps,
  start
} from 'qiankun'

export const useQiankun = () => {
  const apps = [
    {
      name: 'b-child', // 必选，微应用的名称，微应用之间必须确保唯一
      entry: 'http://localhost:8022', // - 必选，微应用的入口
      container: '#appContainer', // -必选，微应用的容器节点的选择器或者 Element 实例
      activeRule: '/b-child', // - 必选，微应用的激活规则
      props: { // - 可选，主应用需要传递给微应用的数据。
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
        console.log(`${app.name}的beforeLoad阶段`)
      }
    ],
    beforeMount: [
      app => {
        console.log(`${app.name}的beforeMount阶段`)
      }
    ],
    afterMount: [
      app => {
        console.log(`${app.name}的afterMount阶段`)
      }
    ],
    beforeUnmount: [
      app => {
        console.log(`${app.name}的beforeUnmount阶段`)
      }
    ],
    afterUnmount: [
      app => {
        console.log(`${app.name}的afterUnmount阶段`)
      }
    ]
  })

  start({ experimentalStyleIsolation: true, prefetch: 'all' })
}
