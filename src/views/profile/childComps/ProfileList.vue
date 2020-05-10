<template>
  <div id="profileList">
    <div class="listItem" v-for="(item, index) of profileList" :key="index">
      <img :src="showIcon(item.icon)" alt="">
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileList",
    props: {
      profileList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      showIcon(icon) {
        return require('assets/img/profile/' + icon)
      }
    }
  }
</script>

<style scoped>
  #profileList {
    padding-left: 14px;
    font-size: 15px;
  }
  .listItem {
    display: flex;
    padding: 15px 0;
    line-height: 25px;
    position: relative;
    margin-left: 30px;
  }
  .listItem:not(:last-child) {
    border-bottom: #f2f2f2 solid 2px;
  }
  .listItem img {
    width: 25px;
    height: 25px;
    position: absolute;
    left: -30px;
  }
</style>