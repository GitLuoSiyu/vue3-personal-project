<template>
  <div class=""></div>
</template>

<script lang="js">
export default {
  name: "treeDetail",
  data() {
    return {
        id:'',
        name:'',
        proDetails:[]
    };
  },
  created() {
    let id = this.$route.params.id
    this.name = this.$route.params.name
    let _this = this
    this.$ajax.get('/api/article/list/0/json?cid='+id)
    .then(res=>{
      _this.proDetails = res.data.data.datas
    })
    .catch(error=>{
      console.log(error)
    })
  },
  methods: {

  }
};
</script>

<style scoped></style>
