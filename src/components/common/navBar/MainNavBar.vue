<template>
  <div class="main-nav-bar px-md-5 bg-secondary">
    <nav class="navbar navbar-expand-md navbar-light bg-secondary">
      <div class="container-fluid">
        <router-link class="navbar-brand fs-3" to="/home">CheniC.</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <span class="navbar-toggler-icon"></span> -->
          <!--使用bootstrap icon取代原本的icon（顏色不對）-->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav flex-grow-1 justify-content-md-end pe-lg-5">
            <router-link
              class="nav-link px-md-4"
              active-class="active"
              aria-current="page"
              to="/home"
              >首頁</router-link
            >
            <router-link
              class="nav-link px-md-4"
              active-class="active"
              to="/about-me"
              >關於我</router-link
            >
            <router-link
              class="nav-link px-md-4"
              active-class="active"
              to="/experiences"
              >經歷</router-link
            >
            <router-link
              class="nav-link px-md-4"
              active-class="active"
              to="/portfolios"
              >作品</router-link
            >
          </div>
        </div>
      </div>
    </nav>
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
.main-nav-bar {
  .navbar-nav {
    a.nav-link {
      font-size: 1.3rem;

      &.active {
        color: $orange;
      }
    }
  }
}
</style>
