<template>
  <div
    class="home d-flex align-items-center flex-column justify-content-around "
  >
    <home-content></home-content>
    <home-buttons></home-buttons>
    <main-footer></main-footer>
  </div>
</template>
<script>
import HomeButtons from "./HomeButtons.vue";
import HomeContent from "./HomeContent.vue";
import MainFooter from "../../components/common/footer/MainFooter.vue";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    HomeContent,
    HomeButtons,
    MainFooter,
  },
};
</script>
<style lang="scss">
.home {
  min-height: 100vh;
  background: linear-gradient(130deg, $primary, rgba(16, 41, 30, 0.5) 60%);

  position: relative;
}
</style>
