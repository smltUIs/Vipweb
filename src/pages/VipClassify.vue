<template>
  <div class="classify-total">
    <vip-classify-header></vip-classify-header>
    <vip-classify-section></vip-classify-section>
  </div>
</template>

<script>
    import VipClassifyCss from "../assets/css/classify.css"
    import iconfont from "../assets/css/iconfont.css"
    import VipClassifyHeader from "../components/classify/VipClassifyHeader";
    import VipClassifySection from "../components/classify/VipClassifySection";
    export default {
        name: "VipClassify",
      components: {VipClassifySection, VipClassifyHeader,VipClassifyCss,iconfont},
    }
</script>

<style scoped>
  .classify-total{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
