<template lang="pug">
div.section-div.skills
  .section-title
    v-row
      h2 Skills
  .container
    v-row
      v-col(cols=12, lg=6)
        SkillsBar(title="Zoomies", :val='100')
        SkillsBar(title="Boofing", :val='100')
        SkillsBar(title="Patience", :val='60')

      v-col(cols=12, lg=6)
        SkillsBar(title="Friendliness to Cats", :val='70')
        SkillsBar(title="Fear of Strangers", :val='95')
        SkillsBar(title="Tricks", :val='85')   
</template>

<script>
import SkillsBar from '@/components/SkillsBar.vue';

export default {
  name: 'Skills',
  components: { SkillsBar }
};
</script>