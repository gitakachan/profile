<template>
  <div
    class="experiences container-fulid text-info  min-vh-100 text-info bg-primary"
  >
    <div class="title text-center pt-5 pb-3">
      <h1>Experiences</h1>
    </div>
    <div class="content">
      <div class="time-line">
        <span>NOW</span>
        <div class="line"></div>
        <span>PAST</span>
      </div>
      <div class="text">
        <div class="card" style="width: 18rem;">
          <img
            src="../../assets/img/home/beach.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img
            src="../../assets/img/home/beach.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img
            src="../../assets/img/home/beach.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img
            src="../../assets/img/home/beach.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Gap Year in Australia</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
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
.experiences {
  margin-top: 58px;

  .content {
    display: flex;
    justify-content: center;

    .time-line {
      width: 30px;
      //background-color: #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      span {
        margin-bottom: 30px;
        &:last-child {
          margin-top: 30px;
        }
      }
      .line {
        width: 5px;
        flex: 1;
        background-color: $font;
      }
    }
    .text {
      padding-top: 30px;

      .card {
        margin: 30px;
      }
    }
  }
}
</style>
