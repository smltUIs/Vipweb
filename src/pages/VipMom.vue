<template>
    <div class="box">
        <vip-index-header v-if="VipIndexHeader != undefined" :indexHead="VipIndexHeader"></vip-index-header>
        <vip-mom-container :momContain="VipMomContainer"></vip-mom-container>
        <!--<vip-index-footer></vip-index-footer>-->
    </div>
</template>

<script>
    import publicCss from "../assets/css/indexPublic.css";
    import iconfont from "../assets/css/iconfont.css";
    import VipIndexHeader from "../components/VipIndex/VipIndexHeader";
    import VipMomContainer from "../components/VipMom/VipMomContainer";
    import VipIndexFooter from "../components/VipIndex/VipIndexFooter";
    export default {
        name: "VipMom",
        components: {VipMomContainer, VipIndexHeader,publicCss,iconfont},
        data(){
        return {
            VipIndexHeader:[],
            VipMomContainer:[],
          }
        },
        created(){
          fetch("data/momdata.json").then((res)=>{
            res.json().then((data)=>{
              this.VipIndexHeader= data.momContainer.momHeader;
              this.VipMomContainer= data.momContainer;
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
