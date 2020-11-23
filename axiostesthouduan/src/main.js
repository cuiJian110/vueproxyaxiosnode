// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import loading from "@/components/loading.js";
Vue.use(loading);

import myupload from "@/components/myupload.js";
Vue.use(myupload);

// tips
import tips from "@/components/tips/tips.js";
// Vue.prototype.$mt = tips;
Vue.use(tips);

import confirm from "@/components/confirm/confirm.js"
Vue.use(confirm)
Vue.config.productionTip = false
// console.log(window)
// let storageObj = {};
import "./utils/index";

Vue.mixin({
  beforeCreate:function() {
    Vue.util.defineReactive(this,"$storage",window.localStorage)
  }
})
window.addEventListener("storage",function(e) {
  console.log("bianle")
  Vue.$forceUpdate();
})
const test = {
  testa: "tttaaa",
  currentT: "test currentt"
}
Vue.mixin({
  beforeCreate: function() {
    Vue.util.defineReactive(this,"$test",test)
  }
})
// console.dir(Vue)
window.addEventListener("load",() => {
  console.log(location.hash)
})
window.addEventListener("hashchange",() => {
  console.log(location.hash)
})

import store from "@/store/store2.js";
Vue.use(store);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
