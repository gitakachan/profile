<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
//components
import MainNavBar from "./components/common/navBar/MainNavBar.vue";
import MainFooter from "./components/common/footer/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainNavBar,
    MainFooter,
  },
};
</script>

<style lang="scss">
@import "../src/assets/scss/all.scss";
</style>
