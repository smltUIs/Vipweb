<template>
  <!--轮播图-->
  <div class="m-container-swiper">
    <div class="swiper-container mom-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="(s,index) in imgs"><img :src="s" alt=""></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination swiper-doudou"></div>
    </div>
  </div>
</template>

<script>
    import SwiperCss from "../../../node_modules/swiper/dist/css/swiper.css";
    import $ from "jquery";
    import Swiper from "swiper"
    export default {
        name: "VipMomContainerSwiper",
        components:{SwiperCss},
        props:["momSwiper"],
        data(){
            return{
                "imgs":[
                  "../../../static/image/mom-s1.jpg",
                  "../../../static/image/mom-s2.jpg",
                  "../../../static/image/mom-s3.jpg",
                  "../../../static/image/mom-s4.jpg"]
            }
        },
        mounted(){
          // 轮播图
          $(function () {
            var swiper = new Swiper('.mom-swiper', {
              pagination: {
                el: '.swiper-doudou',
              },
              autoplay:true,
              loop:true,
              clickable:true
            });
          })
        }
    }
</script>

<style scoped>
  .m-container-swiper{
    width: 100%;
    height: 1.48rem;
    border-top: 1px solid #d4cac9;
  }
  .mom-swiper{
    position: relative;
  }
  .m-container-swiper .mom-swiper .swiper-wrapper .swiper-slide img{
    width: 100%;
    height: 1.48rem;
  }
  .mom-swiper .swiper-doudou{
    position: absolute;
  }
  .mom-swiper .swiper-doudou span{
    position: absolute;
    top: -.3rem;
    right: 0;
    width: .08rem;
    height: .08rem;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: -.1rem!important;
    text-align: right;
    margin-right: .1rem!important;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet-active{
    opacity: 1!important;
    background: #000!important;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets span{
    width: .08rem!important;
    height: .08rem!important;
    background: #a8a8ad!important;
  }
</style>
