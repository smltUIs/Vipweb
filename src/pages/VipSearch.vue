<template>
  <div class="search-total">
    <header class="search-header">
      <i class="iconfont icon-jiantouarrowhead7" @click="searchjump"></i>
      <input id="classify-searchValue" type="text" placeholder="搜索品牌或商品" @keyup.prevent="changeCount()" v-model="searchData.searchVal">
      <p>搜索</p>
    </header>
    <!--<div v-show="false" :key="index" v-for="(shop,index) in searchData.shoplist">-->
      <!--<div :key="index" v-for="(pro,index) in shop.products"></div>-->
    <!--</div>-->
    <section class="search-section">
      <div class="search-hot">
        <h3>热门搜索</h3>
        <ul>
          <li><router-link :to="{path:'/shoplist',query:{xxx:0,num:6}}"><a href="#">女款羽绒服</a></router-link></li>
          <li><a href="#">男鞋</a></li>
          <li><a href="#">面膜</a></li>
          <li><a href="#">波司登</a></li>
        </ul>
      </div>
      <div class="search-goodsheet">
        <ul v-if="this.searchData.searchVal">
          <li :key="index" v-for="(item,index) in list"><router-link :to="{path:'/shoplist',query:{xxx:beforeIdx,num:index}}"><a href="javascript:">{{item.name}}</a></router-link></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import searchDataApis from "../apis/search"
  import VipSearchCss from "../assets/css/search.css"
  import iconfont from "../assets/css/iconfont.css"
  export default {
    name: "VipSearch",
    components:{VipSearchCss,iconfont},

    data(){
      return {
        searchData:[],
        beforeIdx:"",
        idx:"",
        searchValue:""
      }
    },
    mounted(){
      // console.log(this.searchData.searchVal)
      // console.log(this.searchData)

      // console.log(this.searchData.searchVal)
      // this.beforeIdx = this.$router.query.xxx
      // this.searchData.shoplist.forEach(function(e){
      //   // this.beforeIdx = index
      //   console.log(this.beforeIdx)
      // })
      //
      // for(let i=0; i<this.searchData.shoplist.length; i++){
      //   this.beforeIdx = this.searchData.shoplist[i]
      //   for(let j=0; j<this.searchData.shoplist[i].shops.length; j++){
      //     this.idx = this.searchData.shoplist[i].shops[j]
      //   }
      // }
      //
      // console.log(this.idx)
      // console.log(this.searchData.shoplist)
    },

    methods:{
      changeCount:function(){
        let searchValue = document.getElementById("classify-searchValue")
        console.log(searchValue.value)
        this.searchValue = searchValue.value
        console.log(this.searchValue)
        switch (this.searchValue) {
          case "女": this.beforeIdx = 0;break;
          case "男": this.beforeIdx = 1;break;
          case "配": this.beforeIdx = 2;break;
          case "鞋": this.beforeIdx = 3;break;
          case "男3": this.beforeIdx = 4;break;
          case "男4": this.beforeIdx = 5;break;
          case "男5": this.beforeIdx = 6;break;
          case "男6": this.beforeIdx = 7;break;
          case "男7": this.beforeIdx = 8;break;
          case "男8": this.beforeIdx = 9;break;
        }

        // this.beforeIdx = beforeIdx
        console.log(this.beforeIdx)
      },
      // choseValue:function(){
      //   // console.log(beforeIdx)
      //   let searchValue = document.getElementById("classify-searchValue")
      //   console.log(searchValue.value)
      //   this.searchValue = searchValue.value
      //   console.log(this.searchValue)
      //   switch (this.searchValue) {
      //     case "女": this.beforeIdx = 0;break;
      //     case "男": this.beforeIdx = 1;break;
      //     case "男1": this.beforeIdx = 2;break;
      //     case "男2": this.beforeIdx = 3;break;
      //     case "男3": this.beforeIdx = 4;break;
      //     case "男4": this.beforeIdx = 5;break;
      //     case "男5": this.beforeIdx = 6;break;
      //     case "男6": this.beforeIdx = 7;break;
      //     case "男7": this.beforeIdx = 8;break;
      //     case "男8": this.beforeIdx = 9;break;
      //   }
      //
      //   // this.beforeIdx = beforeIdx
      //   console.log(this.beforeIdx)
      // },
      // toggle(){
      //
      //   // console.log(kk)
      //   // console.log(kk.searchVal)
      //   switch (this.searchValue) {
      //     case "男": this.beforeIdx = 0
      //     case "女": this.beforeIdx = 1
      //     case "男1": this.beforeIdx = 2
      //     case "男2": this.beforeIdx = 3
      //     case "男3": this.beforeIdx = 4
      //     case "男4": this.beforeIdx = 5
      //     case "男5": this.beforeIdx = 6
      //     case "男6": this.beforeIdx = 7
      //     case "男7": this.beforeIdx = 8
      //     case "男8": this.beforeIdx = 9
      //     case "男9": this.beforeIdx = 10
      //   }
      // },

        // for(let j=0; j<subArr.length; j++){
        //   this.idx = subArr[j]
        // }
        // this.searchData.shoplist.forEach(function(e){
        //   // this.beforeIdx = index
        //   console.log(this.beforeIdx)
        // })
        // for(let i=0; i<this.searchData.shoplist.length; i++){
        //   this.beforeIdx = this.searchData.shoplist[i]
        //   for(let j=0; j<this.searchData.shoplist[i].shops.length; j++){
        //     this.idx = this.searchData.shoplist[i].shops[j]
        //   }
        // }
        // console.log(this.idx)
        // console.log(this.searchData.shoplist)

      _initgetSearchData(){
        searchDataApis.getSearchData(data=>{
          this.searchData = data
          // console.log(this.searchData)
          // this.$options.methods.toggle(this.searchData)
          // toggle(data)
        })
        // this.toggle()
      },
      searchjump:function(){
        this.$router.go(-1)
      }
    },
    created(){
      this._initgetSearchData()
    },
    computed:{
      list:function(){
        var arrByZM = [];
        for(var i=0; i<this.searchData.goodsList.length; i++){
          for(var j=0; j<this.searchData.goodsList[i].goods.length; j++){
            if(this.searchData.goodsList[i].goods[j].name.search(this.searchData.searchVal)!= -1){
              arrByZM.push(this.searchData.goodsList[i].goods[j])
            }
          }
        }
        return arrByZM;
      }
    }
  }
</script>

<style scoped>
  .search-total{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
