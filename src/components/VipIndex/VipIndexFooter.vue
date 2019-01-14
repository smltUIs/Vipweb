<!--<template>-->
    <!--<div class="box">-->
        <!--<div class="shopCard"><i class="iconfont icon-cart"></i></div>-->
        <!--<div @click="goTop" ref="btn" class="goToTop"><i class="iconfont icon-direction-up"></i></div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--import $ from "jquery";-->
    <!--import iconfont from "../../assets/css/iconfont.css";-->
    <!--export default {-->
      <!--name: "VipIndexFooter",-->
      <!--components: {iconfont},-->
      <!--data() {-->
        <!--return {-->
          <!--isTop: true,-->
          <!--timer: null-->
        <!--}-->
      <!--},-->
      <!--methods: {-->
        <!--needScroll() {-->
          <!--let clientHeight = document.documentElement.clientHeight;-->
          <!--// console.log(clientHeight);-->
          <!--let obtn = this.$refs.btn;-->
          <!--window.onscroll = function () {-->
            <!--let osTop = document.documentElement.scrollTop || document.body.scrollTop;-->
            <!--// console.log(osTop);-->
            <!--if (osTop >= clientHeight) {-->
              <!--obtn.style.opacity = "1";-->
            <!--} else {-->
              <!--obtn.style.opacity = "0";-->
            <!--}-->
            <!--if (!this.isTop) {-->
              <!--clearInterval(this.timer)-->
            <!--}-->
            <!--this.isTop = false-->
          <!--}-->
        <!--},-->
        <!--goTop() {-->
          <!--let self = this;-->
          <!--self.timer = setInterval(function () {-->
            <!--let osTop = document.documentElement.scrollTop || document.body.scrollTop;-->
            <!--// console.log(osTop);-->
            <!--let ispeed = Math.floor(-osTop / 5);-->
            <!--document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;-->
            <!--self.isTop = true;-->
            <!--if (osTop === 0) {-->
              <!--clearInterval(self.timer)-->
            <!--}-->
          <!--}, 30)-->
        <!--}-->
      <!--},-->
      <!--mounted() {-->
        <!--this.needScroll()-->
      <!--}-->

    <!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--.box{-->
    <!--width: 100%;-->
    <!--height: 1px;-->
    <!--z-index: 1000;-->
    <!--background: transparent;-->
  <!--}-->
  <!--.shopCard,.goToTop{-->
    <!--width: .45rem;-->
    <!--height: .45rem;-->
    <!--background: #24272f;-->
    <!--border-radius: 50%;-->
    <!--display: flex;-->
    <!--align-items: center;-->
    <!--justify-content: center;-->
  <!--}-->
  <!--.shopCard i,.goToTop i{-->
    <!--color: #fff;-->
    <!--font-size: .23rem;-->
  <!--}-->
  <!--.box .shopCard{-->
    <!--position: fixed;-->
    <!--bottom: .2rem;-->
    <!--left: .2rem;-->
  <!--}-->
  <!--.box .shopCard i{-->
    <!--position: absolute;-->
    <!--top: .05rem;-->
    <!--left: .1rem;-->
  <!--}-->
  <!--.box .goToTop{-->
    <!--opacity: 0;-->
    <!--position: fixed;-->
    <!--bottom: .2rem;-->
    <!--right: .2rem;-->
  <!--}-->
<!--</style>-->
