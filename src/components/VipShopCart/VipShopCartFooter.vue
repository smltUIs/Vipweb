<template>
  <div class="shopcart-product-pay-box">
    <div class="shopcart-product-need-pay-box">
      <span class="shopcart-product-need-pay">还需支付：</span>
      <!--<span class="shopcart-product-need-pay-money">￥{{shopcartTolMon}}</span>-->
      <span class="shopcart-product-need-pay-money"v-show="isShow">￥{{footernum}}</span>
    </div>
    <div class="shopcart-product-need-pay-select-box">
      <span class="shopcart-product-need-pay-select-get">货到付款</span>
      <span class="shopcart-product-need-pay-select-online">在线支付</span>
    </div>
  </div>
</template>

<script>
  import bus from "../../assets/js/bus"
    export default {
      name: "VipShopCartFooter",
      data() {
        return {
          xxx: "",
          num: "",
          pro: "",
          total:"",
          isShow:true
        }
      },
      created(){
        // bus.$on("sendMsg",(data)=>{
          // this.total = data
          // console.log(this.totalPrice)
        // })
        // this.showPrice()
        // console.log(this.footernum)
      },
      mounted() {
        this.xxx = this.$route.query.xxx;
        this.num = this.$route.query.num
        this.pro = this.$route.query.pro
        // console.log(this.xxx)
        // console.log(this.num)
        // console.log(this.pro)
        this.showPrice()
        // this.obj=this.totalPriceFilter(this.shoplist)
      },
      props: ["shopcartPay","shoplist","totalPrice","footernum"],

      methods: {
        showPrice:function(){
          let price = shoplists[this.xxx].shops[this.num].products[this.pro].ListProPrice
          this.total = price
        }

        // totalPriceFilter(shoplists){
        //   console.log(this.xxx)
        //   console.log(this.num)
        //   console.log(this.pro)
        //   console.log(shoplists)
          // console.log(shoplists[0])
          // console.log(shoplists[this.xxx].shops[this.num])
          // console.log(shoplists[this.xxx].shops[this.num].products[this.pro])
          // console.log(shoplists[this.xxx].shops[this.num].products[this.pro].ListProPrice)
          // console.log(shoplists[this.xxx].shops[this.num].products[this.pro].number)
          // let total = 0;
          // let price = shoplists[this.xxx].shops[this.num].products[this.pro].ListProPrice
          // let nums = shoplists[this.xxx].shops[this.num].products[this.pro].number
          // total = price*nums
          // console.log(price)
          // console.log(nums)
          // console.log(total)
          // console.log(shoplist[this.xxx].shops[this.num].products[this.pro].ListProPrice)
        //   console.log(shoplist[this.xxx].shops[this.num].products[this.pro].number)
        //   total = shoplists[this.xxx].shops[this.num].products[this.pro].ListProPrice * this.shoplist.shoplists[this.xxx].shops[this.num].products[this.pro].number
        //   return total
        }

      // filters: {
        //
        // totalPriceFilter(shoplist) {
        //
        //   // if(shoplist){
        //     let total = 0;
        //   // shopcartPay.products.forEach((i,pid) => {
        //   //   total += i.ListProPrice * i.number;
        //   //   console.log(i.ListProPrice)
        //   //   console.log(i.number)
        //   // });
        //   // for(let i=0; i<shopcartPay.products.length; i++){
        //   // total = shoplist[this.xxx].shops[this.num].products[this.pro].ListProPrice * this.shoplist.shoplist[this.xxx].shops[this.num].products[this.pro].number
        //   console.log(shoplist[this.xxx].shops[this.num].products[this.pro].ListProPrice)
        //   console.log(shoplist[this.xxx].shops[this.num].products[this.pro].number)
        //   // console.log(shopcartPay)
        //   // console.log(shoplist)
        //   // console.log(this.xxx)
        //   // }
        //   // return total;
        //   // }
        // }

    }
</script>

<style scoped>

</style>
