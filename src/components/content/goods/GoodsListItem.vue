<template>
  <div class="goodsItem">
    <img :src="goodsItem.show.img" alt="" @load="imgLoad">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemImgLoad');     //事件总线$bus
      }
    }
  }
</script>

<style scoped>
  .goodsItem {
    width: 45%;
    margin-bottom: 10px;
    position: relative;
  }
  .goodsItem img {
    width: 100%;
    border-radius: 5px;
  }
  .goodsInfo {
    font-size: 12px;
    text-align: center;
  }
  .goodsInfo p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 3px 0;
  }
  .goodsInfo .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goodsInfo .collect {
    position: relative;
  }
  .goodsInfo .collect::before {
    content: '';
    position: absolute;
    left: -15px;    /*这里很妙：若没有定位改变位置，那这个背景将会出现在数字的位置，背景本身宽度14px，left设置为-15px，就是把背景朝左移动15px，刚好还和数字保持1px的距离*/
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;  /*注意：size和position属性在简写的情况下，要么都写，要么都不写。都写的时候size前面需要加/*/
  }
</style>