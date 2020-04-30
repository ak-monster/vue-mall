import {
  ADD_PRODUCT_COUNT,
  ADD_TO_CART
} from "@/store/mutation-types";

export default {
  addCart({state, commit}, payload) {
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      commit(ADD_PRODUCT_COUNT, oldProduct)
    } else {
      commit(ADD_TO_CART, payload)
    }
  },
}