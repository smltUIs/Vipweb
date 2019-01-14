<template>
    <div class="index-content">
        <vip-index-content-banner :banner="indexContent"></vip-index-content-banner>
        <vip-index-content-fast-sell :fastSell="indexContent"></vip-index-content-fast-sell>
        <vip-index-content-end-sell :endSell="indexContent"></vip-index-content-end-sell>
        <vip-index-content-hot-sale :hotSale="indexContent"></vip-index-content-hot-sale>
    </div>
</template>

<script>
    import VipIndexContentBanner from "./VipIndexContentBanner";
    import VipIndexContentFastSell from "./VipIndexContentFastSell";
    import VipIndexContentEndSell from "./VipIndexContentEndSell";
    import VipIndexContentHotSale from "./VipIndexContentHotSale";
    export default {
        name: "VipIndexContent",
        components: {VipIndexContentHotSale, VipIndexContentEndSell, VipIndexContentFastSell, VipIndexContentBanner},
        props:["indexContent"]
    }
</script>

<style scoped>
  .index-content{
    width: 100%;
    -webkit-flex:1;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .index-content::-webkit-scrollbar{
    width: 1px;
  }
</style>
