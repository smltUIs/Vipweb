<template>
  <!--图文信息-->
  <div class="mom-imgInfo">
    <div class="mom-imgInfo-list" :key="index" v-for="(item,index) in momConImgInfo.imgInfoList">
      <img :src="item.img" alt="">
      <div class="mom-detailInfo">
        <p>{{item.disc}}折起&nbsp;&nbsp;{{item.pcon}}</p>
        <small>{{item.days}}</small>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VipMomContainerImgInfo",
        props:["momConImgInfo"]
    }
</script>

<style scoped>
  .mom-imgInfo{
    width: 100%;
    margin-top: .1rem;
  }
  .mom-imgInfo-list{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .mom-imgInfo-list img{
    width: 100%;
    height: 2.11rem;
  }
  .mom-imgInfo-list .mom-detailInfo{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: .55rem;
    background: #fff;
    margin-bottom: .1rem;
  }
  .mom-imgInfo-list .mom-detailInfo p{
    width: 2.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: .1rem 0 0 .12rem;
    color:#101219;
    font-size: .14rem;
    font-weight: 600;
  }
  .mom-imgInfo-list .mom-detailInfo small{
    color: #a8a8ad;
    font-size: .12rem;
    margin:.12rem .12rem 0 0;
  }

</style>
