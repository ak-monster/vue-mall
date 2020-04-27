<template>
  <div id="shop">
    <div class="shopName">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shopInfo">
      <div class="shopMiddleItem">
        <div class="sell">
          <div>{{shop.sell | sellFilter}}</div>
          <div class="itemFont">总销量</div>
        </div>
        <div class="quantity">
          <div>{{shop.quantity}}</div>
          <div class="itemFont">全部宝贝</div>
        </div>
      </div>
      <div class="shopMiddleRight">
        <table>
          <tr v-for="(item, index) of shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'scoreBetter': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'highBetter': item.isBetter}">
              <span>{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="enterShop">
      <a :href="shop.url"><span>进店逛逛</span></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellFilter(value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  #shop {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shopName {
    display: flex;
  }
  .shopName img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1)
  }
  .shopName span {
    line-height: 45px;
    margin-left: 10px;
  }
  .shopInfo {
    display: flex;
    margin-top: 15px;
    font-size: 18px;
    align-items: center;
  }
  .shopInfo .itemFont {
    font-size: 12px;
    margin-top: 8px;
  }
  .shopInfo .shopMiddleItem {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    border-right: 1px solid rgba(0, 0, 0, .1);
    text-align: center;
  }
  .shopInfo .shopMiddleRight {
    font-size: 13px;
    flex: 1;
  }
  .shopMiddleRight table {
    margin: 0 auto;
  }
  .shopMiddleRight table td {
    padding: 5px 5px;
  }
  .shopMiddleRight .score {
    color: #5ea732;
  }
  .shopMiddleRight .scoreBetter {
    color: var(--color-high-text);
  }
  .shopMiddleRight .better span{
    color: #fff;
    background-color: #5ea732;
  }
  .shopMiddleRight .highBetter span{
    background-color: var(--color-high-text);
  }
  .enterShop {
    text-align: center;
    margin-top: 8px;
  }
  .enterShop span {
    display: inline-block;
    width: 150px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    background-color: #f2f5f8;
    border-radius: 10px;
  }
</style>