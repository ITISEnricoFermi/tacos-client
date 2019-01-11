import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueMaterial from 'vue-material'

// Vue
import router from './router'
import store from './store'
import './registerServiceWorker'

// Vue Material
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

export const v1 = axios.create({
  baseURL: 'http://localhost:3000/api/v1/'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
