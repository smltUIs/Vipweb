<template>
  <div class="conTop">
    <!--banner-->
    <div class="banner">
      <a href=""><img v-if="beautyConTop.bannerImg" :src="beautyConTop.bannerImg" alt=""></a>
    </div>
    <ul class="imgList">
      <li class="one" :key="'one-'+index" v-for="(list1,index) in beautyConTop.imgList">
        <a href=""><img :src="list1" alt=""></a>
      </li>
    </ul>
    <div class="bigImgBox">
      <a :key="index" v-for="(list2,index) in beautyConTop.bigImgBox" href="">
        <img :src="list2" alt="">
      </a>
    </div>
    <div class="smallImg">
      <a :key="index" v-for="(list3,index) in beautyConTop.smallImg" href="">
        <img :src="list3" alt="">
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VipBeautyContainerTop",
        props:["beautyConTop"]
    }
</script>

<style scoped>
  .conTop{
    width: 100%;
  }
  /*banner*/
  .banner{
    width: 100%;
    height: 1.5rem;
  }
  .banner img{
    width: 100%;
    height: 100%;
  }
  .imgList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  .imgList li{
    width: .75rem;
    height: .84rem;
  }
  .imgList li a img{
    width: 100%;
    height: 100%;
  }
  .bigImgBox{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .bigImgBox a img{
    width: 100%;
    height: 1.05rem;
  }
  .smallImg{
    width: 100%;
  }
  .smallImg a img{
    width: 100%;
    height: auto;
  }
</style>
