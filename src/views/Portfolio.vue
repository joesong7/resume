<template>
  <div>
    <br />
    <h1>作品集</h1>

    <div class="container">
      <div class="card" v-for="item in data.folio" :key="item">
        <div class="face face1">
          <div class="content">
            <img :src="item.img" />
            <h3>{{ item.name }}</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>{{ item.text }}</p>
            <a :href="item.href">網頁連結</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
// @ is an alias to /src'

export default {
  name: "Home",
  setup() {
    const data = reactive({
      folio: [
        {
          img: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
          name: "MRTapei|台北先生",
          text: "本系統希望能讓學生族群與所有乘客們帶來更便利的服務",
          href: "https://mrtaipei.netlify.app/",
        },
        {
          img: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true",
          name: "鐵花村音樂聚落",
          text: "介紹鐵花村官方網站",
          href: "https://tiehuacun.netlify.app",
        },
        {
          img: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true",
          name: "鴻升開發有限公司",
          text: "宣傳網站",
          href: "https://admiring-shockley-15b600.netlify.app",
        },
      ],
    });
    return { data };
  },
};
</script>

<style scoped>
@media (max-width: 850px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}

.container {
  width: 1000px;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.container .card {
  position: relative;
  cursor: pointer;
}

.container .card .face {
  width: 300px;
  height: 200px;
  transition: 0.5s;
}

.container .card .face.face1 {
  position: relative;
  background: #475f77;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.container .card:hover .face.face1 {
  background: #e7475e;
  transform: translateY(0);
}

.container .card .face.face1 .content {
  opacity: 0.2;
  transition: 0.5s;
}

.container .card:hover .face.face1 .content {
  opacity: 1;
}

.container .card .face.face1 .content img {
  max-width: 100px;
}

.container .card .face.face1 .content h3 {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}

.container .card .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
}

.container .card:hover .face.face2 {
  transform: translateY(0);
}

.container .card .face.face2 .content p {
  margin: 0;
  padding: 0;
}

.container .card .face.face2 .content a {
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
}

.container .card .face.face2 .content a:hover {
  background: #333;
  color: #fff;
}
</style>