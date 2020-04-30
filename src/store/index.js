import Vue from 'vue';
import Vuex from 'vuex';
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

// 1.安装插件
Vue.use(Vuex)

// 2.创建store对象
const state = {
  cartList: []
};
const store = new Vuex.Store({
  state,
  getters,
  // 单独封装重构，不统一写在index里面
  // mutations: {
  //   // addCart(state, payload) {
  //   //   // 判断是否已经存在于购物车列表cartList中
  //   //   // let oldProduct = null;
  //   //   // for (let item of state.cartList) {
  //   //   //   if (item.iid === payload.iid) {
  //   //   //     oldProduct = item
  //   //   //   }
  //   //   // }
  //   //   // （替上）利用数组方法直接查找——find和filter的区别：find只返回第一个为true的值，而filter是返回所有为true的值的组成的数组
  //   //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)
  //   //   // 存在就直接给count属性+1，不存在就是添加进数组中
  //   //   if (oldProduct) {
  //   // 注意：此处有个小知识点——oldProduct是cartList数组中某个对象的引用，所以改oldProduct的count值会影响cartList中那个对象的count值，若是数值或者字符串，就不能改变cartList本身的值
  //   //     oldProduct.count += 1
  //   //   } else {
  //   //     payload.count = 1
  //   //     state.cartList.push(payload)
  //   //   }
  //   // }
  //   addProductCount(state, payload) {
  //     payload.count++
  //   },
  //   addToCart(state, payload) {
  //     payload.count = 1;
  //     state.cartList.push(payload)
  //   }
  // },
  // actions: {
  //   // 用解构方式解构context参数
  //   addCart({state, commit}, payload) {
  //     let oldProduct = state.cartList.find(item => item.iid === payload.iid)
  //     // 判断oldProduct是否存在于cartList中，存在就count+1，不存在就push
  //     if (oldProduct) {
  //       commit('addProductCount', oldProduct)
  //     } else {
  //       commit('addToCart', payload)
  //     }
  //   }
  // }
  actions,
  mutations
})

// 3.导出
export default store