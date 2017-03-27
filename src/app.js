// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import Element from 'element-ui'
import VueResource from 'vue-resource'
import router from './router'
import { sync } from 'vuex-router-sync'

Vue.use(Vuex)
Vue.use(Element)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

sync(store, router)

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

export { app, router, store }
