<template>
  <div class="home bg-primary d-flex align-items-center">
    <div class="container-fluid text-info">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10  col-lg-6">
          <p class="fs-4">Hey there,</p>
          <h1>I’m <span class="name">Cheni Chen</span></h1>
          <p class="fs-4 d-md-inline">/ photography lover</p>
          <p class="fs-4 d-md-inline">/ travel passionist</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-10  offset-lg-2 col-lg-8">
          <p class="fs-3">
            Currently pursuing a career in web-development !
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.home {
  min-height: 100vh;
}
.name {
  font-size: 50px;
}
</style>
