<template>
  <!--<div class="box">-->
    <section id="classify-section" class="classify-section">
      <div class="classify-secLeft">
        <ul id="classify-secLeftul">
          <li @click="tabss(index)" :key="index" v-for="(item,index) in classifyData.tabs">{{item}}</li>
        </ul>
      </div>
      <div class="classify-secRight">
        <ul class="classify-bigul">
          <li class="classify-bigli" :key="index" v-for="(shop,index) in classifyData.tabContents" v-show="index==classifyData.num">
            <div class="classify-secbox">
              <div class="classify-subbox" :key="index" v-for="(tab,index) in shop.shoplist">
                <h3>{{tab.title}}</h3>
                <ul>
                  <li :key="index" v-for="(pro,index) in tab.product"><a href=""><img :src="pro.img" alt="">{{pro.con}}</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

  <!--</div>-->
</template>

<script>
    import classifyDataApis from "../../apis/classify"
    export default {
      name: "VipClassifySection",
      data() {
        return {
          classifyData:[]
        }
      },
      methods:{
        _initClassifyData(){
          classifyDataApis.getClassifyData(data=>{
            this.classifyData = data
            // console.log(this.classifyData)
          })
        },
        tabss:function(index){
          this.classifyData.num = index
          // console.log(this.classifyData.num)
          var domObj = document.getElementById("classify-secLeftul");
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
                lis[j].style.backgroundColor = "#f3f4f5";
                lis[j].style.fontweight = "normal";
              }
              console.log(this)
              this.style.backgroundColor = "#fff"
              // this.style.fontWeight = "bold"
              this.className = "classify-specialLi"
              // console.log(this.index)
            }
          }
        }
      },
      mounted(){
        this._initClassifyData()
        console.log(this.classifyData)
      },

    }
</script>

<style scoped>

</style>
