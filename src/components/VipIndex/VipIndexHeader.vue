<template>
      <!--index-header-->
      <div class="fixedBox">
        <div class="index-header">
          <div class="index-header-top">
            <div class="index-header-top-left">
              <router-link to="/VipRegister"><span class="index-header-login" v-show="loginshow">登录</span></router-link>
              <i class="iconfont icon-man" v-show="manshow"></i>
            </div>
            <router-link to="/search"><input class="in" type="text" placeholder="搜索品牌或商品"></router-link>
            <router-link to="/classify" class="index-changeColor"><i class="iconfont icon-leimupinleifenleileibie"></i></router-link>
          </div>
          <div class="index-header-bar">
            <ul class="index-header-bar-menu">
              <li :key1="index" v-for="(memu1,index) in indexHead.indexHeaderMenu" @click="addBorder(index)"><router-link :to="memu1.route">{{memu1.title}}</router-link></li>
              <!--<li :class="{active:index == dynamic}" @click="changeBor(index)" :key="index" v-for="(memu1,index) in indexHead.indexHeaderMenu">-->
              <!--<router-link :to="memu1.route">{{memu1.title}}</router-link>-->
              <!--</li>-->
            </ul>
            <div class="index-header-bar-side">
              <i class="iconfont icon-icon_arrow_bottom"></i>
            </div>
            <!--隐藏区域-->
            <div class="index-header-show">
              <div class="index-header-show-top">
                <h4>精选推荐</h4>
                <img class="upjt" :src="indexHead.upjt" alt="">
              </div>
              <ul class="index-show-list">
                <li @click="addColor(index2)"  class="one" :key="'one-'+index2" v-if="menu2" v-for="(menu2,index2) in indexHead.indexShowList">
                  <router-link :to="menu2.route"><img :src="menu2.img" alt=""><p>{{menu2.pCon}}</p>
                  </router-link>
                </li>
              </ul>
              <div class="index-header-show-cen">
                <h4>更多推荐</h4>
                <ul class="index-show-list2">
                  <li class="two" :key="'two-'+index3" v-for="(memu3,index3) in indexHead.indexShowList2"><a href="">{{memu3}}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    import  $ from  "jquery";
    export default {
        name: "VipIndexHeader",
        props:["indexHead"],
        data(){
          return{
            item:"666",
            loginshow:true,
            manshow:false
          }
        },

        methods:{
          addBorder:function (index) {
            var ul = document.getElementsByClassName("index-header-bar-menu");
            // console.log(ul);
            var lis = ul[0].children;//所有的li
            // console.log(lis);

            if(lis){
              for(var i=0;i<lis.length;i++){
                lis[i].index = i;
                lis[i].onclick = li_onclick;
              }
              function li_onclick() {
                for(var j=0;j<lis.length;j++){
                    lis[j].firstChild.style.borderBottom = 'none';
                    lis[j].firstChild.style.color = '#5d6471';
                }
                this.firstChild.style.borderBottom = '3px solid #d13ca2';
                this.firstChild.style.color = '#d13ca2';
                this.firstChild.style.marginBottom = "-.08rem";
                // console.log(this.index);
              }
            }
          },
          addColor:function (index) {
            var list = document.getElementsByClassName("index-show-list");
            var listLis = list[0].children;//所有的li

            if(listLis){
              for(var i=0;i<listLis.length;i++){
                listLis[i].index = i;
                listLis[i].onclick = li_onclick;
              }
              function li_onclick() {
                for(var j=0;j<listLis.length;j++){
                  listLis[j].firstChild.lastChild.style.color = '#585c64';
                }
                this.firstChild.lastChild.style.color = '#d13ca2';
                // console.log(this.index);
              }
            }
          }
        },
        mounted(){
          //点击箭头隐藏于显示
          $(".index-header-show").css({"display":"none"});
          $(".icon-icon_arrow_bottom").on("click",function () {
            $(".index-header-show").css({"display":"block"});

            if($(".index-header-show").css("display") == "block"){
              $(".upjt").on("click",function () {
                $(".index-header-show").css({"display":"none"});
              });
            }
          });

          /**
           * 获取参数username
           */
          // console.log(this.$route.query.username)
          if(this.item==this.$route.query.username){
            this.manshow=true
            this.loginshow=false
          }
        }
    }
</script>

<style scoped>
  .fixedBox{
    /*width:  3.75rem!important;*/
    height: .8rem;
    width: 100%;
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*z-index: 1000;*/
  }
  .index-header{
    width:100%;
    height: .8rem;
  }
  .index-header-bar{
    width: 100%;
    padding-top: 0;
    float: left;
  }
  .index-header-bar-menu{
    margin-top: -.01rem;
    display: flex;
    background: #f9f9fa;
  }
  /*.index-header-bar-menu li:first-child a{*/
    /*border-bottom: 2px solid #d13ca2;*/
    /*color: #d13ca2;*/
    /*margin-bottom: -.08rem;*/
  /*}*/
  .index-header-bar-menu li a.active{
    border-bottom: 3px solid #d13ca2;
    color: #d13ca2;
    margin-bottom: -.08rem;
  }
  .index-header-bar-menu li{
    float: left;
    margin-right: .25rem;
  }
  .index-header-top .in{
    font-size: .13rem;
  }
  .index-header-bar-side{
    position: absolute;
    right: 0rem;
    top: 0rem;
    width: .37rem;
    height: .3rem;
  }
  .index-header-show{
    /*width: 100%;*/
    top: -.04rem;
    box-sizing: border-box;
  }

  .index-changeColor{
    color: #000;
  }
</style>
