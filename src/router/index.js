import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/pages/home/index.vue'
import mine from '../components/pages/mine/index.vue'
import detailbox from '../components/pages/detailbox/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/detailbox',
      name: 'detailbox',
      component: detailbox
    }
  ]
})
