<template>
  <!--今日特卖-->
  <div class="b-brandBox">
    <p class="b-specialSale">{{beautyConBrand.beautySpecialSale}}</p>
    <ul class="b-brandList">
      <li :key="index" v-for="(list,index) in beautyConBrand.brandList">
        <a href="">
          <img :src="list.img" alt="">
          <div class="b-brandInfo">
            <p class="b-brandinfo"><span>{{list.disc}}</span>{{list.brandInfo}}</p>
            <small class="days">{{list.days}}</small>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "VipBeautyContainerBrand",
        props:["beautyConBrand"]
    }
</script>

<style scoped>
  /*今日特卖*/
  .b-brandBox{
    width: 100%;
  }
  .b-brandBox .b-specialSale{
    width: 100%;
    background: #fff;
    color: #000;
    font-size: .16rem;
    line-height: 1;
    padding: .22rem 0 .1rem;
    text-align: center;
  }
  .b-brandList {
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .b-brandList li{
    width: 100%;
    height: 2.44rem;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  .b-brandList li:first-child{
    margin-top: .1rem;
  }
  .b-brandList li a{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .b-brandList li a img{
    width: 100%;
    height: auto;
  }
  .b-brandList .b-brandInfo{
    width: 100%;
    height: .45rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding-top: .1rem;
  }
  .b-brandList .b-brandInfo .b-brandinfo{
    width: 80%;
    font-size: .15rem;
    color: #222;
    font-weight: 600;
    margin-left: .15rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .b-brandList .b-brandInfo .days{
    color: #98989f;
    font-size: .08rem;
    margin-right: .15rem;
  }

</style>
