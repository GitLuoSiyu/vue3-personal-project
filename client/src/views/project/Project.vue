<template>
  <div class=""></div>
</template>

<script lang="js">
export default {
  name: "project",
  data() {
    return {};
  },
  created() {
    this.$ajax.get('/api/project/tree/json')
      .then(res=>{
        // console.log(res.data.data)
        this.projectList = res.data.data
      })
      .catch(error=>{
        console.log(error)
      })
    // 只在首次打开时执行一次
    this.$ajax.get('/api/project/list/1/json?cid=294')
      .then(res=>{
        // console.log(res)
        this.proDetails = res.data.data.datas
      })
      .catch(error=>{
        console.log(error)
    })
  },
  methods: {
    tabopen(index,id) {
      this.cd = id
      this.num = index
      this.$ajax.get('/api/project/list/1/json?cid=' + this.cd)
      .then(res=>{
        // console.log(res)
        this.proDetails = res.data.data.datas
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
};
</script>

<style scoped></style>
