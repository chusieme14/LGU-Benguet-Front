<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-app-bar-nav-icon @click.stop="$emit('drawer')" />
    <v-btn icon @click.stop="minimize = !minimize">
      <v-icon>mdi-{{ `chevron-${minimize ? "right" : "left"}` }}</v-icon>
    </v-btn>
    <v-btn icon @click.stop="clipped = !clipped">
      <v-icon>mdi-application</v-icon>
    </v-btn>
    <v-btn icon @click.stop="fixed = !fixed">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>
<script>
export default {
  props: {
    minimize: {},
    clipped: {},
  },
  data(){
    return{
      title:'LGU Benguet',
      fixed:false,
    }
  },
  watch:{
  }
};
</script>