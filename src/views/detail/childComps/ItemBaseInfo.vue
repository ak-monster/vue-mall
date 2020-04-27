<template>
  <div id="itemInfo" v-if="Object.keys(goods).length !== 0">  <!--这里加v-if的原因：vue的渲染机制问题，不加不影响渲染但是控制台报错（在渲染时，还没获取到数组）,这里强制要求获取到数据后才渲染-->
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span class="columnsItem">{{goods.columns[0]}}</span>
      <span class="columnsItem">{{goods.columns[1]}}</span>
      <span class="columnsItem">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span class="servicesItem" v-for="index of goods.services.length-1">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ItemInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #itemInfo {
    margin-top: 15px;
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .price {
    margin-top: 10px;
  }
  .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }
  .o-price {
    font-size: 13px;
    color: #999;
    text-decoration: line-through;
    margin-left: 5px;
  }
  .discount {
    font-size: 12px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    padding: 2px 5px;
    position: relative;
    left: 5px;
    bottom: 8px
  }
  .columns {
    font-size: 13px;
    line-height: 30px;
    color: #999;
    border-bottom: 2px solid #f2f5f8;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  .services {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .servicesItem img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px
  }
</style>