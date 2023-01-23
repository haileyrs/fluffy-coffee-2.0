<template lang="pug">
div.section-div.skills
  .section-title
    v-row
      h2 Skills
  .content
    v-row
      v-col(cols=12, lg=6)
        SkillsBar(title="Zoomies", val=100)
        SkillsBar(title="Boofing", val=100)
        SkillsBar(title="Patience", val=60)
        //- .progress
        //-   span.skill Zoomies 100%
        //-   v-progress-linear(value="100")

        //- .progress
        //-   span.skill Boofing 100%
        //-   v-progress-linear(value="100")
        
        //- .progress
        //-   span.skill Patience 60%
        //-   v-progress-linear(value="60")

      v-col(cols=12, lg=6)
        SkillsBar(title="Friendliness to Cats", val=70)
        SkillsBar(title="Fear of Men", val=95)
        SkillsBar(title="Tricks", val=85)

        //- .progress
        //-   span.skill Friendliness to Cats 70%
        //-   v-progress-linear(value="70")

        //- .progress
        //-   span.skill Fear of Men 95%
        //-   v-progress-linear(value="100")

        //- .progress
        //-   span.skill Tricks 85%
        //-   v-progress-linear(value="85")
    
</template>

<script>
import SkillsBar from '@/components/SkillsBar.vue';

export default {
  name: 'Skills',
  components: { SkillsBar },
  data () {
    return {
    }
  }
};
</script>