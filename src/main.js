import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'

// Vue
import router from './router'
import store from './store'
import './registerServiceWorker'

// Vue Material
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

export * from './utils/v1'

Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
