<template>
    <div class="box">
        <vip-index-header v-if="VipIndexHeader != undefined" :indexHead="VipIndexHeader"></vip-index-header>
        <vip-beauty-container :beautyCon = VipBeautyContainer></vip-beauty-container>
        <!--<vip-index-footer></vip-index-footer>-->
    </div>
</template>

<script>
    import publicCss from "../assets/css/indexPublic.css";
    import iconfont from "../assets/css/iconfont.css";
    import VipIndexHeader from "../components/VipIndex/VipIndexHeader";
    import VipBeautyContainer from "../components/VipBeauty/VipBeautyContainer";
    import VipIndexFooter from "../components/VipIndex/VipIndexFooter";
    export default {
        name: "VipBeauty",
        components: {VipBeautyContainer, VipIndexHeader,iconfont,publicCss},
        data(){
          return {
            VipIndexHeader:[],
            VipBeautyContainer:[],
            info:[]
          }
        },
        created(){
          fetch("data/beautydata.json").then((res)=>{
            res.json().then((data)=>{
              this.info = data
              this.VipIndexHeader= data.beautyHeader;
              this.VipBeautyContainer= data.beautyContainer;
              console.log(this.info)
            })
          })
        }
    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /*justify-content: space-around;*/
  }
  html,body{
    height: 100%;
  }
</style>
