<template>
    <div class="brand-total">
      <vip-brand-header></vip-brand-header>
      <vip-brand-section></vip-brand-section>
    </div>
</template>

<script>
    import VipBrandCss from "../assets/css/brand.css"
    import iconfont from "../assets/css/iconfont.css"
    import VipBrandHeader from "../components/brand/VipBrandHeader";
    import VipBrandSection from "../components/brand/VipBrandSection";
    export default {
        name: "brand",
      components: {VipBrandSection, VipBrandHeader,VipBrandCss,iconfont}
    }
</script>

<style scoped>
  .brand-total{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
