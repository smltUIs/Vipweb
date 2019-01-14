<template>
    <div class="m-container">
        <vip-mom-container-swiper :momSwiper="momContain"></vip-mom-container-swiper>
        <vip-mom-container-menu></vip-mom-container-menu>
        <vip-mom-container-img-info v-if="momContain != undefined" :momConImgInfo="momContain"></vip-mom-container-img-info>
    </div>
</template>

<script>
    import VipMomContainerSwiper from "./VipMomContainerSwiper";
    import VipMomContainerMenu from "./VipMomContainerMenu";
    import VipMomContainerImgInfo from "./VipMomContainerImgInfo";
    export default {
        name: "VipMomContainer",
        components: {VipMomContainerImgInfo, VipMomContainerMenu, VipMomContainerSwiper},
        props:["momContain"]
    }
</script>

<style scoped>
  .m-container{
    width: 100%;
    -webkit-flex:1;
    /*margin-top: 32.21rem;*/
    /*margin-top: .8rem;*/
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
