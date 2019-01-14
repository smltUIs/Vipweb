<template>
  <!--今日特卖-->
  <div class="index-hot-sale">
    <h2>{{hotSale.hotSaleH2}}</h2>
    <ul>
      <li :key="index" v-for="(list,index) in hotSale.hotSaleList">
        <a href=""><img :src="list.goodsImg" alt=""></a>
        <div class="index-hot-info">
          <div class="index-hot-title">
            <p class="index-hot-goodsTit">{{list.goodsTit}}</p>
            <small>{{list.days}}</small>
          </div>
          <div class="index-hot-detail">
            <span>{{list.disc}}</span><small> 折起</small>&nbsp;&nbsp;|&nbsp;&nbsp;{{list.hotDetailInfo}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "VipIndexContentHotSale",
        props:["hotSale"]
    }
</script>

<style scoped>
  /*今日特卖*/
  .index-hot-sale {
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .index-hot-sale h2{
    font-size: .16rem;
    color: #2f2f2f;
    margin-top: .2rem;
    margin-bottom: .22rem;
  }
  .index-hot-sale ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .index-hot-sale ul li{
    width: 3.5rem;
    height: 2.3rem;
    display: flex;
    flex-direction: column;
    justify-content: left;
    border-radius: 10px;
    border: 1px solid #eaebed;
    margin-bottom: .13rem;
  }
  .index-hot-sale ul li a img{
    width: 100%;
    height: 1.68rem;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
  }
  .index-hot-sale .index-hot-info{
    width: 100%;
    height: .65rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: .1rem;
    border-bottom-right-radius: .1rem;
  }
  .index-hot-sale .index-hot-info .index-hot-title{
    display: flex;
    justify-content: space-between;
    margin-left: .14rem;
  }
  .index-hot-sale .index-hot-info .index-hot-title p{
    color: #211912;
    font-size: .14rem;
    margin: .17rem 0 .1rem 0;
    font-weight: 600;
  }
  .index-hot-sale .index-hot-info .index-hot-title small{
    color: #aeb8c6;
    font-size: .12rem;
    margin-top: .17rem;
    margin-right: .11rem;
  }
  .index-hot-sale .index-hot-info .index-hot-detail{
    color: #87898e;
    font-size: .12rem;
    margin-left: .14rem;
    margin-bottom: .1rem;
  }
  .index-hot-sale .index-hot-info .index-hot-detail span{
    color: #e358a5;
  }
  .index-hot-sale .index-hot-info .index-hot-detail small{
    color: #6a7079;
  }

</style>
