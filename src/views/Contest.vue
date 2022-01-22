<template>
  <div>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/img/contest/1288.jpg"
            width="100%"
            height="50%"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/contest/5456.jpg"
            width="100%"
            height="50%"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/contest/6267.jpg"
            width="100%"
            height="50%"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <br />
    <div>
      <h1>競賽成果</h1>
      <div
        class="card mb-3"
        style="max-width: 540px"
        v-for="item in data.contest"
        :key="item"
      >
        <div class="row g-0">
          <div class="col-4">
            <h4>{{ item.time }}</h4>
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const data = reactive({
      contest: [
        {
          time: 2020,
          title: "瑪利MUMU創意競賽",
          text: "第三名",
        },
        {
          time: 2020,
          title: "臺中科大專題成果展",
          text: "企業e化 領域特別獎",
        },
        {
          time: 2021,
          title: "黑捷客黑客松",
          text: "黑傑客獎",
        },
      ],
    });
    return { data };
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .carousel-inner {
    display: none;
  }
}
</style>