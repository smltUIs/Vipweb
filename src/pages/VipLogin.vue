<template>
    <div class="box">
        <vip-login-header></vip-login-header>
        <vip-login-center></vip-login-center>
        <vip-login-footer></vip-login-footer>
    </div>
</template>
<script>
    import VipLogin from "../assets/css/VipLogin.css";
    import VipLoginHeader from "../components/VipLogin/VipLoginHeader";
    import VipLoginCenter from "../components/VipLogin/VipLoginCenter";
    import VipRegisterFooter from "../components/VipRegister/VipRegisterFooter";
    import VipLoginFooter from "../components/VipLogin/VipLoginFooter";
    export default {
        name: "VipLogin",
      components: {VipLoginFooter, VipRegisterFooter, VipLoginCenter, VipLoginHeader,VipLogin}
    }
</script>

<style scoped>

</style>
