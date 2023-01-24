<template lang="pug">
div.pb-4
  h3.faves-title {{ title }}
  v-timeline.timeline(dense)
    v-timeline-item.faves-item(small, color="#34b7a7", v-for="i in items", :key="i.subtitle")
      span
        h4 {{ i.subtitle }}
        p {{ i.definition }}
    
</template>

<script>

export default {
  name: 'FaveList',
  props: {
    title: {
      required: true,
      type: String
    },
    items: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
    }
  }
};
</script>