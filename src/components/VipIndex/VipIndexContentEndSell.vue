<template>
  <!--最后疯抢-->
  <div class="index-end-sell">
    <ul>
      <li :key="index" v-for="(list,index) in endSell.endSellList">
        <a href="">
          <img :src="list.bigImg" alt="">
          <div class="index-shadow">
            <img :src="list.smallImg" alt="">
            <p class="discount">{{list.discount}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "VipIndexContentEndSell",
        props:["endSell"]
    }
</script>

<style scoped>
  /*最后疯抢*/
  .index-end-sell{
    width: 100%;
    background: url("../../../static/image/index-hot-end.jpg") left top no-repeat;
    background-size: 100% 100%;
  }
  .index-end-sell ul{
    padding: .7rem .12rem .12rem .08rem;
    display: flex;
    box-sizing: border-box;
  }
  .index-end-sell ul li{
    margin-right: .09rem;
  }
  .index-end-sell ul li:last-child{
    margin-right: 0;
  }
  .index-end-sell ul li a{
    display: flex;
    width: 1.13rem;
    height: 1.45rem;
    flex-direction: column;
    position: relative;
  }
  .index-end-sell ul li a img{
    width: 100%;
    height: 100%;
  }
  .index-end-sell ul li a .index-shadow{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: .79rem;
    left: .3rem;
  }
  .index-end-sell ul li a .index-shadow img{
    width: .6rem;
    height: .3rem;
  }
  .index-end-sell ul li a .index-shadow .discount{
    color: #fe5e8f;
    font-size: .13rem;
  }
</style>
