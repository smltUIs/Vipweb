<template>
  <div class="shopcart-product">
    <div class="shopcart-product-part">
      <span>精选特卖</span>
    </div>
    <div class="shopcart-product-box" v-show="pid==pindex" :key="pid" v-if="shopcartProduct.products" v-for="(i,pid) in shopcartProduct.products">
      <div class="shopcart-product-img-box">
        <img :src="i.ListProImg">
      </div>
      <div class="shopcart-product-info-box">
        <h3 class="shopcart-product-describe">{{i.ListProName}}</h3>
        <h4 class="shopcart-product-brand">{{i.shopcartproductBrand}}</h4>
        <h4 class="shopcart-product-size">{{i.shopcartproductSize}}</h4>
        <h4 class="shopcart-product-decrease">{{i.shopcartproductDecrease}}</h4>
      </div>
      <div class="shopcart-product-price-box">
        <span>￥</span><h3 id="shopcart-product-price-box-h4">{{i.ListProPrice}}</h3>
        <h4>{{i.ListProSmall}}</h4>
      </div>
      <div class="shopcart-product-num-box">
        <div class="shopcart-product-nums">
          <a class="iconfont icon-MINUS" @click.prevent.stop="subtract(pid)" v-on:click="totalspro"></a>
          <span class="shopcart-product-num" id="shopcart-product-num">{{i.number}}</span>
          <a class="iconfont icon-add" @click.prevent.stop="add(pid)" v-on:click="totals"></a>
          <i class="iconfont icon-close-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import bus from "../../assets/js/bus"
    export default {
      name: "VipShopCartProduct",
      props: ["shopcartProduct", "add", "subtract", "pid", "pindex","numm"],
      data(){
        return {
          number:"",
          price:"",
          totalPrice:""
        }
      },
      created(){

      },
      methods:{
        totals(){
          let domObjnum = document.getElementById("shopcart-product-num")
          let domObjprice = document.getElementById("shopcart-product-price-box-h4")
          // this.number = domObjnum.innerHTML
          this.price = domObjprice.innerHTML

          // this.numm=this.numm++

          let totalnum = (parseInt(this.numm)+1)
          let myprice = this.price *totalnum
          console.log(totalnum)
          console.log(this.price)

          this.totalPrice = myprice
          this.$emit("totals",this.totalPrice)
        },
        totalspro:function(){
          let domObjnum = document.getElementById("shopcart-product-num")
          let domObjprice = document.getElementById("shopcart-product-price-box-h4")
          this.price = domObjprice.innerHTML
          let totalnum = (parseInt(this.numm)-1)
          console.log(totalnum)
          console.log(this.price)
          let myprice = this.price *totalnum
          this.totalPrice = myprice
          this.$emit("totalspro",this.totalPrice)
        }
        // sendData(){
        //   let domObjnum = document.getElementById("shopcart-product-num")
        //   let domObjprice = document.getElementById("shopcart-product-price-box-h4")
        //   // this.number = domObjnum.innerHTML
        //   this.price = domObjprice.innerHTML
        //
        //   // this.numm=this.numm++
        //
        //   let totalnum = (parseInt(this.numm)+1)
        //     let myprice = this.price *totalnum
        //
        //   this.totalPrice = myprice
        //   // console.log(totalnum)
        //   // console.log(myprice)
        //   // console.log(this.totalPrice)
        //   // return
        //   // bus.$emit("sendMsg",this.totalPrice)
        // }
      },
      mounted(){
        // this.number = this.$route.query.number
        // console.log(this.number)
        // this.sendData()
      }
    }
</script>

<style scoped>
  .shopcart-product-price-box span{
    float: left;
    margin-left: .2rem;
  }
#shopcart-product-price-box-h4{
  float: left;
}
</style>
