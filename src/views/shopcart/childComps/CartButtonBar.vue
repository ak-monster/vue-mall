<template>
  <div id="cartButtonBar">
    <div class="selectAll">
      <check-button
          :is-checked="!select"
          @click.native="selectAllBtn"/>
      <span>全选</span>
    </div>
    <div class="countPrince">
      <span>合计：￥{{price}}</span>
    </div>
    <div class="calculate">
      <span>去付款({{count}})</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";

  import { mapGetters } from 'vuex'
  import { SELECT_ALL, SELECT_NO } from "@/store/mutation-types";

  export default {
    name: "CartButtonBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters({
        price: 'priceCount',
        count: 'selectCount',
        select: 'isAllSelect'
      })
    },
    methods: {
      selectAllBtn() {
        if (!this.select) {
          this.$store.commit(SELECT_NO)
        } else {
          this.$store.commit(SELECT_ALL)
        }
      }
    }
  }
</script>

<style scoped>
  #cartButtonBar {
    position: fixed;
    bottom: 49px;
    height: 44px;
    width: 100%;
    background-color: #eee;;
    box-shadow: 0 -3px 3px rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
  }
  .selectAll {
    margin-left: 10px;
    display: flex;
  }
  .selectAll span {
    padding-left: 5px;
    font-size: 14px;
  }
  .countPrince {
    margin-left: 15px;
  }
  .calculate {
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    background-color: red;
    color: #fff;
    font-weight: 300;
    line-height: 44px;
    text-align: center;
    font-size: 14px;
  }
</style>