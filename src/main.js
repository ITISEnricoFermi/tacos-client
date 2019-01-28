import Vue from 'vue'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import App from './App.vue'
import VueMaterial from 'vue-material'

// Vue
import router from './router'
import store from './store'
import './registerServiceWorker'

// Vue Material
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import getUrl from './utils/getUrl'

export * from './utils/v1'

const env = process.env.NODE_ENV

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.use(new VueSocketIO({
  debug: false,
  connection: socketio(getUrl(env), {
    secure: true,
    rejectUnauthorized: false,
    transports: ['websocket', 'flashsocket', 'polling']
  })
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
