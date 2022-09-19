<template>
  <v-app dark>
    <!-- <SideBar :minimize="miniVariant" :drawer="drawer" :clipped="clipped"/> -->
    <AppHeader :minimize="miniVariant" @drawer="drawerMet" :clipped="clipped"/>
    <app-menu></app-menu>
    <v-main>
        <Nuxt />
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import appMenu from '~/components/layout/AppMenu.vue'
  import appFooter from '~/components/layout/AppFooter.vue'
export default {
  components:{
    appMenu,
    appFooter
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
