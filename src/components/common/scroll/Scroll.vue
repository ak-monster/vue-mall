<template>
  <div class="wrapper" ref="wrapper">
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
      //返回顶部
      scrollTo(x, y, time=600) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refreshScroll() {
        // console.log('刷新测试');
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
