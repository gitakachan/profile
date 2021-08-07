<template>
  <div class="home d-flex align-items-center">
    <home-background></home-background>
    <home-content></home-content>
  </div>
</template>
<script>
import HomeBackground from "./HomeBackground.vue";
import HomeContent from "./HomeContent.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    HomeBackground,
    HomeContent,
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
