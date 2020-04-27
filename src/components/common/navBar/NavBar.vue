<template>
  <div class="nav-bar" :style="isBgColor">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      bgColor: {
        type: String,
        default: '#ff8198'
      }
    },
    computed: {
      isBgColor() {
        return {backgroundColor: this.bgColor}
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(100, 100, 100, 0.1);
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
    display: flex;
  }
</style>