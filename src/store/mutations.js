import {
  ADD_PRODUCT_COUNT,
  ADD_TO_CART,
  SELECT_ALL,
  SELECT_NO
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
    state.cartList.forEach(item => item.checked = false)
    console.log(state.cartList);
  },
  [SELECT_NO](state) {
    console.log('到我这里了吗');
    state.cartList.forEach(item => item.checked = true)
  }
}