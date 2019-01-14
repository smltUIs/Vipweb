<template>
    <div class="box">
        <vip-rush-header></vip-rush-header>
        <vip-rush-center></vip-rush-center>
        <vip-rush-footer></vip-rush-footer>
    </div>
</template>
<script>
    import VipRush from "../assets/css/VipRush.css";
    import VipRushHeader from "../components/VipRush/VipRushHeader";
    import VipRushCenter from "../components/VipRush/VipRushCenter";
    import VipRushFooter from "../components/VipRush/VipRushFooter";
    export default {
        name: "VipRush",
      components: {VipRushFooter, VipRushCenter, VipRushHeader,VipRush}
    }
</script>

<style scoped>

</style>
