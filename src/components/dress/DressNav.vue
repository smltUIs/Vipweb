<template>

  <div class="dress-box">
    <div class="dress-header">
      <i class="iconfont icon-jiantouarrowhead7" id="dress-jiantouarrowhead7" @click="dressjump"></i>
      <span v-show="index==idx" :key="index" v-for="(title,index) in shopcartNav.dressTitle">{{title}}</span>
      <router-link to="/classify" class="dress-classify"><i class="iconfont icon-list3"></i></router-link>
    </div>
    <div v-show="index==idx" class="dress-nav" v-if="shopcartNav.dressbox" :key="index" v-for="(pro,index) in shopcartNav.dressbox">
      <div class="dress-navbox" :key="index" v-for="(i,index) in pro.dressnav">
        <router-link :to="{path:'/shoplist',query:{xxx:idx,num:index}}"><img :src="i.dressnavImg" alt=""></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DressNav",
      props: ["shopcartNav"],
      data(){
        return {
          show:true,
          idx:""
        }
      },
      methods:{
        dressjump:function(){
          this.$router.go(-1)
        },
        // goParam:function(){
        //   this.$router.push({name:'shoplist',params:{xxx:this.idx}})
        // }
      },
      mounted(){
        this.idx=this.$route.params.id
        // console.log(this.idx)

      }
    }
</script>

<style scoped>
.dress-box{
  height:3.3rem;
  width: 100%;
}
.dress-classify{
  color: #555;
}
</style>
