<template>
  <div id="cartList">
    <scroll class="wrapper" ref="scroll">
      <cart-list-item v-for="(item, index) of cartList" :key="index" :item="item"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";
  import CartListItem from "@/views/shopcart/childComps/CartListItem";

  export default {
    name: "cartList",
    components: {
      Scroll,
      CartListItem
    },
    props: {
      cartList: {
        type: Array,
        default: []
      }
    },
    activated() {
      this.$refs.scroll.refreshScroll()
    }
  }
</script>

<style scoped>
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 93px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
</style>