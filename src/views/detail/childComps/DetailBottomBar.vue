<template>
  <div id="bottomBar">
    <div class="bar-item left">
      <div class="left-item sprite">
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div class="left-item sprite">
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div class="left-item sprite">
        <i class="icon collection"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item right">
      <div class="cart right-item" @click="addToCart">加入购物车</div>
      <div class="buy right-item">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart() {
        console.log(123);
        this.$emit('add-to-cart')
      }
    }
  }
</script>

<style scoped>
  #bottomBar {
    position: fixed;
    height: 58px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    text-align: center;
  }
  .bar-item {
    flex: 1;
    display: flex;
    font-size: 13px;
  }
  .left-item {
    flex: 1;
  }
  .right-item {
    flex: 1;
  }
  .left {
    background-color: #fff;
  }
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .service {
    background-position: 0 -53px;
  }
  .shop {
    background-position: 0 -98px;
  }
  .collection {
    background-position: 0 0;
  }
  .cart {
    background-color: #ffe817;
  }
  .buy {
    background-color: #ff5777;
  }
  .cart, .buy {
    font-size: 15px;
    line-height: 58px;
  }

</style>