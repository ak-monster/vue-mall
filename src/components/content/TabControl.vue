<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) of titles" :class="{active: index === currentIndex}">
      <span @click="btnClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    data() {
      return {
        currentIndex: 0,
        titles: ['流行', '新款', '热卖']
      }
    },
    methods: {
      btnClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    background-color: #e1dcdc
  }
  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
  }
</style>