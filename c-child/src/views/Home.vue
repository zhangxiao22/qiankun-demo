<template>
  <div class="home">
    我是子应用C home
    <HelloWorld msg="ccccc" />
  </div>
</template>

<script>
import HelloWorld from "../../../b-child/src/components/HelloWorld";

export default {
  name: 'Home',
  components: {
HelloWorld
  }
}
</script>
