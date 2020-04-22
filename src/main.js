import Vue from 'vue'
import App from './App'
import router from '@/router/router-index'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
