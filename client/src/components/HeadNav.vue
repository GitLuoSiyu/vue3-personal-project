<template>
  <div class="head-nav">
    <el-row>
      <div class="head-logo-box">
        <el-col :span="6" class="logo-container">
          <img src="../assets/images/logo.png" class="logo" alt="" />
          <span class="title">Logo</span>
        </el-col>
      </div>
      <div class="menu-nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          text-color="#333"
          active-text-color="#409eff"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">项目</el-menu-item>
          <el-menu-item index="3">体系</el-menu-item>
          <el-menu-item index="4">公众号</el-menu-item>
          <el-menu-item index="5">导航</el-menu-item>
          <el-menu-item index="6">项目分类</el-menu-item>
          <el-menu-item index="7">工具</el-menu-item>
          <el-menu-item index="8">收藏</el-menu-item>
          <el-menu-item>
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入搜索内容"
              @select="handleSelect"
            ></el-autocomplete
          ></el-menu-item>
        </el-menu>
      </div>
      <el-col :span="6" class="user">
        <div class="userinfo">
          <img src="user.avatar" class="avatar" alt="" />
          <div class="welcome">
            <p class="name comename">欢迎</p>
            <p class="name avatarname">用户</p>
          </div>
          <span class="username">
            <!-- 下拉箭头 -->
            <el-dropdown trigger="click" @command="setDialogInfo">
              <!-- <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span> -->
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "head-nav",
  data() {
    return {
      state: ""
    };
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
    },

    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },

    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },

    handleSelect(item) {
      console.log(item);
      switch (item) {
        case 1:
          this.$router.push("/index");
          break;
        case 2:
          this.$router.push("/projectindex");
          break;
        case 3:
          this.$router.push("/tree");
          break;
        case 4:
          this.$router.push("/wxarticle");
          break;
        case 5:
          this.$router.push("/navi");
          break;
        case 6:
          this.$router.push("/project");
          break;
        case 7:
          this.$router.push("/tools");
          break;
        case 8:
          this.$router.push("/lg");
          break;
        default:
          break;
      }
    },

    mounted() {
      this.restaurants = this.loadAll();
    }
  }
};
</script>

<style scoped>
.head-nav {
  width: 100%;
  height: 60px;
  min-width: 600px;
  padding: 5px;
  /* background: #324057; */
  background-color: #ffffff;
  color: #fff;
  /* box-shadow: 0px 2px 4px #666; */
  /* border-bottom: 1px solid #e6e6e6; */
  /* margin: 0 auto; */
  /* justify-content: center; */
}
.head-logo-box {
  display: inline-block;
  height: 65px;
  line-height: 60px;
}
.logo-container {
  /* display: inline-block; */
  line-height: 60px;
  min-width: 160px;
}
.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}
.title {
  vertical-align: middle;
  font-size: 22px;
  font-family: "Microsoft YaHei";
  letter-spacing: 3px;
}
.user {
  width: 90px;
  line-height: 60px;
  height: 65px;
  text-align: right;
  float: right;
  padding-right: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.welcome {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
}
.name {
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}
.comename {
  color: #409eff;
  font-size: 12px;
}
.avatarname {
  color: #409eff;
  font-weight: bolder;
}
.username {
  color: #409eff;
  cursor: pointer;
  margin-right: 5px;
}
.el-dropdown {
  color: #409eff;
}

.menu-nav {
  display: inline-block;
}
.menu-nav .el-menu.el-menu--horizontal {
  border: none;
}
.menu-nav ul li {
  font-size: 16px;
}
</style>
