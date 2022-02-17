<template>
  <div class="home">
    <div class="content">
      <img src="../assets/img/song.png" />

      <h1>宋鎔宇 Joe</h1>
    </div>
    <br />

    <div class="container" v-for="item in data.skill" :key="item">
      <div class="row align-items-start">
        <div class="col">
          <div class="progress">
            <div
              :class="item.color"
              role="progressbar"
              :style="{ width: item.num + '%' }"
              :aria-valuenow="item.num"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="col">
          <img :src="item.img" alt="" width="30" />
        </div>
      </div>
    </div>
    <br />
   
  </div>
</template>

<script>
import { reactive } from "vue";
// @ is an alias to /src'

export default {
  name: "Home",
  setup() {
    const data = reactive({
      skill: [
        {
          num: 75,
          name: "vue",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/430px-Vue.js_Logo_2.svg.png",
          color:"progress-bar green"
        },
        {
          num: 70,
          name: "react",
          img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
          color: "progress-bar blue",
        },
        {
          num: 50,
          name: "laravel",
          img: "https://laravel.com/img/logomark.min.svg",
          color: "progress-bar red",
        },
        {
          num: 80,
          name: "git",
          img: "https://miro.medium.com/max/325/1*K8Xv0uWQ63F3G00iTbqMlQ.png",
          color: "progress-bar orange",
        },
        

      ],
    });
    return { data };
  },
};
</script>
<style scoped>
.orange{
  background-color: #f29c2b !important;
}
.blue{
  background-color: #1F6ED4 !important;
}
.green{
  background-color: #8bc24c !important;
}
.red {
  background-color: #ca3e47 !important;
}
.content {
  text-align: center;
}
.content img {
  width: 200px;
}
.content h1 {
  font-size: 30px;
}
</style>
