<!--尝试分离scroll组件，但是依然没有解决bug-->

<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullUp from '@better-scroll/pull-up'
  BScroll.use(PullUp)

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      categoryData: {
        type: Array,
        default() {
          return []
        }
      },
      categoryList: {
        type: Array,
        default() {
          return []
        }
      },
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
      
      console.log(this.scroll);
      // 2.监听滚动位置
      this.scroll.on('scroll', pos => {
        this.$emit('scroll', pos);
        this.$emit('tabControlFixed', pos)
      });

      // 3.监听scroll滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          console.log('监听滚动到底部');
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      //滚动到对应位置
      scrollTo(x, y, time=600) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      // 识别上拉加载动作结束
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      // 刷新数据
      refreshScroll() {
        console.log('刷新数据');
        this.scroll && this.scroll.refresh()
      },
      // 记录滚动的Y轴位置
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    },
    watch: {
      categoryData() {
        setTimeout(this.refreshScroll, 20)
      },
      categoryList() {
        setTimeout(this.refreshScroll, 20)
      },
      goods() {
        setTimeout(this.refreshScroll, 20)
      }
    }
  }
</script>

<style scoped>

</style>
