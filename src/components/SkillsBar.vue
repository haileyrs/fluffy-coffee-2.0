<template lang="pug">
.progress
  span.skill {{ title }}
    i.skill.val {{ val }}%
  v-progress-linear(:value="val", color="#34b7a7", height=12)
</template>

<script>
export default {
  name: 'SkillsBar',
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    val: {
      type: Number,
      required: true
    }
  }
};
</script>