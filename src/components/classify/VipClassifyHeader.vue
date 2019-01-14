<template>
  <header class="classify-header">
    <div class="classify-top1">
      <i class="iconfont icon-jiantouarrowhead7" @click="classifjump"></i>
      <div class="classify-tab">
        <router-link to="/classify"><p class="classify-pleft" id="classify-pleft" @click="showclassify">分类</p></router-link>
        <router-link to="/brand"><p class="classify-pright" id="classify-pright" @click="showbrand">品牌</p></router-link>
      </div>
      <router-link to="/" class="brand-changeColor"><i class="iconfont icon-home"></i></router-link>
    </div>
    <div class="classify-top2">
      <i class="iconfont icon-searchcopy"></i>
      <router-link to="/search"><input type="text" placeholder="搜索品牌货商品" id="classify-searchbtn"></router-link>
    </div>
  </header>
</template>

<script>
    export default {
        name: "VipClassifyHeader",
      methods:{
          classifjump:function(){
            this.$router.go(-1)
          },
          showclassify(){
            let domobj = document.getElementById("classify-pleft");
            console.log(domobj)
            console.log(this)
            // domobj.style.backgroundColor="#585c64"
            // domobj.style.color="#fff"
          },
          showbrand(){
            let domobj = document.getElementById("classify-pright");
            console.log(domobj)
            console.log(this)
            // domobj.style.backgroundColor="#585c64"
            // domobj.style.color="#fff"
          }
      }
    }
</script>

<style scoped>
  .classify-top2 i{
    position: absolute;
    left: 1rem;
  }
  .brand-changeColor{
    color: #000;
  }
  .classify-top2 i{
    position: absolute;
    top: .1rem;
    left: 1rem;
  }
</style>
