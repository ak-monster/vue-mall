<template>
  <div id="comments" v-if="Object.keys(itemComments).length !== 0">
    <div class="title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="commentContent">
      <div class="user">
        <img :src="itemComments.user.avatar" alt="" class="userAvatar">
        <span class="userName">{{itemComments.user.uname}}</span>
        <p>{{itemComments.content}}</p>
      </div>
      <div class="itemStyle">
        <span class="createdTime">{{itemComments.created | showDate}}</span>
        <span>{{itemComments.style}}</span>
      </div>
      <div class="userShow">
        <p v-if="itemComments.extraInfo">{{itemComments.extraInfo.join(' ')}}</p>
        <img v-if="itemComments.images" v-for="image of itemComments.images" :src="image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from "@/components/common/utils/utils";

  export default {
    name: "DetailComments",
    props: {
      itemComments: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        // 将时间戳转为date对象：时间戳一般是秒钟，*1000转为毫秒
        const date = new Date(value * 1000)
        // 将date进行转换
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  #comments {
    padding: 5px 12px;
    border-bottom: 5px solid #f2f5f8;
  }
  .title {
    height: 49px;
    line-height: 49px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    font-size: 15px;
  }
  .commentContent {
    padding: 10px 0 5px 0;
  }
  .commentContent .userAvatar {
    height: 42px;
    width: 42px;
    border-radius: 50%;
  }
  .commentContent .userName {
    position: relative;
    top: -15px;
    margin-left: 10px;
    font-size: 15px;
  }
  .commentContent p {
    font-size: 14px;
    padding-top: 5px;
    line-height: 1.5;
  }
  .commentContent .itemStyle {
    font-size: 12px;
    margin-top: 10px;
    color: #999;
  }
  .userShow p {
    font-size: 12px;
    color: #999;
    margin-bottom: 5px;
  }
  .itemStyle .createdTime {
    margin-right: 5px;
  }
  .userShow img {
    width: 70px;
    height: 70px;
  }
</style>