<template>
    <!--VipRush-footer-->
    <div class="VipRush-footer">
      <div class="VipRush-footer-01">
        <img class="VipRushMore" :src="VipRushFooter.VipRushMore"/>
      </div>
      <div class="VipRush-footer-02">
        <span class="viplog">{{VipRushFooter.viplog}}</span>
        <p class="VipRushFooterPsp">{{VipRushFooter.VipRushFooterPsp}}</p>
        <div class="download-btn">
          <span>{{VipRushFooter.download}}</span>
        </div>
      </div>
      <div class="VipRush-footer-03">
        <!--路由跳转首页-->
        <router-link to="/">
            <a href="javascript:;">{{VipRushFooter.footera1}}</a>
        </router-link>
        <a href="javascript:;">{{VipRushFooter.footera2}}</a>
        <!--路由跳转登录页面-->
        <router-link to="/VipLogin">
            <a href="javascript:;">{{VipRushFooter.footera3}}</a>
        </router-link>
        <!--路由跳转注册页面-->
        <router-link to="/VipRegister">
            <a href="javascript:;">{{VipRushFooter.footera4}}</a>
        </router-link>
      </div>
      <div class="VipRush-footer-04">
        <p class="copyright">{{VipRushFooter.footera5}}</p>
      </div>
      <div class="VipRush-footer-05">
        <i class="psb-sign"></i>
        <p>{{VipRushFooter.footera6}}</p>
      </div>
      <!--3个定位元素-->
        <div class="posi">
          <div class="fnav">{{fnav.fnavs}}</div>
          <router-link to="/VipShopCart">  <!--跳转到购物车-->
              <span class="fspan">
                <img class="gochar" :src="posi.gochar"/>
              </span>
          </router-link>
          <BackTop :height="100" :bottom="200">
              <span class="fup top">
                <img class="fupdate" :src="fup.fupdate"/>
              </span>
          </BackTop>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VipRushFooter",
      data() {
        return {
          VipRushFooter:
            {VipRushMore: "../../../static/image/VipRush-footer-more.jpg",viplog:"唯品会", VipRushFooterPsp:"唯品会客户端，特卖抢不停",download:"下载", footera1:"唯品会首页",footera2:"关于我们",footera3:"登陆",footera4:"注册",footera5:"Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号",footera6:"粤公网安备 44010302000068号"},
          posi:{
            gochar:"../../../static/image/tubiaozhizuomoban.png"
          },
          fup:{
            fupdate:"../../../static/image/jiantou-copy-copy.png"
          },
          fnav:{
            fnavs:"导航"
          }
        }
      }
    }
</script>

<style scoped>

</style>
