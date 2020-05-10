import Toast from "@/components/common/toast/Toast";

const obj = {}

// 默认会传入Vue
obj.install = function (Vue) {
  // 创建toast组件构造器
  const toastConstructor = Vue.extend(Toast)

  // new的方式，根据组件构造器创建组件对象（这样就可以在不同的地方创建不同的toast）
  const toast = new toastConstructor()

  // 将组件对象，手动挂载到某个元素上
  toast.$mount(document.createElement('div'))

  // toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj