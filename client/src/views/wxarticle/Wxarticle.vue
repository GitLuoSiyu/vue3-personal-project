<template>
  <div class=""></div>
</template>

<script lang="js">
export default {
  name: "article",
  data() {
    return {
        wechatTabList:[],
        wechatBlogs:[],
        num:0,
        cd:408
    };
  },
  created() {
    //   document.body.addEventListener('scroll',function(e){
    //   e.preventDefault()
    //   e.stopPropagation()
    // },{passive: false})

    this.$ajax.get('/api/wxarticle/chapters/json')
    .then(res=>{
      // console.log(res.data.data)
      this.wechatTabList = res.data.data
    })
    .catch(error=>{
      console.log(error)
    })
    this.$ajax.get('/api/wxarticle/list/408/1/json')
    .then(res=>{
      // console.log(res.data.data.datas)
      this.wechatBlogs = res.data.data.datas
    })
    .catch(error=>{
      console.log(error)
    })
  },
  methods: {
    choseTab(index,id){
      this.num = index
      this.cd = id
      this.$ajax.get('/api/wxarticle/list/'+this.cd+'/1/json')
      .then(res=>{
      // console.log(res.data.data.datas)
        this.wechatBlogs = res.data.data.datas
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
};
</script>

<style scoped></style>
