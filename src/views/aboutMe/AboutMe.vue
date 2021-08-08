<template>
  <div class="about-me container-fulid text-info bg-primary min-vh-100">
    <div class="title text-center pt-5 pb-3">
      <h1>ABOUT ME</h1>
    </div>

    <div class="profile-pic text-center pb-4">
      <img
        class="rounded-circle"
        src="https://picsum.photos/250/250/?random=1"
      />
    </div>

    <div class="name text-center">
      <h2>陳振衣 Cheni Chen</h2>
    </div>

    <div class="contact">
      <div class="d-flex  flex-row justify-content-center">
        <p class="city text-center">TW, Taipei</p>
        <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
        <p class="tel text-center">0979-397-597</p>
        <span class="d-none d-md-block"
          >&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span
        >
        <p class="email text-center d-none d-md-block">celiachenic@gmail.com</p>
      </div>
      <p class="email text-center d-md-none">celiachenic@gmail.com</p>
    </div>

    <div class="links d-flex justify-content-center">
      <div class="icon px-2">linkedin</div>
      <div class="icon px-2">github</div>
      <div class="icon px-2">codepen</div>
    </div>

    <div class="row education">
      <div class="col-12">
        <div class="title">
          <h3>Education</h3>
        </div>
      </div>
      <div class="col-12">
        <div class="description">
          <ul>
            <li>
              <p>National Taiwan University</p>
              <p>Department of Foreign Language and Literature</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row skills">
      <div class="col-12">
        <div class="title">
          <h3>Skills</h3>
        </div>
      </div>
      <div class="col-12">
        <div class="description">
          <ul>
            <li>HTML</li>
            <li>CSS, SCSS, Bootstrap</li>
            <li>JavaScript</li>
            <li>Vue.js, Vue-Cli, Vue Router, Vuex</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row Languages">
      <div class="col-12">
        <div class="title">
          <h3>Languages</h3>
        </div>
      </div>
      <div class="col-12">
        <div class="description">
          <ul>
            <li>English (TOEIC 905)</li>
            <li>Japanese (JLPT N2)</li>
          </ul>
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
.about-me {
  margin-top: 58px;
}
</style>
