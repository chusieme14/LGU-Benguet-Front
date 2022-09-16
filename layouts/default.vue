<template>
  <v-app dark>
    <SideBar :minimize="miniVariant" :drawer="drawer" :clipped="clipped"/>
    <AppHeader :minimize="miniVariant" @drawer="drawerMet" :clipped="clipped"/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'Vuetify.js'
    }
  },
  methods:{
    drawerMet(){
      this.drawer = !this.drawer
    }
  }
}
</script>
