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
        <div class="itemDelete" @click="itemDelete">删除</div>
        <div class="count">
          <span class="itemButton" @click="itemDecrease">-</span>
          <span class="itemCount">{{item.count}}</span>
          <span class="itemButton" @click="itemIncrease">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";

  import {ITEM_DECREASE, ITEM_DELETE, ITEM_INCREASE} from "@/store/mutation-types";

  export default {
    name: "CartListItem",
    components: {
      CheckButton,
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
      },
      itemDecrease() {
        if (this.item.count === 1) {
          this.$toast.show('客官,宝贝不能再少啦')
        } else {
          this.$store.commit(ITEM_DECREASE, this.item.iid)
        }
      },
      itemIncrease() {
        this.$store.commit(ITEM_INCREASE, this.item.iid)
      },
      itemDelete() {
        this.$store.commit(ITEM_DELETE, this.item.iid)
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
    height: 20px;
  }
  .bottom .price {
    color: var(--color-high-text);
    float: left;
    line-height: 20px;
  }
  .bottom .count {
    float: right;
    margin-right: 18px;
  }
  .count .itemButton, .count .itemCount {
    border: 1px solid rgba(0, 0, 0, .2);
    display: inline-block;
    width: 35px;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
  }
  .itemDelete {
    float: right;
    font-size: 8px;
    height: 20px;
    line-height: 22px;
    color: var(--color-high-text);
  }
</style>