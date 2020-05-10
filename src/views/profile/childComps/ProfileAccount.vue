<template>
  <div id="profileAccount">
    <div class="money item">
      <span class="number">{{account.money.toFixed(2)}}</span>
      <span>元</span>
      <div class="title">我的余额</div>
    </div>
    <div class="discounts item">
      <span class="number">{{account.discounts}}</span>
      <span>个</span>
      <div class="title">我的优惠</div>
    </div>
    <div class="points item">
      <span class="number">{{account.points}}</span>
      <span>分</span>
      <div class="title">我的积分</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileAccount",
    data() {
      return {
        account: {
          money: 0,
          discounts: 0,
          points: 0
        }
      }
    }
  }
</script>

<style scoped>
  #profileAccount {
    display: flex;
    text-align: center;
    border-bottom: #f2f2f2 solid 12px;
  }
  #profileAccount .item {
    flex: 1;
    padding: 18px;
  }
  #profileAccount .item:not(:last-child) {
    border-right: #f2f2f2 solid 2px;
  }
  #profileAccount .title {
    font-size: 14px;
    padding-top: 4px;
  }
  #profileAccount .number {
    font-size: 24px;
    font-weight: 550;
    color: var(--color-high-text);
  }
</style>