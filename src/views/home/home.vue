<template>
  <div id="home">
    <nav-bar class="navbar">
      <template slot="center">
        <div class="navTitle">购物街</div>
      </template>
    </nav-bar>
<!--    吸顶效果tabControl——这样设置的原因：规避BS插件造成的无法吸顶并且到达顶部后脱流-->
    <tab-control
        @tabClick="tabClick"
        ref="tabControlUp"
        class="tabControl"
        v-show="isFixed"/>
<!--    滚动页面-->
    <scroll class="wrapper"
            ref="scroll"
            :probe-type="3"
            @scroll="scrollPosition"
            :pull-up-load="true"
            @pullingUp="loadMore"
            @tabControlFixed="tabControlFixed" :goods="goods">
      <home-swiper
          class="homeSwiper"
          :banner-img="banner"
          @bannerImgLoad.once="bannerImgLoad"/>
      <recommend-view :recommendations="recommend"/>
      <feature-view/>
      <tab-control
          class="tabControl"
          @tabClick="tabClick"
          ref="tabControlNormal"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isBackTopShow"/>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import TabControl from "@/components/content/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/content/backTop/BackTop";

  import homeSwiper from "@/views/home/childComps/homeSwiper"
  import recommendView from "@/views/home/childComps/RecommendView"
  import featureView from "@/views/home/childComps/featureView";

  import { getHomeMultidata, getHomeGoods } from "@/network/home";
  import { debounce } from "@/components/common/utils/utils";

  export default {
    name: "home",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
      homeSwiper,
      recommendView,
      featureView,
    },
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          "pop": {page: 0, list: [], saveY: {isClick: true, y: 0}},
          "new": {page: 0, list: [], saveY: {isClick: false, y: 0}},
          "sell": {page: 0, list: [], saveY: {isClick: false, y: 0}}
        },
        currentType: 'pop', //默认展示的栏目
        isBackTopShow: false,
        tabOffsetTop: 0,
        isFixed: false,
        saveY: 0
      }
    },

    created() {
      /*
      * 发出网络请求
      * */
      // 将这里的代码再次分割，把实现方法移到methods中，这里只调用
      // 1. 请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      // 监听GoodsListItem中的图片加载完成
      // 作防抖：
      const refresh = debounce(this.$refs.scroll.refreshScroll, 50)
      this.$bus.$on('itemImgLoad', () => {
        refresh()
      })
      // 不作防抖：每次在goodsListItem中刷新30张图片，每刷新一次就会refresh一次，请求次数过多
      // this.$bus.$on('itemImgLoad', () => {
      //   this.$refs.scroll.refreshScroll()
      // })
    },
    // destroyed() {
    //   console.log('已销毁home页面');
    // },
    // 保留原来的浏览位置
    activated() {
      //调试分类栏切换并滑动导致home滑动失效的bug
      console.log('回到y坐标' + this.saveY);
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },

    methods: {
      /*
       * 这里是事件监听相关方法
       */
      // 防抖:单独封装到utils中
      // debounce(func, delay) {
      //   let timer = null;
      //   return function () {
      //     let context = this
      //     let args = arguments
      //     if (timer) clearTimeout(timer)
      //     timer = setTimeout(() => {
      //       func.apply(context, args)
      //     }, delay)
      //   }
      // },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControlNormal.currentIndex = index;
        this.$refs.tabControlUp.currentIndex = index;

        // 记录三个页面的位置，当第一次点击时，回到该页面的顶部；不是第一次点击，则回到上次停留的位置
// 失败：原因——没能记录每个选项的自己的y
        // let isClick = this.goods[this.currentType].saveY.isClick
        // if (isClick) {
        //   this.$refs.scroll.scrollTo(0, y, 0)
        // } else {
        //   this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 0)
        //   this.goods[this.currentType].saveY.isClick = true
        // }
        // let y = this.goods[this.currentType].saveY.y = this.$refs.scroll.getScrollY()
        // console.log(isClick);
        // console.log(y);
      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 2000)
      },
      scrollPosition(pos) {
        // 判断backTop是否显示
        this.isBackTopShow = pos.y < -1000
      },
      tabControlFixed(pos) {
        // 判断是否吸顶
        // console.log(pos.y);
        this.isFixed = pos.y < -this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      bannerImgLoad() {
        this.tabOffsetTop = this.$refs.tabControlNormal.$el.offsetTop;
      },

      /*
      * 这里是网络请求相关方法
      */
      //注意：这里两个getHomeMultidata是两个不同的函数，外层的是methods中定义的；内层是home.js中传过来的
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list); //展开运算符
          this.goods[type].page += 1;

          this.$refs.scroll.finishPullUp()   //scroll.vue中封装了方法finishPullUp
        })
      },
    }
  }
</script>

<!--scoped的含义是限制css的作用域在此处-->
<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .navbar {
    position: relative;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
  }
  .navTitle {
    flex: 1;
    color: #fff;
    font-weight: 500;
  }

  /*教训：一直不知道为什么wrapper整体下移了44px，原来是这里曾经设置过，所以调试一定要仔细*/
  /*.homeSwiper {*/
  /*  margin-top: 44px;*/
  /*}*/

  /*吸顶失效*/
  /*.tab-control {*/
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*  z-index: 100;*/
  /*}*/
  /*重新设置tabControl(这是吸顶效果的tabControl)*/
  .tabControl {
    position: relative;
    z-index: 10;
  }

  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

</style>