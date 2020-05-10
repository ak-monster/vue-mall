<template>
  <scroll id="tabCategoryMenu" ref="scroll" :category-list="categoryList">
    <div class="menuItem"
         :class="{isClick: index === currentIndex}"
        v-for="(item, index) of categoryList"
         :key="index"
        @click="menuItemClick(index)">
      {{item.title}}
    </div>
  </scroll>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";

  export default {
    name: "CategoryMenu",
    components: {
      Scroll
    },
    props: {
      categoryList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      // 点击目录
      menuItemClick(index) {
        this.currentIndex = index;
        this.$emit('selectMenu', index)
      }
    },
  }
</script>

<style scoped>
  #tabCategoryMenu {
    background-color: #f6f6f6;
    width: 100px;
    overflow: hidden;
  }
  .menuItem {
    height: 45px;
    width: 100%;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .isClick {
    background-color: #fff;
    border-left: 4px solid var(--color-high-text);
    color: var(--color-high-text);
  }
</style>