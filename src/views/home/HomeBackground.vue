<template>
  <div
    class="bg h-100"
    :style="{ backgroundImage: 'url(' + imgs[current].url + ')' }"
  ></div>
</template>
<script>
export default {
  name: "HomeBackground",
  created() {
    this.carousel();
  },
  data() {
    return {
      current: 0,
      imgs: [
        {
          url:
            "https://images.unsplash.com/photo-1628257228884-90f11c4e78a8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1628199003947-a43ab7be601c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
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
      }, 3000);
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
  background-position: 40%;
  background-repeat: no-repeat;
  transition: background-image 1s ease;
}
</style>
