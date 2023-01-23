<template>
  <v-app>
    <hdr></hdr>
    <v-main>
      <router-view/>
    </v-main>
    <ftr></ftr>
  </v-app>
</template>

<script>
import hdr from "@/components/Header.vue";
import ftr from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    hdr,
    ftr
  },
  data () {
    return {
    }
  },
};
</script>
