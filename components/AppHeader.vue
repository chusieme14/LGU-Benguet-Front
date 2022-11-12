<template>
  <div>
  <v-toolbar  fixed app height="84px" class="mx-8" flat>
    <div @click="goTo('index')">
      <v-avatar class="mr-5">
        <img
          src="/images/logo.svg"
        >
      </v-avatar>
    </div>
    <div class="app-title" @click="goTo('index')">
      <span class="text-capitalize country-name">republic of the philippines</span>
      <h3 class="text-uppercase font-weight-bold city-name">municipality of la trinidad</h3>
    </div>
    <v-spacer></v-spacer>
    <div class="mr-5 app-clock text-right">
      <span>Philippine Standard Time:</span><br/>
      <h4>{{clock}}</h4>
    </div>
    <v-btn depressed color="#ebebeb" class="px-5 text-capitalize">
      <v-icon left>mdi-account</v-icon>
      Guest
    </v-btn>
  </v-toolbar>
</div>
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
      clock:''
    }
  },
  methods:{
    updateCurrentTime() {
      this.clock = this.$moment().format("dddd, MMMM Do, YYYY, LTS");
    },
  },
  created() {
    this.clock = this.$moment().format("dddd, MMMM Do, YYYY, LTS");
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  },
  watch:{
  }
};
</script>
<style scoped>
  .app-title {
    line-height: 1.4rem;
  }

  .app-title .country-name {
    font-weight: 500;
  }

  .app-clock span {
    font-size: 13px;
    font-weight: 700;
  }
</style>
