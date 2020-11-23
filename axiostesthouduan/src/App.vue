<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {vm} from "@/utils/index";
export default {
  name: 'App',
  mounted() {
    vm.$off("test")
    vm.$on("test",(payload) => {
      console.log("test",payload)
    })
  }
}
</script>

<style>
</style>
