<template>
  <div class=""></div>
</template>

<script lang="js">
export default {
  name: "tree",
  data() {
    return {
        tabListOne:[],
        tabBlogsList:[],
        tabListTwo:[],
        keyone:1,
        keytwo:'',
        cid:60
    };
  },
  created() {
    this.$ajax.get('/api/tree/json')
    .then(res=>{
      // console.log(res.data.data)
      this.tabListOne = res.data.data
    })
    .catch(error=>{
      console.log(error)
    })
  },
  methods: {
    onlistTwo(id){
      this.cid = id
    },

    onTabsList(){
      console.log('打开热搜页面')
    }
  }
};
</script>

<style scoped></style>
