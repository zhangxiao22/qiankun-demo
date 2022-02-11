<template>
  <div id="app">
    子项目b 
    {{globalState}}
    <button @click="setData">B（token）</button>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view />
  </div>
</template>

<script>
import actions from '@/actions'

export default {  
  name: 'App',
  components: {},
  props: {},
  data() {
    return {
      
    }
  },

  computed: {
   globalState() {
     return this.$store.state.globalState
   }
  },

  watch: {},

  created() {
   
   
  },

  mounted() {
   actions.onGlobalStateChange((state) => {
     
    //  this.globalState = state
      console.log('state change>>>>>',state)
      this.$store.commit('setGlobalState',state)
    });
  },

  methods: {
    setData() {
      let data = {token:'bbbtoken'}
      this.$store.commit('setGlobalState', data)
      actions.setGlobalState(data)
    }
  }
}
</script>
<style scoped lang="scss">
#app {
  border:1px solid red;
}
</style>
