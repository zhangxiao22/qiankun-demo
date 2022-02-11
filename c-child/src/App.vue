<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <div class="test-class"></div>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
#app {
  border:1px solid blue;
}
</style>
