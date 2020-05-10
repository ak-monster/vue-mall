import {
  ADD_PRODUCT_COUNT,
  ADD_TO_CART
} from "@/store/mutation-types";

export default {
  addCart({state, commit}, payload) {
    return new Promise((resolve, reject) => {
      // 判断该商品是否已经存在
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        commit(ADD_PRODUCT_COUNT, oldProduct)
        resolve('当前商品数量+1')
        // reject('123')
      } else {
        commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })
  },
}