<template>
<div>
  <button @click="handlePost1">post1</button>
  <button @click="handlePost2">post2</button>
  <button @click="handlePost3">post3</button>
  <input type="file" @change="handleChange">
  <!-- <bbb></bbb> -->
  <button @click="handleShow">show</button>
  <div>
    <my-upload
    @commitFile="receiveFile"
    ></my-upload>
    <span>aaa</span>
  </div>
  <div>
    <button @click="showTips">tips show</button>
    <button @click="hideTips">tips hide</button>
  </div>
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
  created() {
    // api.student_selectCampStudentList({campId: "993",currentPage: 1,pageSize: 20}).then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    showTips() {
      // this.$mt.showTips();
      this.$mtShow("heheheh");
    },
    hideTips() {
      // this.$mt.hideTips();
      this.$mtHide();
    },
    receiveFile(e) {
      console.log(e)
    },
    handleShow() {
      this.$show();
    },
    handlePost1() {
      api.testPost1(this.reqData).then(res => {
        console.log(res)
      })
    },
    handlePost2() {
      api.testPost2(this.reqData,{
        onUploadProgress: progressEvent => {
          console.log("progressEvent",progressEvent)
          // let complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
          // self.uploadMessage = '上传 ' + complete
        }
      }).then(res => {
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
