<template>
  <div class="footer-nav">
    <div>©2017 · wanandroid.com · All Rights Reserved. 皖ICP备17022096号</div>
    <div>关于我们· 本站CDN/存储服务由 又拍云 提供</div>
  </div>
</template>

<script>
export default {
  name: "footer-nav",
  data() {
    return {};
  },
  created: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    setDialogInfo(cmdItem) {
      // console.log(cmdItem)
      switch (cmdItem) {
        case "info":
          this.showInfoList();

          break;
        case "logout":
          this.logout();

          break;
        default:
          break;
      }
    },
    showInfoList() {
      // console.log("个人信息");
      this.$router.push("/infoshow");
    },
    logout() {
      // console.log("退出");
      // 清除token
      localStorage.removeItem("eleToken");
      // 设置vuex store
      this.$store.dispatch("clearCurrentState");
      // 跳转
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.footer-nav {
  width: 100%;
  height: 60px;
  min-width: 600px;
  padding: 5px;
  background: #324057;
  color: #fff;
  border-bottom: 1px solid #1f2d3d;
}
</style>
