<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
//components
import MainNavBar from "./components/common/navBar/MainNavBar.vue";

export default {
  name: "App",
  components: {
    MainNavBar,
  },
};
</script>

<style lang="scss">
@import "../src/assets/scss/all.scss";
</style>
