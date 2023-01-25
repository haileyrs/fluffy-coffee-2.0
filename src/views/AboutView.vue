<template lang="pug">
div.about.section
  About
  Skills
  Facts
</template>

<script>
import About from '@/components/AboutSection.vue';
import Facts from '@/components/FactsSection.vue';
import Skills from '@/components/SkillsSection.vue';

export default {
  name: 'AboutView',
  components: {
    About,
    Facts,
    Skills
  }
};
</script>