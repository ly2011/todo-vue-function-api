import Vue from 'vue'
import { plugin } from 'vue-function-api'
import iView from 'iview'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import App from './App.vue'
import router from './router'
import { checkLogin } from './store'

checkLogin()

Vue.use(plugin)
Vue.use(iView)
dayjs.extend(relativeTime)

Vue.config.productionTip = false

Vue.filter('fromNow', date => {
  return dayjs(date).fromNow()
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
