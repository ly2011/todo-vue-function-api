import Vue from 'vue'
import Router from 'vue-router'
import AsyncLoader from '@/utils/async-loader'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AsyncLoader('views/index/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: AsyncLoader('views/login/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: AsyncLoader('views/About.vue')
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
