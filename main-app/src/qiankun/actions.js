import { MicroAppStateActions, initGlobalState } from "qiankun";
import store from "@/store";

// 初始化 state
let { state } = store;
// let state = store.state,
const actions = initGlobalState(state);
// actions.onGlobalStateChange((state, prev) => {
//   // state: 变更后的状态; prev 变更前的状态
//   console.log(state, prev);
// });
// actions.setGlobalState(state);
// actions.offGlobalStateChange();
export default actions;
