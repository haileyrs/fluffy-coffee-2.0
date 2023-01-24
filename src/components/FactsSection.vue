<template lang="pug">
div.section-div.facts
  .section-title
    v-row
      h2 Facts
  .content
    v-row.counters(max-width="100%")
      v-col.align-center(cols=6, lg=3)
        span.purecounter 50
        p Pounds

      v-col.align-center(cols=6, lg=3)
        span.purecounter 28
        p Mph Top Speed 

      v-col.align-center(cols=6, lg=3)
        //- could manipulate this based on time 
        span.purecounter {{ support }}
        p Hours Of Support 

      v-col.align-center(cols=6, lg=3)
        span.purecounter 4
        p Paws
          
</template>

<script>

export default {
  name: 'Facts',
  components: {},
  data () {
    return {
      support: 65841
    }
  }
};
</script>