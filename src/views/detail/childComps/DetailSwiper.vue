<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="bannerSwiper">
    <template v-for="item of bannerImages">
      <swiper-slide>
        <a href="">
          <img :src="item" alt="banners">
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
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      bannerImages: {
        type: Array,
        default() {
          return []
        }
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
            delay: 2000,
            disableOnInteraction: false
          },
        }
      }
    },
  }
</script>

<style scoped>
  .bannerSwiper {
    height: 300px;
  }
  img {
    width: 100%;
    height: auto;
  }
</style>