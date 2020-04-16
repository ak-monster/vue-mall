<template>
  <div id="mainTabBar">
    <tab-bar>
      <tab-bar-item v-for="icon of iconSets" :path="icon.url">
        <template v-slot:icon>
          <img :src="icon.iconPath" alt="">
        </template>
        <template v-slot:icon-active>
          <img :src="icon.iconActivePath" alt="">
        </template>
        <template v-slot:text>
          <p>{{icon.name}}</p>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import tabBar from "@/components/common/tabBar/TabBar";
  import tabBarItem from "@/components/common/tabBar/TabBarItem";

  export default {
    name: "mainTabBar",
    components: {
      tabBar,
      tabBarItem
    },
    data() {
      return {
        iconSets: [
          {
            url: '/home',
            iconPath: require('assets/img/tabbar/home.svg'),
            iconActivePath: require('assets/img/tabbar/home_active.svg'),
            name: '主页'
          },
          {
            url: '/category',
            iconPath: require('assets/img/tabbar/category.svg'),
            iconActivePath: require('assets/img/tabbar/category_active.svg'),
            name: '分类'
          },
          {
            url: '/shopcart',
            iconPath: require('assets/img/tabbar/shopcart.svg'),
            iconActivePath: require('assets/img/tabbar/shopcart_active.svg'),
            name: '购物车'
          },
          {
            url: '/profile',
            iconPath: require('assets/img/tabbar/profile.svg'),
            iconActivePath: require('assets/img/tabbar/profile_active.svg'),
            name: '我的'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #mainTabBar {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>