/**
 * @fileoverview main
 * @author burning (www.cafeinit.com)
 * @version 2017.07.31
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import CIUIBase from 'ci-ui-base'
import CIDialog from 'ci-dialog'

Vue.use(VueRouter)
Vue.use(CIUIBase.plugin)
Vue.use(CIDialog.plugin)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Default',
      path: '/',
      component: resolve => require(['./views/Index.vue'], resolve)
    },

    {
      name: 'Index',
      path: '/index',
      component: resolve => require(['./views/Index.vue'], resolve)
    },

    {
      name: 'Tabs',
      path: '/tabs',
      component: resolve => require(['./views/Tabs.vue'], resolve)
    }
  ]
})

var app = new Vue({
  router: router
}).$mount('#app')
