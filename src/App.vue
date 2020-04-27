<template>
  <div id="app">
    <main-tab-bar class="mainTabBar"></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import mainTabBar from "@/components/content/mainTabBar";

  export default {
    name: 'App',
    components: {
      mainTabBar,
    },
  }
</script>

<style>
  @import "assets/css/base.css";
  .mainTabBar {
    z-index: 10;
  }
</style>
