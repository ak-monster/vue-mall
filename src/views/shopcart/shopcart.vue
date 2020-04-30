<template>
  <div id="shopCart">
<!--    导航-->
    <nav-bar>
      <template v-slot:center>
        <div class="navTitle">购物车({{length}})</div>
      </template>
    </nav-bar>
<!--    商品列表-->
    <cart-list :cart-list="list"/>
<!--    底部确认-->
    <cart-button-bar/>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import CartList from "@/views/shopcart/childComps/CartList";
  import CartButtonBar from "@/views/shopcart/childComps/CartButtonBar";

  import { mapGetters } from 'vuex'

  export default {
    name: "shopCart",
    components: {
      NavBar,
      CartList,
      CartButtonBar
    },
    computed: {
      // 此处有个弊端：在getters中已经有了计算属性，在这里又新建了一个计算属性函数来保存getters中的计算属性，重复。所以找到一种方法，直接将getters中的计算属性导入过来，而不用又弄一个函数来存放getters中传过来的计算属性，既有计算属性的特点又不用新建函数，这个方法就是辅助函数mapGetters
      // cartListLength() {
      //   return this.$store.getters.cartListLength
      // }
      // mapGetters有两种语法：一个是不起别名（数组的方式），一个是起别名（对象的方式）
      // ...mapGetters([
      //   'cartListLength'
      // ])
      ...mapGetters({
        length: 'cartListLength',
        list: 'cartList'
      })
    }
  }
</script>

<style scoped>
  #shopCart {
    overflow: hidden;
  }
  .navTitle {
    flex: 1;
    color: #fff;
    font-weight: 550;
  }
</style>