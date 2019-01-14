<template>
  <section class="detail-content">
   <shop-detail-content-message :item="msg"></shop-detail-content-message>
    <div class="detail-discount">
      <div class="detail-discount-body">
        <div class="detail-viphua">
          <p><span>唯品花</span>开通唯品花首单立减20元</p>
          <p>领取</p>
        </div>
        <div class="detail-vipbi">
          <p><span>唯品币</span>购买最多可获458个唯品币</p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="detail-size">
      <div class="detail-size-tit">
        <span> 尺码</span><span>查看尺码表 </span>
      </div>
      <div class="detail-size-body">
        <ul id="detail-size-body-size">
          <li class="sizeLis" @click="changeSize(index)" :key="index" v-for="(p,index) in allSize"> {{p.size}}</li>

          <div id="popBox" class="popBox">
            <div class="popTable" v-for="(table,index) in allSize" v-show="index==num">
              <table>
                <tr>
                  <td>尺码</td>
                  <td>肩宽</td>
                  <td>胸围</td>
                  <td>衣长</td>
                  <td>袖长</td>
                </tr>
                <tr>
                  <td>{{table.size}}</td>
                  <td>{{table.shoulder}}</td>
                  <td>{{table.chest}}</td>
                  <td>{{table.clothLength}}</td>
                  <td>{{table.outsideSleeve}}</td>
                </tr>
              </table>
            </div>
            <p class="popClose">
              ×
            </p>
          </div>
        </ul>
      </div>
    </div>
    <div class="detail-delivery">
      <!--<div class="detail-pro-address">-->
        <!--<h1>配送至</h1>-->
        <!--<p>请选择地址<i class="iconfont icon-gps"></i></p>-->
      <!--</div>-->
      <detail-address></detail-address>
      <div class="detail-service">
        <ul>
          <li><i class="iconfont icon-success"></i>唯品会发货</li>
          <li><i class="iconfont icon-success"></i>7天包退</li>
          <li><i class="iconfont icon-success"></i>退货返运费</li>
        </ul>
        <p><i class="iconfont icon-more"></i></p>
      </div>
    </div>
    <div class="detail-promise">
      <p>查看该品牌更多商品 ></p>
      <img src="@/../static/image/list-more.png" alt="">
    </div>
  </section>
</template>

<script>

    import ShopDetailContentMessage from "./ShopDetailContentMessage";
    import $ from "jquery"
    import DetailAddress from "./DetailAddress";
    export default {
      name: "ShopDetailContent",
      components: {DetailAddress, ShopDetailContentMessage},
      props: ["msg"],
      data() {
        return {
          showchose: false,
          num: -1,
          isShow: false,
          allSize: [
            {
              size: "M(160)",
              shoulder: "40",
              chest: "101",
              clothLength: "96",
              outsideSleeve: "60"
            },
            {
              size: "L(165)",
              shoulder: "41",
              chest: "105",
              clothLength: "97",
              outsideSleeve: "61"
            },
            {
              size: "XL(170)",
              shoulder: "42",
              chest: "109",
              clothLength: "98",
              outsideSleeve: "62"
            },
            {
              size: "2XL(175)",
              shoulder: "43",
              chest: "113",
              clothLength: "98",
              outsideSleeve: "63"
            }
          ]
        }
      },
      mounted(){
        // console.log("hhhh")
        // let popClose = document.getElementsByClassName("popClose")
        // console.log(popClose)
        // let popBox = document.getElementsByClassName("popBox")
        // console.log(popBox.length)
        // for(let i=0; i<popBox.length; i++){
        //   console.log("啦啦啦")
        //   let _this = this
        //   popClose.onclick=function(){
        //     console.log("哈哈")
        //     _this[i].style.display = "none"
        //   }
        // }



      //   $(".sizeLis").each(function(i){
      //     $(this).click(function(){
      //       console.log($(this).parent("ul").children(".popBox"))
      //       $(this).parent("ul").children(".popBox").css({
      //         "display":"block",
      //         "opacity":"1",
      //         "top": "-.9rem"
      //       })
      //       if(i>2){
      //         $(this).parent("ul").children(".popBox").css({
      //           "top":"-0.4rem"
      //         })
      //       }
      //     });
          $(".popClose").click(function(){
            console.log("啦啦啦")
            // console.log($(this).parent(".popTable"))
            $(".popTable").css({
              "display":"none",
              // "opacity":"0"
            })
            $(this).css({"display":"none"})
          });
      //   })
      },
      methods: {
        changeSize: function (index) {

          // console.log("gghh")
          this.num = index
          console.log(this.num)
          let popTable = document.getElementsByClassName("popTable")

          if(index==3){
            // popTable[0].style.top="0.4rem"
          }
          let popClose = document.getElementsByClassName("popClose")
          popClose[0].style.display = "block"



          let domobj = document.getElementById("detail-size-body-size");
          // console.log(domobj)
          let lis = domobj.children;
          if(lis){
            for(let i=0; i<lis.length; i++){
              lis[i].index = i;
              lis[i].onclick = li_click
            }
            function li_click(){
              for(let j=0; j<lis.length; j++){
                lis[j].style.backgroundColor = "#fff"
                lis[j].style.borderColor="#d7d7d7"
                lis[j].style.color="#19100c"
              }
              this.style.borderColor = "#dd3d97"
              this.style.color="#dd3d97"
            }
          }

        }
      }
    }
</script>

<style scoped>

  .detail-size .detail-size-body  .popBox{
    width: 90%;
    position: absolute;
    left: 5%;


    border-radius: .03rem;
    font-size: .12rem;
    line-height: .3rem;
    /*display: none;*/
    top:-.9rem;
  }
  .detail-size-body  .popBox .popTable{
    position: relative;
    width: 100%;
    border: 1px solid #999;
  }
  #detail-size-body-size{
    position: relative;
  }
.popClose{
    width: .3rem;
    height: .3rem;
    background: #fff;
    border: 1px solid #999;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    top: 0px;
    transform: translate(50%,-50%);
    z-index: 666;
    text-align: center;
    font-size: .4rem;
    line-height: .3rem;
    font-weight: 100;
    color: #999;
  display: none;
  /*position: absolute;*/
  /*top:-.86rem;*/
  /*right: .2rem;*/
  }
  .detail-size .detail-size-body  .popBox table{
    width: 100%;
    overflow: hidden;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: center;
    background: #fff;
  }
  .detail-size .detail-size-body  .popBox table tr{
    height:.4rem;
  }
  .detail-size-body  .popBox table tr td{
    border-top:1px solid #e0e2e4;
  }
  .detail-size .detail-size-body:after{
    display:block;
    content:'';
    clear:both;
    height:0;
    overflow:hidden;
  }
  .detail-size .detail-size-body ul li span{
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    color: #19100c;
    text-align: center;
    line-height: .3rem;
    border:1px solid #d7d7d7;
    border-radius:.03rem ;
  }
</style>
