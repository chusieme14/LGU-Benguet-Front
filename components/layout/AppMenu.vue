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
        >
          <v-tab
            v-for="item in menus"
            :key="item.name"
            @click="goTo(item.route)"
          >
            {{item.name}}
          </v-tab>
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
      menus:[
      {
          name: 'Home',
          route: 'index'
        },
        {
          name: 'Browse',
          route: 'browse'
        },
        {
          name: 'Citizen’s Charter',
          route: 'citizen-charter'
        },
        {
          name: 'Organizational Chart',
          route: 'browse'
        },
        {
          name: 'Building Permit Forms',
          route: 'building-permit-forms'
        },
      ]
    }
  }
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
