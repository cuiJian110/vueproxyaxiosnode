<template>
<div>
  <button @click="handlePost1">post1</button>
  <button @click="handlePost2">post2</button>
  <button @click="handlePost3">post3</button>
  <input type="file" @change="handleChange">
</div>
</template>

<script>
import api from "@/apis/testPost/index.js"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      reqData: {
        name: "zs"
      }
    }
  },
  methods: {
    handlePost1() {
      api.testPost1(this.reqData).then(res => {
        console.log(res)
      })
    },
    handlePost2() {
      api.testPost2(this.reqData).then(res => {
        console.log(res)
      })
    },
    handlePost3() {
      api.testPost3(this.reqData).then(res => {
        console.log(res)
      })
    },
    handleChange(e) {
      console.log(e.target.files[0])
      this.reqData.file = e.target.files[0]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
