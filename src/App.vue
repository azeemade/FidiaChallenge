<template>
    <div>
        <UpperNavbar />
        <hr class="text-gray-200">
        <LowerNavbar />
        <hr class="text-gray-200">
    </div>
    <router-view></router-view>
</template>
<script>
import UpperNavbar from "./components/UpperNavbar.vue";
import LowerNavbar from "./components/LowerNavbar.vue";
export default {
    name: "App",
    components: { UpperNavbar, LowerNavbar }
}
</script>
<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
