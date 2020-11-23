<template>
<div>
  <div class="reff" ref="ref1">

  </div>
  <div @click="aaa($refs.ref1)">
    tipsshow
  </div>
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
    <span @click="aaa">aaa</span>
  </div>
  <div>
    <button @click="showTips">tips show</button>
    <button @click="hideTips">tips hide</button>
  </div>
  <div class="test">
    {{$test.currentT}}
    <div>
      <button @click="handleChangeTest">change$test</button>
    </div>
  </div>
  <div class="storage">
    {{$storage.currentName}}
    <button @click="handleName">name storage</button>
  </div>
  <div class="storage">
    {{$storage.age}}
    <button @click="handleAge">handleAge</button>
  </div>
  <div class="storage">
    {{testLocalStorage}}
    <button @click="handleLocalstorage">本地获取 localstorage</button>
  </div>
  <div id="aaa">

  </div>
</div>
</template>

<script>
import api from "@/apis/testPost/index.js"
export default {
  name: 'HelloWorld',
  computed: {
    testLocalStorage() {
      return localStorage.getItem("testLocalStorage")
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      reqData: {
        name: "zs"
      }
    }
  },
  created() {
    console.log(this)
    // api.student_selectCampStudentList({campId: "993",currentPage: 1,pageSize: 20}).then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    handleLocalstorage() {
      const random = Math.floor(Math.random()*10000)
      localStorage.setItem("testLocalStorage","testLocalStorage"+random)
      this.$forceUpdate();
    },
    handleAge() {
      const random = Math.floor(Math.random()*10000)
      this.$setItem("age",random,this)
      // this.$forceUpdate()
    },
    handleName() {
      const random = Math.floor(Math.random()*10000)
      this.$setItem("currentName","zzzsss"+random,this)
      // this.$forceUpdate()
    },
    handleChangeTest() {
      this.$test.currentT = "hhhh"
    },
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
