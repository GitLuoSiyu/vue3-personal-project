<template>
  <div class=""></div>
</template>

<script lang="js">
export default {
  name: "blog",
  data() {
    return {};
  },
  created() {
    let _this = this
		this.$ajax.all([
			this.$ajax.get('/api/banner/json'),
			this.$ajax.get('/api/article/list/0/json')
		]).then(this.$ajax.spread(function(bannersRes,blogsRes){
				_this.banners = bannersRes.data.data
				_this.blogs = blogsRes.data.data.datas
    }))
    // 路由判断以及收藏数量的判断
    this.colNumFlage()
  },
  methods: {
    changeState(id,state) {
      let _this = this
      if(!this.$store.state.AllState) {
        // Toast({
        //   message:'请先登录',
        //   duration:500,
        //   iconClass:'icon icon-success'
        // })
      }
      if(this.$store.state.AllState && state) {
        this.blogs.map( item => {
          if(item.id == id) {
            _this.$store.commit('getCollect',item)
          }
        })
      }
      if(this.$store.state.AllState && !state) {
        _this.$store.commit('delCollect',id)
      }
    },

    goLogin(){
      if(this.$store.state.name == '') {
        setTimeout( () =>{
          this.$router.push({name:'login'})
        },500)
      }
    },

    goCollect(){
      if(this.$store.state.AllState) {
        this.$router.push({name:"collect"})
      } else {
        // Toast({
        //   message:'请先登录',
        //   duration:500,
        //   iconClass:'icon icon-success'
        // })
      }
    },

    onCollect(){

    },

    readMore(){
      console.log('进入文章详情')
    },

    loginOut(){
      //  退出操作
      this.$ajax.get('/api/user/logout/json')
      .then(res=>{
        console.log(res);
        // localStorage.clear();
        this.$store.state.AllState = false
        localStorage.removeItem("collect")
        this.colNumFlage()
      })
      .catch(err=>{
        console.log(err);
      })
    },

    colNumFlage(){
      // 收藏数量的判断与现实
      var _this = this;
      if(!this.$store.state.AllState == false) {
        let colNum = this.$store.state.Collect.length
        _this.collectNum = colNum
      }
    }
  }
};
</script>

<style scoped></style>
