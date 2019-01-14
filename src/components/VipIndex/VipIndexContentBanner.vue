<template>
  <!--index-banner-->
  <div class="index-banner">
    <img :src="banner.bannerImg" alt="">
    <ul class="index-banner-menu">
      <li :key="index" v-for="(list,index) in banner.bannerMenu" @click="getTitle">
        <router-link :to="'dress/'+index"><img :src="list.img" alt="">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "VipIndexContentBanner",
        props:["banner"],
        data(){
          return{
            num:0
          }
        },
        methods:{
          getTitle:function(){

          }
        }
    }
</script>

<style scoped>
  /*index-banner*/
  .index-banner{
    width: 100%;
    display: flex;
    /*overflow: hidden;*/
    flex-direction: column;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .index-banner img{
    width: 100%;
    height: 1.5rem;
  }
  .index-banner-menu{
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background: #fff;
    box-sizing: border-box;
  }
  .index-banner-menu li{
    /*width: .79rem;*/
    height: .84rem;
    /*margin-right: -.05rem;*/
    box-sizing: border-box;
  }
  .index-banner-menu li a img{
    width: .73rem;
    height: .84rem;
  }
</style>
