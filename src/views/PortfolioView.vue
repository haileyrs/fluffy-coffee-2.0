<template lang="pug">
div.portfolio.section
  .section-div
    .section-title
      v-row
        h2 Portfolio
        p These are only a few of my extensive folder full of beautiful self portraits. Enjoy!

    .content
      v-row
        v-col.portfolio-item(cols=12, lg=4, v-for="img in allFiles", :key="img")
          v-img.img-fluid(:src="require('../assets/img/'+img)")
</template>

<script>

export default {
  name: 'PortfolioView',
  data () {
    return {
      allFiles: ['IMG_0091.jpg', 'IMG_0126.jpg', 'IMG_0214.jpg', 'IMG_0272.jpg', 'IMG_0312.jpg', 'IMG_0438.jpg', 'IMG_0460.jpg', 'IMG_0504.jpg', 'IMG_8619.jpg', 'IMG_9351.jpg', 'IMG_0106.jpg', 'IMG_9956.jpg']
    }
  }
};
</script>