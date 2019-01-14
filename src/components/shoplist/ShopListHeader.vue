<template>
  <div class="list-header-box">
  <div class="list-head">
    <i class="iconfont icon-jiantouarrowhead7" @click="listjump"></i>
    <h1>唯品会</h1>
    <router-link to="/"><i class="iconfont icon-home"></i></router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopListHeader",
        methods:{
          listjump:function(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style >
.list-header-box{
  width: 100%;
  height: .43rem;
  position: fixed;
  top: 0;
  background: #fff;
}
.detail-content .detail-imgs p i{
  display:block;
  font-size: .3rem;
  color: #fff;
  opacity: .7;
  font-weight: 100;
  position:absolute;
  top:0rem;
  left:.12rem;
  margin-left: -.08rem;
}
</style>
