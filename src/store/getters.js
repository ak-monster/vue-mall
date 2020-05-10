export default {
  cartListLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  priceCount(state) {
    return state.cartList.filter(item => item.checked === true).reduce((acc, cur) => acc + cur.price * cur.count, 0).toFixed(2)
  },
  selectCount(state) {
    return state.cartList.filter(item => item.checked === true).reduce((acc, cur) => acc + cur.count, 0)
  },
  isAllSelect(state, getters) {
    // 这里既可以传入getters，又可以再计算一次state.cartList.length。最好直接传入getters，方法一二是重新计算，方法三是直接传入getters
    // 方法一：先用filter过滤，在对过滤后的数组进行判断
    // return state.cartList.filter(item => item.checked === true).length === state.cartList.length && state.cartList.length !== 0
    // 方法二：直接用every判断，全真为真
    // return state.cartList.every(item => item.checked === true) && state.cartList.length !== 0
    // 方法三：直接用some判断，一真为真  注意方法一二中，在cartButtonBar是select，而在方法三中是！select
    // 说明：方法三性能应该要高一些，是短路判断；而方法一二都需要将整个数组都遍历一遍
    return state.cartList.some(item => item.checked === false) || getters.cartListLength === 0
    //注意这里犯了一个错误：getters.cartListLength不是函数，是一个对象的键。所以是getters.cartListLength === 0而不是getters.cartListLength() === 0等等奇怪的写法。在上述定义的时候，是用的简化写法。完整写法应该是 {cartListLength: function(state){return```}}
  },
  // selectAll(state) {
  //   return
  // }
}