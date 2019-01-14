<template>
  <!--VipLogin-center-->
  <div class="VipLogin-center">
    <div class="VipLogin-center-01">
      <label for="mobile">登录名</label>
      <input  v-model="username" name="mobile" type="tel" placeholder="请输入手机号或邮箱" maxlength="11" class="VipLogin-center-mobile">
    </div>
    <div class="VipLogin-center-02">
      <label for="authcode" >密  码</label>
      <input v-model="userpass" class="VipLogin-center-authcode" maxlength="10" name="authcode" type="password" placeholder="请输入密码">
      <a href="javascript:;" class="VipLogin-center-02-show"></a>
    </div>
    <div class="VipLogin-center-check">
      <span class="VipLogin-center-checkspan" v-show="show">用户名或密码错误</span>
    </div>
    <div class="VipLogin-center-03">
      <a href="javascript:;" class="VipLogin-center-submit" id="VipLogin-center-submit" @click="recheck">登录</a>
      <p class="VipLogin-center-03-tips">忘记密码？</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VipLoginCenter",
      data(){
          return{
            username:"",
            userpass:"",
            show:false
          }
      },
      methods:{
        recheck:function(username){
          console.log("hhajha")
          if(this.username=="666"){
            if(this.userpass=="666"){
              alert("登录成功")
              var domobj = document.getElementById("VipLogin-center-submit");
              domobj.style.backgroundColor="#e4007f"
              this.$router.push({name:"VipIndex",query:{username:"666"}})
            }
          }
          else{
            alert("密码或用户名错误，请重新输入")
            this.show = !this.show
            console.log(this.show)
          }
        }
      }
    }
</script>

<style scoped>
  .VipLogin-center-check{
    width: 100%;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: .16rem;
  }
.VipLogin-center-checkspan{
  /*background-color: yellow;*/
  color: red;
  font-size: .14rem;
  display: block;
  overflow: hidden;
  padding-top: .1rem;
}
  .VipLogin-center-authcode{
    margin-left: .12rem;
  }
</style>
