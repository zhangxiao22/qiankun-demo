<template>
  <div id="app">
    {{token}}
    <button @click="handleclick">主（mainToken）</button>
    <header>
      <!-- <router-link to="/about">主应用的page页面</router-link> -->
      <router-link to="/b-child">子应用B(默认)</router-link>
      <router-link to="/c-child">子应用C</router-link>
      <router-link to="/">回到主应用</router-link>
    </header>
    <!-- <button @click="loadMicroApps">手动加载子应用</button> -->
    <!-- id为appContainer就是放置子应用的容器 -->
    <div id="appContainer"></div>

    <!-- 用来获取子应用的资源，不做展示 -->
    <div style="display: none"
         id="microContainer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'
// import { mapGetters } from 'vuex'
import actions from "@/qiankun/actions";
export default {
  name: '',

  components: {},

  props: {},

  data() {
    return {
      microApp: null,
    }
  },

  computed: {
    token() {
      return this.$store.state.token
    }
  },

  watch: {},

  created() {
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：state 改变前的值为 ", prevState);
      console.log("主应用观察者：state 改变后的值为 ", state);
      this.$store.commit('setState', state)
      // this.globalState = state
    });
  },

  mounted() {

    // setTimeout(() => {
    // actions.setGlobalState({ token:'' })
    // },3000)
    // await this.loadMicroApps();
  },

  methods: {
    handleclick() {
      actions.setGlobalState({ token: 'mainToken' })
      // this.$store.commit('setToken', 'mainToken')
    },
    async loadMicroApps() {
      const apps = [
        {
          name: 'b-child',
          entry: '//localhost:8022',
          container: '#microContainer',
          props: {
            parentStore: this.$store,
            msg: '我是父应用传过来的值,传递给B应用'
          }
        },
        {
          name: 'c-child',
          entry: 'http://localhost:8033',
          container: '#microContainer',
          props: {
            parentStore: this.$store,
            msg: '我是父应用传过来的值，传递给C应用'
          }
        }
      ]

      for await (const item of apps) {
        this.microApp = loadMicroApp(item)
        await this.microApp.mountPromise
      }
      await this.microApp.unmount()
      this.$forceUpdate() // 解决视图不更新的问题
    }
  }
}
</script>
<style lang="scss">
#app {
  height: 200px;
  text-align: center;
  header {
    margin: 20px 0;
    a {
      margin: 0 20px;
    }
  }
}
</style>
