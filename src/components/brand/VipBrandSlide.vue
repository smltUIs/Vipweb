<template>
  <div class="brand-lunbo">
    <div class="brand-img">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../static/image/brand-lunbo01.jpg"></div>
          <div class="swiper-slide"><img src="../../../static/image/brand-lunbo02.jpg"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "VipBrandSlide",
      mounted() {
        var swiper = new Swiper('.swiper-container', {
          spaceBetween: 30,
          centeredSlides: true,
          loop:true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        });
      }
    }
</script>

<style scoped>
  @import "../../../node_modules/swiper/dist/css/swiper.css";
</style>
