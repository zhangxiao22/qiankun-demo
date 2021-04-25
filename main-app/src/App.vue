<!--
 * @Author: Hzh
 * @Date: 2021-04-23 09:57:53
 * @LastEditTime: 2021-04-25 14:14:21
 * @LastEditors: Hzh
 * @Description:测试微前端
-->
<template>
  <div id="app">
    <header>
      <router-link to="/about">主应用的page页面</router-link>
      <router-link to="/b-child">子应用B</router-link>
      <router-link to="/c-child">子应用C</router-link>
      <router-link to="/">回到主应用</router-link>
    </header>
    <div style="margin:10px">
      <button @click="loadMicroApps">手动加载子应用</button>
    </div>
    <!-- id为appContainer就是放置子应用的容器 -->
    <div id="appContainer"></div>
    <div
      style="margin: 10px"
      v-for="source in $store.state.sources"
      :key="source.name"
    >
      {{ source.name }}
    </div>
    <!-- 用来获取子应用的资源，不做展示 -->
    <div style="display: none" id="microContainer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'
import { mapState } from 'vuex'
export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      microApp: null
    }
  },

  computed: {
    ...mapState({
      sources: state => state.sources
    })
  },

  watch: {},

  created () {},

  async mounted () {
    // await this.loadMicroApps();
  },

  methods: {
    async loadMicroApps () {
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
  height: 100vh;
  text-align: center;
  position: relative;
}
header > a {
  margin: 0 20px;
}
.appContainer {
  background: #ccc;
  padding: 20px;
}
</style>
