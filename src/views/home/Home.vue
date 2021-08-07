<template>
  <div
    class="home d-flex align-items-center flex-column justify-content-around "
  >
    <home-background></home-background>
    <home-content></home-content>
    <home-buttons></home-buttons>
  </div>
</template>
<script>
import HomeBackground from "./HomeBackground.vue";
import HomeButtons from "./HomeButtons.vue";
import HomeContent from "./HomeContent.vue";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    HomeBackground,
    HomeContent,
    HomeButtons,
  },
};
</script>
<style lang="scss">
.home {
  min-height: 100vh;
  background: linear-gradient(
    130deg,
    $primary,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.1)
  );

  position: relative;
}
</style>
