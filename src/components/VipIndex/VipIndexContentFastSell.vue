<template>
  <!--唯品快抢-->
  <div class="index-fast-sell">
    <div class="index-timeSpan">
      <p>早<em class="endTime">10</em>点场&nbsp;&nbsp;|&nbsp;&nbsp;还剩
        <span class="hour"></span> :
        <span class="min"></span> :
        <span class="sec"></span>
      </p>
    </div>
    <ul class="index-goodsList">
      <li :key="index" v-for="(list,index) in fastSell.fastSellGoodsList">
        <router-link :to="list.route"><img :src="list.goodsImg" alt=""></router-link>
        <div class="index-goodsPrice">
          <span class="index-fast-span">{{list.fastSpan}}</span>
          <span class="index-fast-price">￥{{list.nowPrice}}</span>
        </div>
        <p class="index-fast-oddPrice">￥{{list.oldPrice}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    import $ from  "jquery";
    export default {
        name: "VipIndexContentFastSell",
        props:["fastSell"],
        mounted(){
          var  endTime = new Date('2019-1-15 00:00:00');
          this._inter = setInterval(time,1000);
          function time(){
            var startTime = new Date();
            //获取时间戳
            var c = endTime.getTime() - startTime.getTime();//毫秒
            c = c/1000;
            var sec = parseInt(c%60);
            var min = parseInt(c/60)%60;
            var hour = parseInt(c/3600)%24;
            // var day = parseInt((c/3600/24));
            // document.querySelector(".days").innerHTML=day;
            document.querySelector(".hour").innerHTML=convert(hour);
            document.querySelector(".min").innerHTML=convert(min);
            document.querySelector(".sec").innerHTML=convert(sec);
          }
          time();

          function convert(num) {
            if(num < 10){
              return "0" + num;
            }else{
              return num;
            }
          }
        },
        beforeDestroy(){
          // console.log("清除定时器");
          clearInterval(this._inter);
        }
    }
</script>

<style scoped>
  /*唯品快抢*/
  .index-fast-sell{
    width: 100%;
    height: 2.07rem;
    background: url("../../../static/image/index-fast-mail.png") left top no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    /*overflow: hidden;*/
  }
  .index-timeSpan{
    margin-top: .42rem;
  }
  .index-timeSpan p{
    font-size:.13rem;
    color: #3d3c43;
  }
  em{
    font-style: normal;
  }
  .index-timeSpan p span{
    display: inline-block;
    width: .14rem;
    height: .14rem;
    line-height: .14rem;
    background: #000000;
    font-size: .06rem;
    color: #fff;
    text-align: center;
    margin-top: .01rem;
  }
  .index-goodsList{
    width: 100%;
    display: flex;
    /*margin-left: .2rem;*/
    padding-left: .1rem;
    margin-top: .1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .index-goodsList li{
    width: .9rem;
    height: 1.24rem;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  .index-goodsList li a img{
    width: .82rem;
    height: .82rem;
  }
  .index-goodsPrice{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: .07rem;
  }
  .index-fast-span{
    height: .15rem;
    line-height: .15rem;
    background: #de3991;
    color: #ffffff;
    font-size: .05rem;
    display: inline-block;
    text-align: center;
    margin-right: .05rem;
    padding: 0 .05rem;
  }
  .index-fast-price{
    display: inline-block;
    color: #00000a;
    font-size: .1rem;
  }
  .index-fast-oddPrice {
    color: #98969d;
    font-size: .1rem;
  }
</style>
