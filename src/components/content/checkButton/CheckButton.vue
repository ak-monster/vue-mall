<template>
  <div class="checkButton" :class="{checked: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .checkButton {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    cursor: pointer;

  }
  .checked {
    border-color: var(--color-high-text);
    background-color: var(--color-high-text);
  }
</style>