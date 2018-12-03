import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.view/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
    // children: [{
    //   path: '',
    //   name: '',
    //   component: undefined
    // }]
  }, {
    path: '/devices',
    name: 'devices',
    component: Home
  }]
})
