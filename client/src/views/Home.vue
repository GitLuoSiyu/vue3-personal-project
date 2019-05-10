<template>
  <div class="home">
    <!-- <div class="container">
      <h1 class="title">米修在线</h1>
      <p class="lead">专注于线上教育, 用心做课程, 用心做服务!</p>
    </div> -->
    <div class="main layout">
      <div class="home-left home-itembox">
        <!-- bannar -->
        <div class="bannar">
          <div class="swiper-left"></div>
          <div class="swiper-right"></div>
        </div>

        <!-- 小标签 -->
        <div class="website-card">
          <div class="card-list">
            <ul class="card-ul">
              <li class="card-item">给大家整理了一些学习资料</li>
            </ul>
          </div>
        </div>

        <!-- 最新博文、最新项目 选项卡效果 附带瀑布流效果 -->
        <div class="main-index-blogs">
          <div class="index-left-blog">
            <!-- 最新博文 -->
            我是文章
          </div>
          <div class="index-right-pindex">
            <!-- 最新项目 -->
            我是项目
          </div>
        </div>
      </div>
      <div class="home-right home-itembox">
        <div class="right-nav">
          <!-- 右侧分享项目 -->
          <ul class="">
            <li class="right-nav-item">分享项目</li>
            <li class="right-nav-item">待办清单</li>
            <li class="right-nav-item">本站开放API</li>
          </ul>
        </div>

        <!-- 右侧 常用工具 -->
        <div class="right-tools"> 
          <div class="common-tools-top">常用工具</div>
          <ul class="right-tools-ul"> 
            <li class="right-tools-item">bejson</li>
            <li class="right-tools-item">bejson</li>
            <li class="right-tools-item">bejson</li>
            <li class="right-tools-item">bejson</li>
            <li class="right-tools-item">bejson</li>
          <ul>
        <div>

        <!-- 右侧 常用网站 -->
        <div class="right-common-website"> 
          <div class="common-website-top">常用网站</div>
          <ul class="right-website-ul">   
            <li class="right-tools-item">国内大牛博客集合</li>
            <li class="right-tools-item">国内大牛博客集合</li>
            <li class="right-tools-item">国内大牛博客集合</li>
            <li class="right-tools-item">国内大牛博客集合</li>
            <li class="right-tools-item">国内大牛博客集合</li>
          <ul>
        </div>

        <!-- 联系我们 -->
        <div class="contract">
          <div class="contract-top">联系我们</div>
          <ul class="contract-content">   
            <li class="contract-content-item">国内大牛博客集合</li>
            <li class="contract-content-item">国内大牛博客集合</li>
            <li class="contract-content-item">国内大牛博客集合</li>
            <li class="contract-content-item">国内大牛博客集合</li>
            <li class="contract-content-item">国内大牛博客集合</li>
          <ul>
        </div>

        <!-- 大家都在搜 -->
        <div class="common-search">
          <div class="contract-top">大家都在搜</div>
          <ul class="contract-content">   
            <li class="contract-content-item">面试</li>
            <li class="contract-content-item">面试</li>
            <li class="contract-content-item">面试</li>
            <li class="contract-content-item">面试</li>
            <li class="contract-content-item">面试</li>
          <ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      cardListText: [
        { id: 0, text: "给大家整理了一些学习资料" },
        { id: 1, text: "你能看到的数据本站均提供了开放API" },
        { id: 2, text: "极客事件 我购买的一揽子课程" },
        { id: 3, text: "Android 速查一切" },
        { id: 4, text: "Android 开发高手课 文章更新学习笔记" },
        { id: 5, text: "手机的 OpenApis" }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  /* background: url(../assets/images/showcase.png) no-repeat; */
  background-size: 100% 100%;
}

.main {
  width: 100%;
  height: 100%;
  background-color: #aaa;
  display: flex;
  justify-content: center;
}
.home-itembox {
  margin: 20px;
  background-color: #ffffff;
}

.home-left {
  width: 665px;
}
.home-right {
  width: 300px;
}
.layout {
}
</style>
