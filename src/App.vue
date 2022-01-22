<template>
<div class="body">
  <Narbar />
  <br />
  <br />

  <router-view />
</div>
 
  
</template>

<script>
import Narbar from "../src/components/Narbar.vue";
export default {
  components: {
    Narbar,
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/earlyaccess/cwtexfangsong.css);



.body{
font-family: ‘cwTeXFangSong’, serif;
  
}

</style>
