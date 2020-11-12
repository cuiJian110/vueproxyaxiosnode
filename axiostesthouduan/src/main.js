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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
