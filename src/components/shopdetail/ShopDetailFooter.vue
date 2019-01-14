<template>
  <footer class="detail-foot">
    <div class="detail-cart-box" @click="jumpEmpty">
      <!--<router-link :to="{path:'/VipShopCart',query:{xxx:idx,num:index,pro:pindex,number:number}}">-->
        <i class="iconfont icon-cart"></i>
        <span v-show="isShow"><a href="javascript:">{{number}}</a></span>
      <!--</router-link>-->
    </div>
    <div class="detail-addcart-box" @click="insertshopcart">
      加入购物车
    </div>
    <div class="detail-alert" v-show="boxShow">前方人山人海，请稍后重试</div>
  </footer>
</template>

<script>
    export default {
        name: "ShopDetailFooter",
        data(){
          return{
            idx:"",
            index:"",
            pindex:"",
            number:0,
            isShow:false,
            boxShow:false
          }
        },
        methods:{
          jumpEmpty:function(){
            if(this.isShow==false){
              this.$router.push({path:"/VipShopCartEmpty"})
            }else{
              this.$router.push({path:"/VipShopCart",query:{xxx:this.idx,num:this.index,pro:this.pindex}})
            }
          },
          insertshopcart:function(){
            this.number++
            if(this.number>=1){
              this.number=1
              this.isShow = true
              this.boxShow = true
              // if(this.number>=4){
              //   this.boxShow = true
              //   this.number=4
              // }
            }
          }
        },
        mounted(){
          this.idx = this.$route.query.xxx
          this.index = this.$route.query.num
          this.pindex = this.$route.query.pro

        }
    }
</script>

<style scoped>
  .detail-foot .detail-cart-box i{
    font-size: .25rem;
    color: #383838;
    display: block;
    margin-top:.1rem;
    position: absolute;
    bottom:.04rem;
    left:.3rem;
    /*float: left;*/
  }
  .detail-cart-box span{
    width: .18rem;
    height: .18rem;
    border-radius:50%;
    display: block;
    background-color: #dd3d97;
    float: left;

    color: #555;
    left:.56rem;
    position: absolute;
    text-align: center;
    vertical-align: middle;
  }
  .detail-cart-box span a{
    color: #ddd;
    font-size: .16rem;
    position: absolute;
    top:-.1rem;
    left:.04rem;

  }
  .detail-alert{
    position: fixed;
    bottom:1rem;
    font-size: .14rem;
    color: #ccc;
    background-color: #0a2525;
    -webkit-border-radius: .04rem;
    -moz-border-radius: .04rem;
    border-radius: .04rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding:.1rem .15rem .1rem .15rem;
    left: .84rem;
  }
</style>
