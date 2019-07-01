import Vue from 'vue'
import { plugin } from 'vue-function-api'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
