import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path: "/page1", component: () => import("@/pages/page1.vue")},
    {path: "/page2", component: () => import("@/pages/page2.vue")},
    {path: "/page3", component: () => import("@/pages/page3.vue")}
  ]
})
