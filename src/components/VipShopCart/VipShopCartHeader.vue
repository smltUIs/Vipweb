<template>
    <div class="shopcart-header">
      <i class="iconfont icon-jiantouarrowhead7" @click="shopcartjump"></i>
      <span class="shopcart-header-title">确认订单</span>
      <span class="shopcart-header-time">09:27</span>
    </div>
</template>

<script>
    export default {
        name: "VipShopCartHeader",
      methods:{
        shopcartjump:function(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
