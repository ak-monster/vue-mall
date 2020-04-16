<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabBar",
  }
</script>

<style scoped>
  #tabBar {
    display: flex;

    background-color: #f3f3f3;
    box-shadow: 0 -2px 5px rgba(100, 100, 100, 0.15);
  }
</style>