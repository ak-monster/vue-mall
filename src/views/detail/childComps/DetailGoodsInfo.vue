<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detailGoodsInfo">
    <div class="infoDesc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="infoKey">{{detailInfo.detailImage[0].key}}</div>
    <div class="images">
      <img v-for="(image, index) of detailInfo.detailImage[0].list" :key="index" :src="image" @load="imagesLoad" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailImages",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      imagesLoad() {
        if (++this.counter === this.imagesLength) {
          this.$emit('images-load')
        }
      }
    },
    watch: {
      detailInfo() {
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .detailGoodsInfo {
    padding: 20px 0;
    border-bottom: 5px solid rgba(0, 0, 0, .1);
  }
  .infoDesc {
    padding: 0 15px;
  }
  .infoDesc .start, .infoDesc .end{
    position: relative;
    width: 90px;
    height: 1px;
    background-color: #333;
  }
  .infoDesc .start {
    float: left;
  }
  .infoDesc .end {
    float: right;
  }
  .infoDesc .start::before, .infoDesc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .infoDesc .end::after {
    right: 0;
  }
  .infoDesc .desc {
    padding: 15px 0;
    font-size: 14px;
  }
  .infoKey {
    font-size: 15px;
    margin: 10px 15px;
  }
  .images img{
    width: 100%;
    height: auto;
  }
</style>