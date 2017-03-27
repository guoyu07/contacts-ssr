import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const homeView = () => System.import('./Home.vue')
const groupView = () => System.import('./group.vue')
const moreView = () => System.import('./more.vue')

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: homeView },
    { path: '/group', component: groupView },
    { path: '/more', component: moreView }
  ]
})
