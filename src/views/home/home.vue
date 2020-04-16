<template>
  <div id="home">
    <nav-bar>
      <template slot="center">
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import {getHomeMultidata} from "@/network/home";

  export default {
    name: "home",
    components: {
      NavBar
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
        console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>

</style>