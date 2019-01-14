<template>
    <div class="dress-list">
      <div class="dress-list-title">
        <p>今日特卖 · 每天早10点 晚8点上新</p>
      </div>
      <div class="dress-list-product" :key="index" v-for="(i,index) in shopcartList.dresslistproductinfo">
        <img :src="i.dresslistImg" alt="">
        <div class="dress-list-product-info">
          <span class="dress-list-discount">{{i.dresslistDiscount}}</span>
          <span class="dress-list-info">{{i.dresslistInfo}}</span>
          <span class="dress-list-date">{{i.dresslistDate}}</span>
        </div>
      </div>
      <div class="dress-menu">
        <span class="iconCart"><i class="iconfont icon-cart"></i></span>
        <span class="iconUp"><i class="iconfont icon-direction-up"></i></span>
      </div>
    </div>
</template>
<script>
    export default {
        name: "DressList",
        props:["shopcartList"]
    }
</script>

<style scoped>

</style>
