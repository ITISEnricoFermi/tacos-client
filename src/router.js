import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/routes/root.route/root'
import Station from '@/views/station.view/station'
import Devices from '@/views/devices.view/devices'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: Root,
    children: [{
      path: '/',
      name: 'station',
      component: Station,
      meta: {
        title: 'Station'
      }
    }, {
      path: 'devices',
      name: 'devices',
      component: Devices,
      meta: {
        title: 'Devices'
      }
    }]
  }]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
