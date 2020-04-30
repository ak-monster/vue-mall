<template>
  <div id="cartListItem">
    <div class="item-select" @click="selectBtn">
      <check-button  :is-checked="item.checked"/>
    </div>
    <div class="item-img"><img class="image" :src="item.image" alt=""></div>
    <div class="item-info">
      <div class="title">{{item.title}}</div>
      <div class="desc">{{item.desc}}</div>
      <div class="bottom">
        <div class="price">￥{{item.price}}</div>
        <div class="count">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";

  export default {
    name: "CartListItem",
    components: {
      CheckButton
    },
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    methods: {
      selectBtn() {
        this.item.checked = !this.item.checked
      }
    }
  }
</script>

<style scoped>
  #cartListItem {
    width: 100%;
    padding: 5px;
    display: flex;
    border-bottom: 2px solid rgba(0, 0, 0, .2);
  }
  .item-select {
    display: flex;
    align-items: center;
  }
  .item-img {
    padding: 5px;
  }
  .item-img .image {
    width: 80px;
    height: 120px;
    border-radius: 8px;
  }
  .item-info {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: center;
  }
  .item-info .title, .item-info .desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-info .title {
    font-size: 17px;
  }
  .item-info .desc {
    font-size: 14px;
  }
  .bottom {
    width: 100%;
  }
  .bottom .price {
    color: var(--color-high-text);
    float: left;
  }
  .bottom .count {
    float: right;
  }
</style>