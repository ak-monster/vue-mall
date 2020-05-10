<template>
  <div id="profileLogin">
    <div class="avatar">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="login">
      <div class="loginSign">登录/注册</div>
      <div class="loginPhone">暂无绑定手机号</div>
    </div>
    <div class="arrowhead">
      <img src="~assets/img/profile/arrow.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileLogin"
  }
</script>

<style scoped>
  #profileLogin {
    background-color: var(--color-tint);
    padding: 10px 15px;

    display: flex;
  }
  .avatar img {
    width: 80px;
    height: 80px;
    padding-right: 10px;
  }
  .login {
    flex: 1;
    color: #fff;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .login .loginPhone {
    padding-top: 5px;
    font-size: 14px;
    position: relative;
    margin-left: 15px;
  }
  .login .loginPhone::before {
    content: '';
    position: absolute;
    left: -18px;
    width: 20px;
    height: 20px;
    background: url("~assets/img/profile/phone.svg") 0 0/20px 20px;
  }
  .arrowhead {
    display: flex;
    align-items: center;
    color: #fff;
  }
  .arrowhead img {
    width: 16px;
    height: 16px;
  }
</style>