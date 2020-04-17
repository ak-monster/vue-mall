<template>
  <div id="home">
    <nav-bar class="navbar">
      <template slot="center">
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper class="homeSwiper" :banner-img="banner"></home-swiper>
    <recommend-view :recommendations="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import homeSwiper from "@/views/home/childComps/homeSwiper"
  import recommendView from "@/views/home/childComps/RecommendView"
  import featureView from "@/views/home/childComps/featureView";

  import TabControl from "@/components/content/TabControl";

  import {getHomeMultidata} from "@/network/home";

  export default {
    name: "home",
    components: {
      NavBar,
      homeSwiper,
      recommendView,
      featureView,
      TabControl
    },
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    created() {
      // 1. 请求多个数据
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .navbar {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
  }

  .homeSwiper {
    margin-top: 44px;
  }

  .tab-control {
    position: sticky;
    top: 44px
  }
</style>