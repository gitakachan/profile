<template>
  <div class="bg" :style="imgs[current]"></div>
</template>
<script>
export default {
  name: "HomeBackground",
  mounted() {
    this.carousel();
  },
  data() {
    return {
      current: 0,
      imgs: [
        //left 5% / 15% 60% repeat-x
        {
          backgroundPosition: "80%",
          backgroundImage: `url(${require("@/assets/img/home/leaf.jpg")})`,
        },
        {
          backgroundPosition: "10% 10%",
          backgroundImage: `url(${require("@/assets/img/home/beach.jpg")})`,
        },
        {
          backgroundPosition: "left 20%",
          backgroundImage: `url(${require("@/assets/img/home/tree.jpg")})`,
        },
      ],
    };
  },
  methods: {
    carousel() {
      setInterval(() => {
        this.current++;
        if (this.current == 3) {
          this.current = 0;
        }
      }, 6000);
    },
  },
};
</script>
<style lang="scss">
//背景特效
.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  // background-position: 40% 10%;
  background-repeat: no-repeat;
  transition: background-image 5s ease;
}

@keyframes opacity {
}
</style>
