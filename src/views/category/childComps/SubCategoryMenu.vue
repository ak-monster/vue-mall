<template>
  <div id="subCategory">
    <div class="item" v-for="item of subCategoryList.list">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubCategoryMenu",
    props: {
      subCategoryList: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
  #subCategory {
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
    padding: 20px 10px;
  }
  .item {
    width: 25%;
    margin: 5px 0;
  }
  .item:not(:nth-child(3n)) {
    margin-right: calc(25% / 2);
  }
  .item img {
    width: 100%;
  }
  .item .title {
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
  }
</style>