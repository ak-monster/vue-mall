import {
  ADD_PRODUCT_COUNT,
  ADD_TO_CART,
  SELECT_ALL,
  SELECT_NO,
  ITEM_DECREASE,
  ITEM_INCREASE, ITEM_DELETE
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
    state.cartList.forEach(item => item.checked = true)
    console.log(state.cartList);
  },
  [SELECT_NO](state) {
    state.cartList.forEach(item => item.checked = false)
    console.log('全部不选中');
  },
  [ITEM_DECREASE](state, iid) {
    const currentProduct = state.cartList.find(item => item.iid === iid)
    currentProduct.count > 0? currentProduct.count-- : currentProduct.count = 0
  },
  [ITEM_INCREASE](state, iid) {
    const currentProduct = state.cartList.find(item => item.iid === iid)
    currentProduct.count++
  },
  [ITEM_DELETE](state, iid) {
    const currentIndex = state.cartList.findIndex(item => item.iid === iid)
    state.cartList.splice(currentIndex, 1)
  }
}