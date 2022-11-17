<template>
    <div class="app-menu-container">
        <!-- <v-btn depressed class="menu" @click="goTo('browse')">Browse</v-btn>
        <v-btn depressed class="menu">Citizen’s Charter</v-btn>
        <v-btn depressed class="menu">Organizational Chart</v-btn>
        <v-btn depressed class="menu">Building Permit Forms</v-btn>
        <div style="width:150px ;">
            <v-text-field
                solo
                filled
                hide-details
                dense
                 flat
                prepend-inner-icon="mdi-magnify"
                placeholder="search"
            ></v-text-field>
        </div> -->
        <v-tabs
          right
          v-model="tab"
        >
        <template v-for="item in menus">
          <v-tab
          v-if="item.name"
            :key="item.name"
            @click="redirect(item)"
          >
            {{item.name}}
          </v-tab>
        </template>
          <v-tab>
            <div style="width:400px ;">
            <v-text-field
                solo
                filled
                hide-details
                dense
                flat
                prepend-inner-icon="mdi-magnify"
                placeholder="Search"
            ></v-text-field>
        </div>
      </v-tab>
        </v-tabs>
    </div>
</template>
<script>
export default {
  data(){
    return {
      test:true,
      menus:[
        {
          index:0,
          name: 'Home',
          route: 'index'
        },
        {
          index:1,
          name: 'Browse',
          route: 'browse'
        },
        this.$auth.user ?
        {
          index:2,
          name: 'Awarded Projects',
          route: 'awarded-projects'
        } : {},
        {
          index:3,
          name: 'Citizen’s Charter',
          route: 'citizen-charter'
        },
        {
          index:4,
          name: 'Organizational Chart',
          route: 'organizational-chart'
        },
        {
          index:5,
          name: 'Building Permit Forms',
          route: 'building-permit-forms'
        },
      ],
      tab:0
    }
  },
  mounted(){
    this.checkActive()
  },
  methods:{
    checkActive(){
      let nav = parseInt(localStorage.getItem('nav'))  ||  0
      console.log(nav,'nav')
      this.tab = nav
    },
    redirect(item){
      this.goTo(item.route)
      localStorage.setItem('nav',item.index)
    }
  },
  watch: {
    $route(to, from) {
      // this.checkActive()
    },
  },
}
</script>
<style scoped>
.app-menu-container{
    /* Auto layout */

display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 12px 30px;
gap: 0px;

width: 100%;
height: 50px;

/* grey */

background: #F6F6F6;

/* Inside auto layout */

/* flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
 */
}

.app-menu-container .menu{

/* identical to box height */

text-transform: uppercase;

color: #000000;
}
</style>
