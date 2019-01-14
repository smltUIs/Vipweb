<template>
  <div class="shopcartempty-box">
    <header class="shopcartempty-header">
      <i class="iconfont icon-jiantouarrowhead7" @click="shopcartemptyjump"></i>
      <span class="shopcart-cart">购物车</span>
      <!--<i class="iconfont icon-list3"></i>-->
      <span></span>
    </header>
    <div class="shopcartempty-section">
      <div class="shopping-cart-empty">
        <div class="shopcartempty-img">
          <img src="../../static/image/shopcart-cart.png" alt="">
        </div>
      </div>
      <div class="shopcartempty-con">
        <p class="shopcartempty-kkry">购物车空空如也</p>
        <router-link to="/"><button class="shopcartempty-button">去抢购</button></router-link>
      </div>

    </div>
  </div>
</template>

<script>
    import shopcartEmpty from "../assets/css/shopcartEmpty.css"
    import iconfont from "../assets/css/iconfont.css"
    export default {
        name: "VipShopCartEmpty",
      cpmponents:{shopcartEmpty,iconfont},
      methods:{
        shopcartemptyjump:function(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  body{
    background-color: #f3f4f6;
  }
.shopcartempty-box{
  width: 100%;
  /*display: flex;*/
}
.shopcartempty-header{
  height: .4rem;
  border-bottom:1px solid #e3e3e3;
  width: 100%;
  font-size: .18rem;
  line-height: .4rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top:0rem;
  left:0rem;
}
  .shopcartempty-header i{
    font-size: .22rem;
  }
  .shopcartempty-section{
    /*flex: 1;*/
    width: 100%;
    height: 100%;
    background-color: #f3f4f6;
    overflow: hidden;
    text-align: center;
  }
.shopping-cart-empty {
  padding-top: .7rem;
  /*padding-bottom: 1rem;*/
  background-color: #fff;
  text-align: center;
  /*position: relative;*/
  width: 100%;
  overflow: hidden;
  /*margin:0 auto;*/
  display: flex;
  justify-content: space-around;
}
.shopcartempty-img{
  width: 1.1rem;
  height: 1.4rem;
}
  .shopping-cart-empty img{
    width: 100%;
    height: 100%;
  }
  .shopcartempty-kkry{
    font-size: .18rem;
    margin-top: .2rem;
  }
  .shopcartempty-con{
    width: 100%;
    background-color: #fff;
    padding-top: .1rem;
    padding-bottom: .4rem;
  }
  .shopcartempty-button{
    background-color: #fff;
    padding:.03rem .7rem;
    color: #fc2993;
    border:none;
    border:1px solid #fc2993;
    font-size: .16rem;
    -webkit-border-radius: .06rem;
    -moz-border-radius: .06rem;
    border-radius: .06rem;
    margin-top:.1rem;
  }
</style>
