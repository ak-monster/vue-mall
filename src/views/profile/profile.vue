<template>
  <div id="profile">
    <nav-bar>
      <template v-slot:center>
        <div class="shopName">JSMAN商城</div>
      </template>
    </nav-bar>
    <profile-login/>
    <profile-account/>
    <profile-list :profile-list="profileList"/>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import ProfileLogin from "@/views/profile/childComps/ProfileLogin";
  import ProfileAccount from "@/views/profile/childComps/ProfileAccount";
  import ProfileList from "@/views/profile/childComps/ProfileList";

  export default {
    name: "profile",
    components: {
      NavBar,
      ProfileLogin,
      ProfileAccount,
      ProfileList
    },
    data() {
      return {
        profileList: [
          {icon: 'message.svg', title: '我的消息'},
          {icon: 'points.svg', title: '积分商城'},
          {icon: 'vip.svg', title: '会员卡'},
          {icon: 'cart.svg', title: '我的购物车'},
          {icon: 'shopping.svg', title: '下载购物APP'}
        ]
      }
    }
  }
</script>

<style scoped>
  .shopName {
    flex: 1;
    color: #fff;
    font-weight: 550;
  }
</style>