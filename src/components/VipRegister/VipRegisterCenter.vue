<template>
  <!--Register-center-->
  <div class="Register-center">
    <div class="Register-center-01">
      <label for="mobile">手机号</label>
      <input name="mobile" type="tel" placeholder="请输入手机号" maxlength="11" class="Register-center-mobile">
    </div>
    <div class="Register-center-02">
      <label for="authcode">验证码</label>
      <input class="Register-center-authcode" name="authcode" type="tel" placeholder="请输入验证码">
      <button class="Register-center-authcode-buttom" type="button">获取验证码</button>
    </div>
    <div class="Register-center-03">
      <a href="javascript:;" class="Register-center-submit">手机号注册登录</a>
      <p class="Register-center-03-tips">
        <i class="Register-center-03-mlogin Register-center-03-mlogin-pitch-on"></i>
        同意<a href="javascript:;">《唯品会服务条款》</a>、
        <a href="javascript:;">《隐私条款》</a>、
        <a href="javascript:;">《唯品支付用户服务协议》</a>、
        <a href="javascript:;">《唯品信用服务协议》</a>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VipRegisterCenter"
    }
</script>

<style scoped>

</style>
