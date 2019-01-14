<template>
  <!--mon-menu-->
  <div class="mom-menu">
    <div class="mom-menu-top">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div>
    <div class="mom-menu-bot">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div>
    <p>今日特卖 · 每天早10点，晚8点上新</p>
  </div>
</template>

<script>
    export default {
        name: "VipMomContainerMenu",
        props:["momConMenu"]
    }
</script>

<style scoped>
  .mom-menu{
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .mom-menu div:first-child{
    width: 100%;
    height: .8rem;
    background: url("../../../static/image/mom-menu1.png") left top no-repeat;
    background-size: 100% 100%;
    display: flex;
  }
  .mom-menu div:nth-child(2){
    width: 100%;
    height: .8rem;
    background: url("../../../static/image/mom-menu2.png") left top no-repeat;
    background-size: 100% 100%;
    display: flex;
  }
  .mom-menu div:first-child img,.mom-menu div:nth-child(2) img{
    width: 20%;
  }
  .mom-menu p{
    color:#101219;
    font-size: .16rem;
    margin: .25rem 0 .05rem .67rem;
  }
</style>
