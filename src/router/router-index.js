import Vue from "vue";
import VueRouter from "vue-router";

// 4.导入路由页
let home = () => import('views/home/home')
let category = () => import('views/category/category')
let shopcart = () => import('views/shopcart/shopcart')
let profile = () => import('views/profile/profile')
let Detail = () => import('views/detail/Detail')

// 解决多次点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 1.安装插件
Vue.use(VueRouter)

// 3.创建路由组件
const routes = [
  {
    path: '',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/shopcart',
    component: shopcart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

// 2.创建实例
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

