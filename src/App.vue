<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
    <h1>hello</h1>
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
