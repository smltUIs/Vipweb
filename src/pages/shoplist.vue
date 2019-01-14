<template>
  <div class="list-box">
    <shop-list-header></shop-list-header>
    <!--<shop-list-screen></shop-list-screen>-->
    <shop-list-content :list="contents.shoplist"></shop-list-content>
    <shop-list-footer></shop-list-footer>
  </div>
</template>

<script>
    import ShopListHeader from "../components/shoplist/ShopListHeader";
    import ShopListContent from "../components/shoplist/ShopListContent";
    import ShopListScreen from "../components/shoplist/ShopListScreen";
    import ShopListFooter from "../components/shoplist/ShopListFooter";
    export default {
        name: "shoplist",
      components: {ShopListFooter, ShopListContent, ShopListHeader},
      data(){
        return{
          contents:[]
        }
      },
      mounted() {
        fetch("data/shoplists.json").then(res=>{
          res.json().then(data=>{
            // console.log(data.products)
            this.contents=data
            // console.log(this.contents)
          })
        })
      }
    }
</script>

<style>
  @import "../assets/css/iconfont.css";
  @import "../assets/css/VipShopList.css";
  .list-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
