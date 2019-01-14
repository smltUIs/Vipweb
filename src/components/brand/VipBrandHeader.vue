<template>
  <header class="classify-header">
    <div class="classify-top1">
      <i class="iconfont icon-jiantouarrowhead7" @click="brandjump"></i>
      <div class="classify-tab">
        <router-link to="/classify"><p class="brand-pleft" id="classify-pleft">分类</p></router-link>
        <router-link to="/brand"><p class="brand-pright" id="classify-pright">品牌</p></router-link>
      </div>
      <router-link to="/" class="brand-changeColor"><i class="iconfont icon-home"></i></router-link>
    </div>
    <div class="classify-top2">
      <i class="iconfont icon-searchcopy"></i>
      <router-link to="/search"><input type="text" placeholder="搜索品牌或商品" id="classify-searchbtn"></router-link>
    </div>
  </header>
</template>

<script>
    export default {
        name: "VipBrandHeader",
        methods:{
          brandjump:function(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
.brand-changeColor{
  color: #000;
}
</style>
