<template>
    <div class="nav">
        <!--VipRush-Tabs-->
        <div class="VipRush-Tabs">
          <ul class="VipRush-Tabs-ul" id="VipRush-Tabs-ul">
            <li class="VipRush-Tabs-li" @click="toggle(index)" :key="index" v-for="(i,index) in VipRushTab">
              <p class="VipRush-Tabs-time"><span class="VipRush-Tabs-time-01">{{i.VipRushTabTime}}</span></p>
              <p class="VipRush-Tabs-desc"><span class="VipRush-Tabs-desc-span">{{i.VipRushTabDesc}}</span></p>
            </li>
          </ul>
        </div>
        <!--VipRush-Pic-->
        <div class="VipRush-Pic">
          <a href="javascript:;"><img class="VipRush-Pic-img" :src="VipPic.VipRushPic"></a>
        </div>

      <!--VipRush-Shop-List-->
      <div class="VipRush-Shop-List">
        <ul class="VipRush-Shop-List-ul" v-show="index==num" :key="index" v-for="(shop,index) in VipRushList">
          <li class="VipRush-Shop-List-li"  :key="index" v-for="(i,index) in shop.shoplist">
            <div class="VipRush-Shop-List-li-box">
              <div class="VipRush-Shop-List-li-pic">
                <a href="javascript:;"><img class="VipRush-Shop-List-li-pic-img" :src="i.VipRushListPic"></a>
              </div>
              <div class="VipRush-Shop-List-li-info">
                <div class="VipRush-Shop-List-li-info-lgo">
                  <a href="javascript:;"><img class="VipRush-Shop-List-li-info-lgo-img" :src="i.VipRushListInfoLgo"/></a>
                </div>
                <div class="VipRush-Shop-List-li-info-ShopTitle">
                  <h2 class="VipRush-Shop-List-li-info-ShopTitle-tips">{{i.VipRushListInfoTips}}</h2>
                </div>
                <div class="VipRush-Shop-List-li-info-ShopIntroduce">
                  <p class="VipRush-Shop-List-li-info-ShopIntroduce-particulars">{{i.VipRushListParticulars}}</p>
                </div>
                <div class="VipRush-Shop-List-li-info-ShopSnapup">
                  <i>{{i.VipRushListShopSnapup}}</i>
                  <p>{{i.ShopSnapupMorey}}<span class="VipRush-Shop-List-li-info-ShopSnapup-price"><del>{{i.VipRushListPrice}}</del></span></p>
                </div>
                <div class="VipRush-Shop-List-li-info-ShopPlan">
                  <div class="VipRush-Shop-List-li-info-ShopPlan-progress">
                    <i class="percent" :style="{width:i.progress+'%'}"></i>
                  </div>
                  <div class="VipRush-Shop-List-li-info-ShopPlan-pms">{{i.VipRushPms+i.progress+'%'}}</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "VipRushCenter",
      methods:{
          toggle:function(index){
            this.num = index
            console.log(this.num)
            var domObj = document.getElementById("VipRush-Tabs-ul");
            // console.log(domObj)
            var lis = domObj.children;
            // console.log(lis)
            if(lis){
              for(var i=0; i<lis.length; i++){
                lis[i].index = i;
                lis[i].onclick = li_onclick;
              }
              function li_onclick(){
                for(var j=0; j<lis.length; j++){
                    lis[j].style.backgroundImage= "none";
                }
                console.log(this)
                this.style.backgroundImage= "url(@/../static/image/VipRush-Tabs-li-img.png)";
                console.log(this.index)
              }
            }
          }
      },

      data() {
        return {
          num:0,
          VipRushTab:[
            {VipRushTabTime: "10:00",VipRushTabDesc:"最新开抢"},
            {VipRushTabTime: "12:00",VipRushTabDesc:"即将开抢"},
            {VipRushTabTime: "14:00",VipRushTabDesc:"即将开抢"},
            {VipRushTabTime: "16:00",VipRushTabDesc:"即将开抢"},
            {VipRushTabTime: "16:00",VipRushTabDesc:"即将开抢"}
           ],
          VipPic: {
              VipRushPic:"../../../static/image/VipRush-Pic.jpg"
          },
          VipRushList:[
            {
              "title":"he",
              "shoplist":[
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-01.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-01.png",VipRushListInfoTips:"温碧泉 力透白套装  礼盒套装",VipRushListParticulars:"力透白洁面乳120g+力透白柔肤水130ml+力透白养肤乳100ml+力透白雪肌霜50g+水润魅白修颜霜10g",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-02.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-02.png",VipRushListInfoTips:"温碧泉 力透白套装  礼盒套装",VipRushListParticulars:"力透白洁面乳120g+力透白柔肤水130ml+力透白养肤乳100ml+力透白雪肌霜50g+水润魅白修颜霜10g",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-03.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-03.png",VipRushListInfoTips:"温碧泉 力透白套装  礼盒套装",VipRushListParticulars:"力透白洁面乳120g+力透白柔肤水130ml+力透白养肤乳100ml+力透白雪肌霜50g+水润魅白修颜霜10g",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-04.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-04.png",VipRushListInfoTips:"温碧泉 力透白套装  礼盒套装",VipRushListParticulars:"力透白洁面乳120g+力透白柔肤水130ml+力透白养肤乳100ml+力透白雪肌霜50g+水润魅白修颜霜10g",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-05.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-05.png",VipRushListInfoTips:"温碧泉 力透白套装  礼盒套装",VipRushListParticulars:"力透白洁面乳120g+力透白柔肤水130ml+力透白养肤乳100ml+力透白雪肌霜50g+水润魅白修颜霜10g",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-06.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-06.png",VipRushListInfoTips:"【玻尿酸滋养保湿】",VipRushListParticulars:"【黄金蚕丝 焕肤保湿】JMsolution 水光黄金蚕丝玻尿酸面膜 45g*10片/盒",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-07.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-07.png",VipRushListInfoTips:"【微压显瘦 加厚保暖】",VipRushListParticulars:"2X蓄热秋冬新品 连袜后跟踩脚打底裤 加绒厚款竖条纹显瘦秋裤 女士保暖裤",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-08.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-08.png",VipRushListInfoTips:"【加厚保暖 纯棉不变形】",VipRushListParticulars:"【热销5万条 加厚纯棉】纯棉舒适加厚休闲裤男简约百搭男休闲裤小脚裤男士休闲裤",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-09.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-09.png",VipRushListInfoTips:"【加厚毛绒保暖舒适】",VipRushListParticulars:"棉拖鞋冬季保暖室内防滑男士女士家居拖鞋情侣厚底毛绒棉拖鞋",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-10.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-10.png",VipRushListInfoTips:"【深层修护秀发】",VipRushListParticulars:"施华蔻 多效修护19三重精油喷雾80ml 改善干枯毛躁受损发质护发精油免洗易吸收洗护丝滑柔顺精油",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-11.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-11.png",VipRushListInfoTips:"【30片！补水实力派！】",VipRushListParticulars:"百雀羚小雀幸静润水颜面膜套装30片 补水面膜",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-12.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-12.png",VipRushListInfoTips:"【贴身美体 舒适纯棉】",VipRushListParticulars:"女士基础保暖内衣舒适纯棉贴身有型简约纯色薄款情侣款女款秋衣秋裤女士保暖内衣套装",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-13.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-13.png",VipRushListInfoTips:"【舒适真皮 加绒保暖】",VipRushListParticulars:"艾斯臣【牛皮】平底长毛绒加绒保暖短筒舒适雪地靴真皮女靴女鞋女短靴女雪地靴女士棉鞋雪地靴女女款靴冬季女鞋短靴新款冬季女鞋平底女靴女士短靴雪地靴",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-14.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-14.png",VipRushListInfoTips:"【天然羊驼绒 更保暖】",VipRushListParticulars:"男士棉裤男冬季保暖裤羊驼绒加绒加厚秋裤打底裤毛裤男式保暖内衣",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-15.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-15.png",VipRushListInfoTips:"【1件免邮 过冬必备】",VipRushListParticulars:"时尚冬季棉拖鞋女全包跟 大码鞋加厚保暖情侣男家居包头毛毛拖鞋",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"}
              ]
            },
            {
              "title":"he",
              "shoplist":[
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-06.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-06.png",VipRushListInfoTips:"【玻尿酸滋养保湿】",VipRushListParticulars:"【黄金蚕丝 焕肤保湿】JMsolution 水光黄金蚕丝玻尿酸面膜 45g*10片/盒",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-07.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-07.png",VipRushListInfoTips:"【微压显瘦 加厚保暖】",VipRushListParticulars:"2X蓄热秋冬新品 连袜后跟踩脚打底裤 加绒厚款竖条纹显瘦秋裤 女士保暖裤",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-08.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-08.png",VipRushListInfoTips:"【加厚保暖 纯棉不变形】",VipRushListParticulars:"【热销5万条 加厚纯棉】纯棉舒适加厚休闲裤男简约百搭男休闲裤小脚裤男士休闲裤",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-09.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-09.png",VipRushListInfoTips:"【加厚毛绒保暖舒适】",VipRushListParticulars:"棉拖鞋冬季保暖室内防滑男士女士家居拖鞋情侣厚底毛绒棉拖鞋",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-10.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-10.png",VipRushListInfoTips:"【深层修护秀发】",VipRushListParticulars:"施华蔻 多效修护19三重精油喷雾80ml 改善干枯毛躁受损发质护发精油免洗易吸收洗护丝滑柔顺精油",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"}
              ]
            },
            {
              "title":"he",
              "shoplist":[
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-11.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-11.png",VipRushListInfoTips:"【30片！补水实力派！】",VipRushListParticulars:"百雀羚小雀幸静润水颜面膜套装30片 补水面膜",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-12.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-12.png",VipRushListInfoTips:"【贴身美体 舒适纯棉】",VipRushListParticulars:"女士基础保暖内衣舒适纯棉贴身有型简约纯色薄款情侣款女款秋衣秋裤女士保暖内衣套装",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-13.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-13.png",VipRushListInfoTips:"【舒适真皮 加绒保暖】",VipRushListParticulars:"艾斯臣【牛皮】平底长毛绒加绒保暖短筒舒适雪地靴真皮女靴女鞋女短靴女雪地靴女士棉鞋雪地靴女女款靴冬季女鞋短靴新款冬季女鞋平底女靴女士短靴雪地靴",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-14.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-14.png",VipRushListInfoTips:"【天然羊驼绒 更保暖】",VipRushListParticulars:"男士棉裤男冬季保暖裤羊驼绒加绒加厚秋裤打底裤毛裤男式保暖内衣",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-15.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-15.png",VipRushListInfoTips:"【1件免邮 过冬必备】",VipRushListParticulars:"时尚冬季棉拖鞋女全包跟 大码鞋加厚保暖情侣男家居包头毛毛拖鞋",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"}
              ]
            },
            {
              "title":"he",
              "shoplist":[
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-16.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-16.png",VipRushListInfoTips:"【100%棉 保暖舒适】",VipRushListParticulars:"男士保暖内衣套装秋衣秋裤纯棉女款保暖内衣棉毛衫保暖内衣男",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-17.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-17.png",VipRushListInfoTips:"【林志颖情侣款轻薄羽绒】",VipRushListParticulars:"林志颖男女情侣款罗蒙男装2018秋冬全网爆款男士轻羽绒时尚休闲保暖轻薄羽绒服",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-18.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-18.png",VipRushListInfoTips:"【蜂蜡护唇 滋润修护】",VipRushListParticulars:"伯特小蜜蜂皇牌保湿润唇膏 红石榴 4.25g 滋润修护",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-19.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-19.png",VipRushListInfoTips:"【遮瑕亮白 养肤气垫】",VipRushListParticulars:"【明星同款】VT CICA老虎气垫BB霜（送替换装） 遮瑕控油美白提亮修饰肤色",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-20.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-20.png",VipRushListInfoTips:"【加厚珊瑚绒亲肤入睡】",VipRushListParticulars:"加厚珊瑚绒可机洗睡衣 卡通印花北极熊圆领套装 秋冬女士家居服",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"}
              ]
            },
            {
              "title":"he",
              "shoplist":[
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-21.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-21.png",VipRushListInfoTips:"【进阶保湿 口碑星品】",VipRushListParticulars:"森田药妆高保湿弹嫩润肌原液补水面膜20片 补水保湿套装",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-22.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-22.png",VipRushListInfoTips:"【简约舒适百搭休闲裤】",VipRushListParticulars:"2018秋冬新品简约舒适百搭时尚长裤男士休闲裤",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-23.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-23.png",VipRushListInfoTips:"【千人千色 原装进口】",VipRushListParticulars:"小蜜坊Manuka Bee新西兰原装进口变色唇膏口红 五效合一 保湿滋润 千人千色 温感变色",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-24.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-24.png",VipRushListInfoTips:"【加厚保暖 休闲户外】",VipRushListParticulars:"渔民部落加厚保暖抓绒衣男简约连帽男情侣款抓绒外套",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"},
                {VipRushListPic:"../../../static/image/VipRush-Shop-List-li-pic-25.jpg",VipRushListInfoLgo:"../../../static/image/VipRush-Shop-List-li-pic-logo-25.png",VipRushListInfoTips:"【光腿神器 裸感美肌】",VipRushListParticulars:"光腿隐形神器 秋冬加绒加厚可外穿连裤袜 踩脚打底裤袜",VipRushListShopSnapup:"快抢价",ShopSnapupMorey:"￥78",VipRushListPrice:"￥999",progress:"50",VipRushPms:"已抢"}
              ]
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
