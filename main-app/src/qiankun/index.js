import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import store from "@/store";
// import
export const apps = [
  {
    name: "b-child", // 必选，微应用的名称，微应用之间必须确保唯一
    entry: "http://localhost:8022", // - 必选，微应用的入口
    container: "#appContainer", // -必选，微应用的容器节点的选择器或者 Element 实例
    activeRule: "/b-child", // - 必选，微应用的激活规则
    props: {
      store: store,
      // - 可选，主应用需要传递给微应用的数据。
      // msg: "我是父应用传过来的值，传递给B应用",
    },
  },
  {
    name: "c-child",
    entry: "http://localhost:8033",
    container: "#appContainer",
    activeRule: "/c-child",
    props: {
      // $globalStore: store,
      // msg: "我是父应用传过来的值，传递给C应用",
    },
  },
];
export const useQiankun = () => {
  registerMicroApps(apps, {
    beforeLoad: [
      (app) => {
        console.log(`${app.name}的beforeLoad阶段`);
      },
    ],
    beforeMount: [
      (app) => {
        console.log(`${app.name}的beforeMount阶段`);
      },
    ],
    afterMount: [
      (app) => {
        console.log(`${app.name}的afterMount阶段`);
      },
    ],
    beforeUnmount: [
      (app) => {
        console.log(`${app.name}的beforeUnmount阶段`);
      },
    ],
    afterUnmount: [
      (app) => {
        console.log(`${app.name}的afterUnmount阶段`);
      },
    ],
  });
  // 设置主应用启动后默认进入的微应用（也可以用vue-router重定向）
  // setDefaultMountApp("/b-child");
  start();
  // { experimentalStyleIsolation: true, prefetch: "all" }
};
