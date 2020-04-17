<template>
  <swiper ref="mySwiper" :options="swiperOptions">
      <template v-for="(item,index) of bannerImg">    <!--这里用template来分组！！！！-->
        <swiper-slide>
          <a :href="item.link">
            <img :src="item.image" alt="banners">
          </a>
        </swiper-slide>
      </template>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "homeSwiper",  //这里不要用swiper作名字，否则报错
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      bannerImg: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: true
          }
        }
      }
    },
  }
</script>

<style scoped>
  /*图片高度设置为auto就随宽度变化*/
  img {
    width: 100%;
    height: auto
  }
</style>