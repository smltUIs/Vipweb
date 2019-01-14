<template>
  <!--VipRush-header-->
  <div class="VipRush-header">
    <router-link to="/"><div class="VipRush-header-left"></div></router-link>
      <div class="VipRush-header-center">
          <h1 class="VipRush-header-center-tips">{{VipRushHeader.VipRushTips}}</h1>
      </div>
    <router-link to="/"><div class="VipRush-header-right"></div></router-link>
  </div>
</template>

<script>
    export default {
      name: "VipRushHeader",
      data() {
        return {
          VipRushHeader: {
            VipRushTips:"唯品快抢·直击裸价"
          }
        }
      }
    }
</script>

<style scoped>

</style>
