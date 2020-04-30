import {
  ADD_PRODUCT_COUNT,
  ADD_TO_CART,
  SELECT_ALL
} from "@/store/mutation-types";

export default {
  [ADD_PRODUCT_COUNT](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.count++;
    payload.checked = true
    state.cartList.push(payload)
  },
  [SELECT_ALL](state) {
    state.cartList = state.cartList.map(item => item.checked === true)
  }
}