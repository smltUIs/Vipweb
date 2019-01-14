<!--<template>-->
  <!--<div class="detail-message">-->
    <!--<div class="detail-imgs">-->
      <!--<img :src="item.ListProImg" alt="">-->
      <!--<router-link to="/shoplist"><p><i class="iconfont icon-jiantouarrowhead7"></i></p>-->
      <!--</router-link>-->
    <!--</div>-->
    <!--<div class="detail-price">-->
      <!--<div class="detail-promotion-price">-->
        <!--<div class="detail-promotion-left">-->
          <!--<span class="detail-bg-color">疯抢价</span>-->
          <!--<span class="detail-true-price">￥{{item.ListProPrice}}</span>-->
        <!--</div>-->
        <!--<div class="detail-promotion-right">-->
          <!--<i class="iconfont icon-collect"></i>-->
          <!--<i class="iconfont icon-share"></i>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="detail-vipShop-price">-->
        <!--唯品价 <small> {{item.ListProSmall}} </small>  {{item.ListDiscount}}-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="detail-pro-name">-->
      <!--<p>{{item.ListProName}}</p>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->
<template>
  <div class="detail-message">
    <div class="swiper-container banLeft">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img :src="item.ListProImg"></div>
        <div class="swiper-slide"><img :src="item.Listswiper1"></div>
        <div class="swiper-slide"><img :src="item.Listswiper2"></div>
        <div class="swiper-slide"><img :src="item.Listswiper3"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <router-link to="/shoplist"><p class="fanhui"><i class="iconfont icon-jiantouarrowhead7"></i></p>
    </router-link>
    <div class="detail-price">
      <div class="detail-promotion-price">
        <div class="detail-promotion-left">
          <span class="detail-bg-color">疯抢价</span>
          <span class="detail-true-price">￥{{item.ListProPrice}}</span>
        </div>
        <div class="detail-promotion-right">
          <i class="iconfont icon-collect"></i>
          <i class="iconfont icon-share"></i>
        </div>
      </div>
      <div class="detail-vipShop-price">
        唯品价 <small> {{item.ListProSmall}} </small>  {{item.ListDiscount}}
      </div>
    </div>
    <div class="detail-pro-name">
      <p>{{item.ListProName}}</p>
    </div>
  </div>
</template>

<script>
    import Swipercss from "../../../node_modules/swiper/dist/css/swiper.css"
    import $ from "jquery"
    import Swiper from "swiper"
    export default {

        name: "ShopDetailContentMessage",
      component:{Swipercss},
      props:["item"],
      mounted(){
        var swiper1 = new Swiper('.banLeft', {

        });
      }
    }
</script>

<style scoped>

</style>
