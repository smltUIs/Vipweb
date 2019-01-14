<template>
    <div class="box2">
      <div class="shopcart-product-money-express">
        <div class="shopcart-product-money-box">
          <h5 v-if="shopcartPay.shopcartproduct">￥{{shopcartPay|totalPriceFilter}}</h5>
        </div>
        <div class="shopcart-product-express-box">
          <span class="shopcart-product-express">免邮</span>
          <span class="shopcart-product-express38">唯品自营商品已享受新会员专享全场38元包邮</span>
        </div>
      </div>
      <div class="shopcart-product-gift">
        <span>使用礼券</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="shopcart-product-order-box">
        <div class="shopcart-product-order-money-box">
          <span class="shopcart-product-order-num">订单金额</span>
          <span class="shopcart-product-order-money" v-if="shopcartPay.products">￥{{shopcartPay|totalPriceFilter}}</span>
        </div>
        <div class="shopcart-product-sum-money-box">
          <span class="shopcart-product-order-sum-num">商品总金额</span>
          <span class="shopcart-product-order-sum-money" v-if="shopcartPay.products">￥{{shopcartPay|totalPriceFilter}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "VipShopCartInfo",
        props:["shopcartPay"],
        filters:{
          totalPriceFilter(shopcartPay){
            let total = 0;
            shopcartPay.products.forEach((i,pid) => {
              total += i.ListProPrice * i.number;
            });
            return total;
          }
        }
    }
</script>

<style scoped>

</style>
