<template lang="pug">
div.section-div.about
  .section-title
    v-row
      h2 About
      p These are some interesting facts about me!
  .container
    v-row
      v-col.pb-(cols=12, lg=4)
        v-img(:src="require('../assets/img/IMG_0240.jpg')", aspect-ratio="1")
      v-col(cols=12, lg=8)
        h3 Dog & Full Time Best Friend
        p.fst-italic.mb-0 Emotional Support Animal (Not Certified)
        v-row
          v-col.px-0(cols=12, md=6)
            v-list-item
              v-list-item-content.two-line
                v-list-item-title 1 April 2016
                v-list-item-subtitle.fst-italic Birthday
            v-list-item
              v-list-item-content.two-line
                v-list-item-title 1 Cat, 1 Step Cat
                v-list-item-subtitle.fst-italic Siblings
            v-list-item
              v-list-item-content.two-line
                v-list-item-title Rochester, MN
                v-list-item-subtitle.fst-italic City
              
          v-col.px-0(cols=12, md=6)
            v-list-item
              v-list-item-content.two-line
                v-list-item-title {{ ageVal }}
                v-list-item-subtitle.fst-italic Age
            v-list-item
              v-list-item-content.two-line
                v-list-item-title Puppy Training Course
                v-list-item-subtitle.fst-italic Degree
            v-list-item
              v-list-item-content.two-line
                v-list-item-title Anytime
                v-list-item-subtitle.fst-italic Want to go on a walk?
        p.pt-3 Born on a farm in Southeast Minnesota, I was not even a thought in my mom's head until a few months later, when her aunt randomly mentioned a farmer that they knew who had some puppies (me and my siblings!). I was adopted by my mom in late June 2016. She had never taken care of a puppy before, and she had no idea what she had gotten herself into. Many months went into potty training and socializing, which went well for the most part. My two older cat siblings did not take to me right away, but they are tolerant now. I am very loved and pampered in my home, and I give my family unconditional love in return.
</template>

<script>
export default {
  name: 'About',
  computed: {
    ageVal() {
      const today = new Date()
      const year = today.getFullYear()
      const month = today.getMonth()
      
      if (month >= 3) {
        return year - 2016 
      } else {
        return year - 2016 - 1
      }
    }
  }
};
</script>