<template>
  <v-app dark>
    <!-- <SideBar :minimize="miniVariant" :drawer="drawer" :clipped="clipped"/> -->
    <AppHeader :minimize="miniVariant" @drawer="drawerMet" :clipped="clipped"/>
    <app-menu></app-menu>
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
  import appMenu from '~/components/layout/AppMenu.vue'
export default {
  components:{
    appMenu
  },
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: true,
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
