<template>
  <div class="box">
      <vip-register-header></vip-register-header>
      <vip-register-center></vip-register-center>
      <vip-register-footer></vip-register-footer>
  </div>

</template>

<script>
    import VipRegisterss from "../assets/css/VipRegister.css";
    import VipRegisterHeader from "../components/VipRegister/VipRegisterHeader";
    import VipRegisterCenter from "../components/VipRegister/VipRegisterCenter";
    import VipRegisterFooter from "../components/VipRegister/VipRegisterFooter";
    export default {
        name: "VipRegister",
      components: {VipRegisterFooter, VipRegisterCenter, VipRegisterHeader,VipRegisterss}
    }
</script>

<style scoped>

</style>
