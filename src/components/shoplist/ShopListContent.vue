<template>
  <div class="list-big-box">
  <div class="list-screen">
    <ul>
      <li><span>价格</span><span class="list-ico"><i class="iconfont icon-jiantou11" @click="orderFn('ListProPrice', false)"></i><i class="iconfont icon-jiantou12" @click="orderFn('ListProPrice', true)"></i></span>
      </li>
      <li><span>折扣</span><span class="list-ico"><i class="iconfont icon-jiantou11"  @click="orderFn('ListDiscount', false)"></i><i class="iconfont icon-jiantou12" @click="orderFn('ListDiscount', true)"></i></span>
      </li>
      <li><span>品牌</span><i class="iconfont icon-mark-o"></i></li>
      <li><span>筛选</span><i class="iconfont icon-screen"></i></li>
    </ul>
  </div>
  <section class="list-content" id="bar">
  <div class="list-shoplist-box" v-show="index==beforeIdx" :key="index" v-for="(shoplist,index) in list">
    <div class="list-body" v-show="index==idx" :key="index" v-for="(shop,index) in shoplist.shops">
      <div class="list-product" :key="pindex" v-for="(p,pindex) in shop.products">
        <router-link :to="{path:'/shopdetail',query:{xxx:beforeIdx,num:idx,pro:pindex}}">
            <img  :src="p.ListProImg" alt="">
          <p class="list-pro-price"><span class="list-pro-rob">{{p.ListProRob}}</span>￥{{p.ListProPrice}}<small><span>
                    ￥  {{p.ListProSmall}}</span> {{p.ListDiscount}}折</small>
          </p>
          <p class="list-pro-name">
            {{p.ListBrand}} |
            {{p.ListProName}}
          </p>
        </router-link>
      </div>
    </div>
  </div>
  </section>
  <div class="list-up">
    <p><i class="iconfont icon-cart"></i></p>
    <b  @click="goTop" ref="btn"><i class="iconfont icon-direction-up" ></i></b>
  </div>
  </div>
</template>
<script>
  let timer=null;
    export default {
      name: "ShopListContent",
      props: ["list"],
      data(){
        return {
          isTop: true,
          idx:"",
          beforeIdx:"",
          index:"",
          letter:"",
          original:"",
          allData:""
        }
      },
      created(){
        this.getData()
      },

      methods:{
        getData:function(){
          // this.allData = this.list
          // console.log(this.allData)
            // for(let i=0; i<this.list.length; i++){
            //   console.log("啦啦")
            //   let shopsData = this.list[i]
            //   console.log(shopsData)
            // }
            // return shopsData
        },
        orderFn(letter,original){
          // console.log(this.lists)
          for(var i=0; i<this.list.length;i++){
            // console.log(this.list[i])
            for(var j=0; j<this.list[i].shops.length; j++){
              console.log("啦啦啦")
              // console.log(this.list[i].shops[j])
              // console.log(this.list[i].shops[j].letter)
              // console.log(this.list[i].shops[j].original)
              this.list[i].shops[j].letter = letter; //排序字段 price or sales
              this.list[i].shops[j].original = original; //排序方式 up or down
            }
          }
        },
        needScroll () {
          let clientHeight = document.documentElement.clientHeight
          let obtn = this.$refs.btn
          // console.log(clientHeight)
          window.onscroll = function () {
            let osTop = document.documentElement.scrollTop || document.body.scrollTop

            // console.log(osTop)
            if (osTop >= clientHeight) {

              // console.log(123)
              obtn.style.opacity = '0.8'
            } else {
              obtn.style.opacity = '0'
            }
            if (!this.isTop) {
              clearInterval(timer)
            }
            this.isTop = false
          }
        },
        goTop () {
          timer = setInterval(function () {
            let osTop = document.documentElement.scrollTop || document.body.scrollTop
            let ispeed = Math.floor(-osTop / 5)
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
            this.isTop = true
            if (osTop === 0) {
              clearInterval(timer)
            }
          }, 30)
        }
      },
      mounted(){
        this.needScroll()

        // console.log(this.shopcopy)
        this.beforeIdx = this.$route.query.xxx
        // console.log(this.beforeIdx)
        this.idx = this.$route.query.num
        // console.log(this.idx)
      },
      computed: {
        lists: function () {

          var _this = this;
          let arr = []
          for(let i=0; i<this.list.length; i++){
            for(let j=0; j<this.list[i].shops.length; j++){
              if (this.list[i].shops[j].letter != '') {
                this.list[i].shops[j].products.sort(function (a, b) {
                  if (_this.list[i].shops[j].original) {
                    return b[_this.list[i].shops[j].letter] - a[_this.list[i].shops[j].letter];
                  } else {
                    return a[_this.list[i].shops[j].letter] - b[_this.list[i].shops[j].letter];
                  }
                });
              }
              arr = this.list[i].shops[j].products
              console.log("哈哈哈")
            }
          }
            return arr;
        }
      }
    }
</script>

<style>
.list-big-box{
  /*overflow:auto;*/
  flex: 1;
  padding-top: .43rem;
}
.list-big-box .list-up p i{
  /*display: block;*/
  font-size: .24rem;
  color: #fff;
position:absolute;
  left: -.02rem;
  top:0rem;
}
.list-big-box .list-up b i{
  position:absolute;
  left: -.02rem;
  top:0rem;
}
  .list-shoplist-box{
    width: 100%;
    overflow: hidden;
  }
</style>
