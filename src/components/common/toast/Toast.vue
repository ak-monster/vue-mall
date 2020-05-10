<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  import { debounce } from "@/components/common/utils/utils";

  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message = '默认内容', duration = 2000) {
        this.isShow = true;
        this.message = message;
        console.log(this.message);
        console.log(this.isShow);

        // 如何对这里做防抖处理？目的：当一直触发事件时，toast不会消失，直到最后一次触发后duration时间到才消失
        setTimeout(() => {
          this.isShow = false;
          this.message = ''
        }, duration)
      },
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 20px 30px;
    transform: translate(-50%, -50%);
    z-index: 999;

    background-color: rgba(0, 0, 0, 0.5);
    color: #f2f5f8;
    border-radius: 5px;
    white-space: nowrap;
  }
</style>