<template lang="pug">
div.home.section
  .section-div
    h1 Mocha
    h2 I'm a norwegian elkhound/australian shepard mix 
    h2.pb-2 from southeast Minnesota
    router-link(:to="{ path: '/about' }")
      v-btn(rounded, dark, color="#34b7a7") About Me
</template>

<script>
export default {
	name: 'Home'
};
</script>

<style>
.home {
  background: url("../assets/img/IMG_0346.jpg") top left;
  background-size: cover;
  width: 100%;
  height: 100vh;
} 
</style>
