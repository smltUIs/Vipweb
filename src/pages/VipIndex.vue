<template>
    <div class="box">
      <vip-index-header v-if="VipIndexHeader != undefined" :indexHead="VipIndexHeader"></vip-index-header>
      <vip-index-content :indexContent="VipIndexContent"></vip-index-content>
      <!--<vip-index-footer></vip-index-footer>-->
    </div>
</template>

<script>
  import publicCss from "../assets/css/indexPublic.css";
  import iconfont from "../assets/css/iconfont.css";
  import VipIndexHeader from "../components/VipIndex/VipIndexHeader";
  import VipIndexContent from "../components/VipIndex/VipIndexContent";
  import VipIndexFooter from "../components/VipIndex/VipIndexFooter";
  export default {
    name: "VipIndex",
    components: { VipIndexContent, VipIndexHeader,iconfont,publicCss},
    data(){
      return {
        VipIndexHeader:[],
        VipIndexContent:[],
      }
    },
    created(){
      fetch("data/indexdata.json").then((res)=>{
        res.json().then((data)=>{
          this.VipIndexHeader= data.indexHeader;
          this.VipIndexContent= data.indexContent;
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
    /*display: flex;*/
    /*justify-content: space-around;*/
  }
  html,body{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
