<template>
  <div class=""></div>
</template>

<script lang="js">
export default {
  name: "wxlist",
  data() {
    return {
      wecDeBlogs:[],
    };
  },
  created() {
      this.$ajax.get('/api/wxarticle/list/408/1/json')
      .then(res=>{
        //   console.log(res.data.data.datas)
          this.wecDeBlogs = res.data.data.datas
      })
      .catch(error=>{
          console.log(error)
      })
  },
  methods: {}
};
</script>

<style scoped></style>
