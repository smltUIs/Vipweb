<template>
    <div class="container">
        <vip-beauty-container-top :beautyConTop="beautyCon"></vip-beauty-container-top>
        <vip-beauty-container-brand :beautyConBrand="beautyCon"></vip-beauty-container-brand>
    </div>
</template>

<script>
    import VipBeautyContainerTop from "./VipBeautyContainerTop";
    import VipBeautyContainerBrand from "./VipBeautyContainerBrand";
    export default {
        name: "VipBeautyContainer",
        components: {VipBeautyContainerBrand, VipBeautyContainerTop},
        props:["beautyCon"]
    }
</script>

<style scoped>
.container{
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
