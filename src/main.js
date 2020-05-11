import Vue from 'vue'
import App from './App'
import router from '@/router/router-index'
import store from '@/store/index'

import toast from 'components/common/toast/index'

import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

// 解决移动端300ms的延迟
FastClick.attach(document.body)
document.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, {
  passive: false
});

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('@/assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
