<template>
  <div id="detail">
    <detail-nav-bar
        class="detailNavBar"
        @nav-click="navClick"
        ref="navBar"/>
    <scroll class="wrapper"
            ref="scroll"
            :probe-type="3"
            @scroll="scrollPosition">
      <detail-swiper :banner-images="topImages"/>
      <item-base-info :goods="goods"/>
      <shop-info :shop="shop"/>
      <detail-goods-info
          :detail-info="detailInfo"
          @images-load="imagesLoad"></detail-goods-info>
      <detail-item-params
          :item-params="itemParams"
          ref="params"/>
      <detail-comments
          :item-comments="itemComments"
          ref="comments"/>
      <detail-recommend
          :item-recommend="itemRecommend"
          @img-load="imagesLoad"
          ref="recommend"/>
    </scroll>
    <back-top
        @click.native="backTop"
        v-show="isBackTopShow"/>
    <detail-bottom-bar @add-to-cart="addToCart"/>
  </div>
</template>

<script>
  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
  import ItemBaseInfo from "@/views/detail/childComps/ItemBaseInfo";
  import shopInfo from "@/views/detail/childComps/shopInfo";
  import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
  import DetailItemParams from "@/views/detail/childComps/DetailItemParams";
  import DetailComments from "@/views/detail/childComps/DetailComments";
  import DetailRecommend from "@/views/detail/childComps/DetailRecommend";
  import BackTop from "@/components/content/backTop/BackTop";
  import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

  import { getDetail, getRecommend, Goods, Shop } from "@/network/detail";
  import { debounce } from "@/components/common/utils/utils";

  import Scroll from "@/components/common/scroll/Scroll";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      ItemBaseInfo,
      shopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailItemParams,
      DetailComments,
      DetailRecommend,
      BackTop,
      DetailBottomBar
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        itemParams: {},
        itemComments: {},
        itemRecommend: [],
        isBackTopShow: false,
        tabOffsetTop: [],
        // 记录滚动的Y位置
        scrollY: 0
      }
    },
    created() {
      // 保存传入的iid
      console.log(this.$route);
      this.iid = this.$route.params.iid
      // 根据iid请求详情页数据
      this.getGoodsDetail(this.iid)
      // 请求详情页的推荐数据
      this.getGoodsRecommend()
    },
    watch: {
      scrollY() {
        // 监听滚动
        let y = this.scrollY
        if (y > this.tabOffsetTop[1]) {
          this.$refs.navBar.currentIndex = 0
        }
        if (y <= this.tabOffsetTop[1]) {
          this.$refs.navBar.currentIndex = 1
        }
        if (y <= this.tabOffsetTop[2]) {
          this.$refs.navBar.currentIndex = 2
        }
        if (y <= this.tabOffsetTop[3]) {
          this.$refs.navBar.currentIndex = 3
        }
        // 为什么不能运行： 在case后慎用判断？
        // let y = this.scrollY;
        // switch (y) {
        //   case (y > this.tabOffsetTop[0]):
        //     this.$refs.navBar.currentIndex = 0;
        //     break;
        //   case (y <= this.tabOffsetTop[1]):
        //     this.$refs.navBar.currentIndex = 1;
        //     break;
        //   case (y <= this.tabOffsetTop[2]):
        //     this.$refs.navBar.currentIndex = 2;
        //     break;
        //   case (y <= this.tabOffsetTop[3]):
        //     this.$refs.navBar.currnetIndex = 3;
        //     break
        // }
      }
    },
    methods: {
      // 数据获取
      getGoodsDetail(iid) {
        getDetail(iid).then(res => {
          console.log(res);
          // 获取详情页的轮播图
          const data = res.result
          this.topImages = data.itemInfo.topImages && data.itemInfo.topImages

          // 获取详情页的商品头部信息（就是轮播图下面的标题、价格、折扣等等信息）
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

          // 获取商家信息
          this.shop = new Shop(data.shopInfo)

          // 获取详情页图片
          this.detailInfo = data.detailInfo && data.detailInfo

          // 获取商品参数
          this.itemParams = data.itemParams && data.itemParams

          // 获取评论信息
          this.itemComments = data.rate.list && data.rate.list[0]

        })
      },
      // 获取评价信息
      getGoodsRecommend() {
        getRecommend().then(res => {
          // console.log(res.data.list);
          this.itemRecommend = res.data.list
        })
      },
      // 图片异步加载后refresh
      imagesLoad() {
        // console.log('调用了refresh');
        this.$refs.scroll.refreshScroll()

        // 一定要在每次图片都已经刷新加载完成后才能计算高度（这和滚动高度获取的原理相似）
        // 加防抖
        debounce(() => {
          this.tabOffsetTop.push(0)
          this.tabOffsetTop.push(-this.$refs.params.$el.offsetTop)
          this.tabOffsetTop.push(-this.$refs.comments.$el.offsetTop)
          this.tabOffsetTop.push(-this.$refs.recommend.$el.offsetTop)
        }, 100)()
      },
      // navbar标签定位
      navClick(index) {
        this.$refs.scroll.scrollTo(0, this.tabOffsetTop[index], 500)
      },
      // 返回顶部
      backTop() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      // 滑动位置检测
      scrollPosition(pos) {
        // console.log(pos);
        this.scrollY = pos.y
        this.isBackTopShow = pos.y < -1000
      },
      addToCart() {
        // 获取购物车需要展示的商品信息
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        product.count = 0;

        // 将商品添加到购物车里
        // this.$store.commit('addCart', product)
        this.$store.dispatch('addCart', product)
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
  }
  .detailNavBar {
    position: relative;
    z-index: 10;
  }
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 58px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>