<template>
  <div id="recommend">
    <div class="item" v-for="(item, index) of itemRecommend" :key="index">
      <img class="image" :src="item.image" alt="">
      <div class="font">
        <p class="title">{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <span class="like">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailRecommend",
    props: {
      itemRecommend: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    // 尝试解决滑动问题——没成功
    // methods: {
    //   imagesLoad() {
    //     if (++this.counter === 24) {
    //       console.log(this.counter);
    //       console.log(this.imagesLength);
    //       console.log(this.itemRecommend.length);
    //       this.$emit('imagesLoad')
    //     }
    //   }
    // },
    // watch: {
    //   recommendImages() {
    //     console.log(this.imagesLength);
    //     console.log(this.itemRecommend.length);
    //     this.imagesLength = this.itemRecommend.length
    //   }
    // }
  }
</script>

<style scoped>
  #recommend {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .item {
    width: 48%;
    padding-bottom: 8px;
  }
  .image {
    width: 100%;
    border-radius: 5px;
  }
  .font {
    font-size: 12px;
    text-align: center;
  }
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 3px 0;
  }
  .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .like {
    position: relative;
  }
  .like::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>