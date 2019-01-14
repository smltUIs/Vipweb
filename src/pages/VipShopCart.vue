<template>
  <div class="shopcart-box">
    <vip-shop-cart-header></vip-shop-cart-header>
    <div class="shopcart-section">
      <vip-shop-cart-safe></vip-shop-cart-safe>
      <vip-shop-cart-location></vip-shop-cart-location>
      <vip-shop-cart-product v-on:totalspro="totalspro" :numm="numm" v-on:totals="totals" :pindex="pindex" :add="add" :subtract="subtract" v-if="shopcart" :shopcartProduct="shopcart"></vip-shop-cart-product>
      <vip-shop-cart-info :shopcartPay="shopcart"></vip-shop-cart-info>
      <!--<vip-shop-cart-footer :shopcartTolMon="totalPrice" :shopcartPay="shopcart"></vip-shop-cart-footer>-->
      <vip-shop-cart-footer :footernum="footernum" v-if="shoplist!=undefined" :shopcartPay="shopcart" :totalPrice="totalPrice" :shoplist="shoplist.shoplist"></vip-shop-cart-footer>
    </div>
  </div>
</template>

<script>
  import shopcartApi from "../apis/procart";
  import VipShopCartFont from '../assets/css/iconfont.css';
  import VipShopCartCss from "../assets/css/VipShopCart.css";
  import VipShopCartHeader from "../components/VipShopCart/VipShopCartHeader";
  import VipShopCartSafe from "../components/VipShopCart/VipShopCartSafe";
  import VipShopCartLocation from "../components/VipShopCart/VipShopCartLocation";
  import VipShopCartProduct from "../components/VipShopCart/VipShopCartProduct";
  import VipShopCartFooter from "../components/VipShopCart/VipShopCartFooter";
  import VipShopCartInfo from "../components/VipShopCart/VipShopCartInfo";
  export default {
    name: "VipShopCart",
    components: {
      VipShopCartInfo,
      VipShopCartFooter,
      VipShopCartProduct,
      VipShopCartLocation, VipShopCartSafe, VipShopCartHeader, VipShopCartCss, VipShopCartFont
    },
    data() {
      return {
        totalPrice: 0,
        shopcart: [],
        beforeIdx:"",
        idx:"",
        pindex:"",
        shoplist:[],
        numm:"",
        footernum:"",
        t:""
      }
    },
    methods: {
      totals:function(data){
        console.log(data)
        this.footernum = data
      },
      totalspro:function(data){
        console.log(data)
        this.footernum = data
      },
      _initgetshopcartData() {
        shopcartApi.getprocartData(data => {
          this.shopcart = data.shoplist[this.beforeIdx].shops[this.idx]
          this.shoplist = data.shoplist
          // console.log(this.shoplist)
          // console.log(this.shopcart);
          // this._counteCarts(this.shopcart);
          this._counteCarts(this.shoplist)
        })
      },
      _counteCarts(shoplists) {
        let total = 0;
        this.beforeIdx = this.$route.query.xxx
        this.idx = this.$route.query.num
        this.pindex = this.$route.query.pro
        // shopcart.products.forEach((i,pid) => {
        //   total += i.ListProPrice * i.number;
        //   // console.log(i.number);
        // });

        // this.add(this.pindex)
        // console.log(shoplists[this.beforeIdx].shops[this.idx].products[this.pindex])
        // console.log(this.beforeIdx)
        // console.log(this.idx)
        // console.log(this.pindex)
        // console.log(shoplists)
        console.log(this.add(this.pindex))
        let price = shoplists[this.beforeIdx].shops[this.idx].products[this.pindex].ListProPrice
        let nums = shoplists[this.beforeIdx].shops[this.idx].products[this.pindex].number
        total = price * nums
        // console.log(total)
        this.totalPrice = total;
      },

      add(pid){
        // this.shoplists[this.beforeIdx].shops[this.idx].products[this.pindex].number++
        this.shopcart.products[pid].number++;
        // if(this.shopcart.products[pid].number>=2){
        //     this.shopcart.products[pid].number=2;
        //       }
        this.numm = this.shopcart.products[pid].number
        // console.log(this.numm)
        // return this.shopcart.products[pid].number
      },
      subtract(pid){
        if( this.shopcart.products[pid].number <=1){
          this.shopcart.products[pid].number =1
        } else{
          this.shopcart.products[pid].number --
        }
        this.numm = this.shopcart.products[pid].number
      },
      // delete(pid){
      //
      // }
    },
    created() {
      this._initgetshopcartData()
    },
    mounted(){
      this.beforeIdx = this.$route.query.xxx
      this.idx = this.$route.query.num
      this.pindex = this.$route.query.pro
      // console.log(this.numm)
      // console.log(this.idx)
      // this._counteCarts(this.shoplist)
    }
  }
</script>

<style scoped>
  body{
    background-color: #f3f4f5;
  }
  .shopcart-box{
    /*display: flex;*/
  }
  .shopcart-section{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
