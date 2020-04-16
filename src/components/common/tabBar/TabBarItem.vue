<template>
  <div class="item" @click="btn">
    <slot v-if="!isColor" name="icon"></slot>
    <slot v-else name="icon-active"></slot>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    props: {
      path: {
        type: String,
        },
      textColor: {
        type: String,
        default: '#ff5777'
      }
    },
    methods: {
      btn() {
        this.$router.push(this.path);
      }
    },
    computed: {
      isColor() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isColor ? {color: this.textColor} : null
      }
    }
  }
</script>

<style scoped>
  .item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .item img {
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }

  .item p {
    font-size: 13px;
  }
</style>