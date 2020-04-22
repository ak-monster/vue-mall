<template>
  <div class="goods">
    <goods-list-item v-for="item of goods" :goods-item="item"/>  <!--item就直接获取到数组单个元素-->
  </div>
</template>

<script>
  import GoodsListItem from "@/components/content/goods/GoodsListItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .goods {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>