<template>
  <div>
    <nav-bar bg-color="#fafafa">
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" alt="" class="back" @click="backClick">
      </template>
      <template v-slot:center>
        <div class="title" v-for="(title, index) of titles">
          <span @click="titleClick(index)" :class="{active: currentIndex === index}">{{title}}</span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.back()
        // 或者
        // this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .title {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .back {
    margin-top: 11px;
  }
</style>