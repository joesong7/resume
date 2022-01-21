<template>
  <Narbar />
  <br />
  <br />

  <router-view />
</template>

<script>
import Narbar from "../src/components/Narbar.vue";
export default {
  components: {
    Narbar,
  },
};
</script>
<style>
</style>
