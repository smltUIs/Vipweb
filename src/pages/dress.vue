<template>
  <div class="dress-box">

    <div class="flexbox">
      <dress-nav :shopcartNav="shopcart"></dress-nav>
      <dress-banner :shopcartBan="shopcart"></dress-banner>
      <dress-list :shopcartList="shopcart"></dress-list>
    </div>
  </div>
</template>

<script>
    import shopcartApi from "../apis/shopcart";
    import DressHeader from "../components/dress/DressHeader";
    import DressNav from "../components/dress/DressNav";
    import DressBanner from "../components/dress/DressBanner";
    import DressFont from '../assets/css/iconfont.css';
    import DressCss from '../assets/css/dress.css'
    import DressList from "../components/dress/DressList";
    export default {
        name: "dress",
        components: {DressList, DressBanner, DressNav, DressHeader,DressCss,DressFont},
        data() {
          return {
            totalPrice: 0,
            shopcart: []
          }
        },
        methods: {
          _initgetshopcartData() {
            shopcartApi.getshopcartData(data => {
              this.shopcart = data;//data赋给shopcart[]
            })
          }
        },
        created() {
          this._initgetshopcartData()
        },
        mounted(){
        }
    }
</script>

<style scoped>
  body{
    background-color: #fff;
  }
  .dress-box{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .flexbox{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

</style>
