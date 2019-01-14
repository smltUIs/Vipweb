<template>
  <div class="detail-box">
    <shop-detail-content :msg="contents"></shop-detail-content>
    <shop-detail-footer></shop-detail-footer>
  </div>
</template>

<script>
    import ShopDetailContent from "../components/shopdetail/ShopDetailContent";
    import ShopDetailFooter from "../components/shopdetail/ShopDetailFooter";
    export default {
        name: "shopdetail",
      components: {ShopDetailFooter, ShopDetailContent},
      data(){
        return{
          contents:[]
        }
      },
      mounted() {
        let xxx=this.$route.query.xxx
        let num = this.$route.query.num
        let pro = this.$route.query.pro
        fetch("data/shoplists.json").then(res=>{
          res.json().then(data=>{
            // console.log(data.products)
            this.contents=data.shoplist[xxx].shops[num].products[pro]
            // console.log(this.contents)
          })
        })
      }
    }
</script>

<style>
  @import "../assets/css/iconfont.css";
  @import "../assets/css/VipShopDetails.css";
  .detail-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
