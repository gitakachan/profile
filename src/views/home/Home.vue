<template>
  <div class="home d-flex align-items-center flex-column">
    <home-background></home-background>
    <home-content></home-content>
    <div class="row">
      <p class="col-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quos
        incidunt. Obcaecati quidem, natus, eligendi eum magni nemo, deserunt
        quisquam harum quas odio aliquam! Nemo velit earum fugit, minima
        delectus consectetur ducimus dolorem blanditiis eum autem repellat
        veritatis, quidem officia, vel cupiditate laudantium qui architecto
        maiores laborum animi. Adipisci necessitatibus at quibusdam, amet alias
        doloribus officiis animi sed recusandae asperiores. Doloribus suscipit
        facilis qui aliquid velit commodi error dolor ab deleniti odit. Hic
        eaque dolore numquam recusandae beatae, voluptatum quos vero. Reiciendis
        quidem nesciunt, adipisci omnis, vero quaerat necessitatibus deleniti
        tempore expedita autem quos reprehenderit, id nam corrupti dolorem rem
        minima ad ullam explicabo similique dolorum ratione perspiciatis! Est
        nostrum deserunt reprehenderit deleniti fugiat, repellendus ratione,
        explicabo possimus harum architecto blanditiis maiores dicta tenetur
        natus voluptates dignissimos. Hic harum odio ex cupiditate similique a,
        fugiat placeat molestias voluptas recusandae! Animi repellat quasi modi
        et fuga quam voluptates quas possimus quos provident non id vel
        doloremque dolor ad sunt vitae harum, eveniet culpa voluptate
        necessitatibus? Expedita labore corporis nobis neque non ratione
        voluptatem esse cumque optio odio eius pariatur nostrum, aspernatur sed
        tempora laboriosam modi quasi quas, eos ex quisquam quam officia
        reiciendis. Perspiciatis nulla aliquam consequuntur obcaecati nam
        deserunt praesentium!
      </p>
    </div>
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
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(
    130deg,
    $primary,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0)
  );
  position: relative;
}
</style>
