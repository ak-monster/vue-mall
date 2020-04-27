<template>
  <div id="detail">
    <detail-nav-bar class="detailNavBar"/>
    <scroll class="wrapper"
            ref="scroll">
      <detail-swiper :banner-images="topImages"/>
      <item-base-info :goods="goods"/>
      <shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @images-load="imagesLoad"/>
      <detail-item-params :item-params="itemParams"/>
      <detail-comments :item-comments="itemComments"/>
      <detail-recommend :item-recommend="itemRecommend" @images-load="imagesLoad"/>
    </scroll>
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
      DetailRecommend
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
        itemRecommend: []
      }
    },
    created() {
      // 保存传入的iid
      this.iid = this.$route.params.iid
      // 根据iid请求详情页数据
      this.getGoodsDetail(this.iid)
      // 请求详情页的推荐数据
      this.getGoodsRecommend()
    },
    methods: {
      getGoodsDetail(iid) {
        getDetail(iid).then(res => {
          console.log(res);
          // 获取详情页的轮播图
          const data = res.result
          this.topImages = data.itemInfo.topImages

          // 获取详情页的商品头部信息（就是轮播图下面的标题、价格、折扣等等信息）
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

          // 获取商家信息
          this.shop = new Shop(data.shopInfo)

          // 获取详情页图片
          this.detailInfo = data.detailInfo

          // 获取商品参数
          this.itemParams = data.itemParams

          // 获取评论信息
          this.itemComments = data.rate.list[0]
        })
      },
      getGoodsRecommend() {
        getRecommend().then(res => {
          console.log(res.data.list);
          this.itemRecommend = res.data.list

        })
      },
      imagesLoad() {
        this.$refs.scroll.refreshScroll()
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
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>