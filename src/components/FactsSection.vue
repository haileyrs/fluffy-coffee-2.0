<template lang="pug">
div.section-div.facts
  .section-title
    v-row
      h2 Facts
  .container.mb-5
    v-row.counters.d-flex(max-width="100%")
      v-col(cols=12, md=3, sm=6)
        div.counter
          span 50
          p Pounds

      v-col(cols=12, md=3, sm=6)
        div.counter
          span 28
          p Mph Top Speed 

      v-col(cols=12, md=3, sm=6)
        div.counter
          span {{ support }}
          p Hours Of Support 

      v-col(cols=12, md=3, sm=6)
        div.counter
          span 4
          p Paws
</template>

<script>
export default {
  name: 'Facts',
  data () {
    return {
      support: 59130
    }
  }
};
</script>