<template>
  <div class="dress-banner">
    <div class="dress-title">
      <img src="../../../static/image/dress-banner-title.jpg" alt="">
    </div>
    <div class="dress-banbox">
      <img :src="i" alt="" :key="index" v-for="(i,index) in shopcartBan.dressban">
    </div>
  </div>
</template>

<script>
    export default {
        name: "DressBanner",
        props:["shopcartBan"]
      // data(){
      //   return {
      //     dressban: [
      //       "../../../static/image/dress-banner-01.jpg",
      //       "../../../static/image/dress-banner-02.jpg",
      //       "../../../static/image/dress-banner-03.jpg",
      //       "../../../static/image/dress-banner-04.jpg",
      //       "../../../static/image/dress-banner-05.jpg",
      //       "../../../static/image/dress-banner-06.jpg",
      //       "../../../static/image/dress-banner-07.jpg",
      //       "../../../static/image/dress-banner-08.jpg",
      //       "../../../static/image/dress-banner-09.jpg"
      //     ]
      //   }
      // }
    }
</script>

<style scoped>

</style>
