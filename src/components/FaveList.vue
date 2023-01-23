<template lang="pug">
div
  v-row
    h3.faves-title {{ title }}
    v-timeline(dense, align-top)
      v-timeline-item.faves-item(small, v-for="i in items", :key="i.subtitle")
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