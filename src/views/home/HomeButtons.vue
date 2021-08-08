<template>
  <div class="home-btns container">
    <div class="row flex-column flex-lg-row justify-content-md-center">
      <div class="col col-lg-3 text-center pb-3">
        <router-link class="btn btn-outline-info" to="/about-me">{{
          btns[0]
        }}</router-link>
      </div>
      <div class="col col-lg-3 text-center pb-3">
        <router-link class="btn btn-outline-info" to="/about-me">{{
          btns[1]
        }}</router-link>
      </div>
      <div class="col col-lg-3 text-center pb-5 pb-md-3">
        <router-link class="btn btn-outline-info" to="/about-me">{{
          btns[2]
        }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      btns: ["ABOUT", "EXPERIENCE", "PORTFOLIO"],
    };
  },
};
</script>
<style lang="scss">
.btn {
  width: 120px;
}
</style>
