<template>
  <div class="recommend">
    <div class="recommendItem" v-for="item of recommendations">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommendations: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .recommend {
    margin-top: 5px;
    display: flex;
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 8px solid #eee;
  }
  /*这里调试了很久，最右边的图片老是莫名其妙的溢出，重新关掉浏览器手机布局，缩放一下，回来就正常了*/
  .recommendItem {
    flex: 1;
  }
  img {
    width: 90%;
    height: auto;
  }
  p{
    margin-top: 5px;
    font-size: 14px;
  }
</style>