<template>
  <div id="itemParams" v-if="Object.keys(itemParams).length !== 0">
    <table class="itemRule">
      <tr v-for="item of itemParams.rule.tables[0]">
        <td>{{item[0]}}</td>
        <td>{{item[1]}}</td>
        <td>{{item[2]}}</td>
        <td>{{item[3]}}</td>
      </tr>
    </table>
    <table class="itemSet">
      <tr v-for="item of itemParams.info.set">
        <td class="itemKey">{{item.key}}</td>
        <td class="itemValue">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailItemParams",
    props: {
      itemParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #itemParams {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .itemRule, .itemSet {
    width: 100%;
    border-collapse: collapse;
  }
  .itemRule tr, .itemSet tr {
    height: 42px;
    border-bottom: 1px solid rgba(0, 0, 0, .1)
  }
  .itemSet .itemKey {
    width: 95px;
  }
  .itemSet {
    border-top: 1px solid rgba(0, 0, 0, .1);
  }
  .itemSet .itemValue {
    color: var(--color-high-text);
  }
</style>