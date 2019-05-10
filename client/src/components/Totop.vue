<template>
  <div class="head-nav">
    <el-row>
      <el-col :span="6" class="logo-container">
        <img src="../assets/images/logo.png" class="logo" alt="" />
        <span class="title">久保田在线后台管理系统</span>
      </el-col>
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
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
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
  name: "totop",
  data() {
    return {};
  },
  created: {},
  methods: {}
};
</script>

<style scoped></style>
