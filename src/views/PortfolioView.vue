<template lang="pug">
div.portfolio.section
  .section-div
    .section-title
      v-row
        h2 Portfolio
        p These are only a few of my extensive folder full of beautiful self portraits. Enjoy!
    .content
      .row
        .col-lg-4.col-md-12.mb-4.mb-lg-0 
          img(src="../assets/img/IMG_0091.jpg")
          img(src="../assets/img/IMG_0272.jpg")
          img(src="../assets/img/IMG_0460.jpg")
          img(src="../assets/img/IMG_0126.jpg")

        .col-lg-4.col-md-12.mb-4.mb-lg-0 
          img(src="../assets/img/IMG_9956.jpg")
          img(src="../assets/img/IMG_0312.jpg")
          img(src="../assets/img/IMG_0504.jpg")
          img(src="../assets/img/IMG_0106.jpg")

        .col-lg-4.col-md-12.mb-4.mb-lg-0 
          img(src="../assets/img/IMG_0438.jpg")
          img(src="../assets/img/IMG_0214.jpg")
          img(src="../assets/img/IMG_8619.jpg")
          img(src="../assets/img/IMG_9351.jpg")

</template>

<script>
export default {
  name: 'PortfolioView'
};
</script>