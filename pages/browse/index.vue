<template>
  <div class="browse-table">
    <section class="table-wrapper">
      <template>
        <v-card>
          <!-- <v-card-title>
            projects for implementation
            <v-spacer></v-spacer>
            <v-text-field v-model="search" color="#EBEE00" append-icon="mdi-magnify" label="Search" single-line hide-details>
            </v-text-field>
            <v-spacer></v-spacer>
            <button class="table-filter" type="">
              <v-icon dark>
                mdi-account
              </v-icon>
              Filter
            </button>
          </v-card-title> -->
          <custom-table
            :data="setting"
            :tableData="tableData"
            @selectRecord="selectRecord"
            @search="search"
            @fetchPage="initialize"
            :hide="['floater-btn']"
          >
          <template v-slot:type="{ item }">
            <div  v-for="(item, i) in item.types"
                :key="i+'asd'"
              >
              {{item.name}} ,
             </div>
          </template>
          <template v-slot:location="{ item }">
            <div  v-for="(item, i) in item.barangays"
                :key="i+'asdasd'"
              >
              {{item.name}} ,
             </div>
          </template>
        </custom-table>
        </v-card>
      </template>
    </section>
  </div>
</template>

<script>
import customTable from '~/components/ui/custom-table.vue'
export default {
  components: { customTable },
  auth:false,
  data() {
    return {
      setting: {
        title: "Approved Projects",
        keyword: "",
        loading: false,
        filter: {},
      },
      tableData: {
        headers: [
        {
          text: 'PROJECT NAME',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'PROJECT TYPE', value: 'type' },
        { text: 'LOCATION', value: 'location' },
        { text: 'FUND SOURCE', value: 'fund_source' },
        { text: 'APPROPRIATION', value: 'appropriation' },
        { text: 'TOTAL DAYS TO COMPLETE', value: 'mandays' },
        // { text: 'CONTRACTOR', value: 'proj_contr' },
      ],
        items: [],
        options: {
          itemsPerPage: 15,
        },
        total: 0,
        selected: [],
      },
      search: '',

      projects: [],

    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.$axios.get(`projects?status=1`).then(({ data }) => {
        this.tableData.items = data.data;
        this.tableData.total = data.total;
        this.setting.loading = false;
      })
    },
    selectRecord(item){
      localStorage.setItem('sub_nav', 0)
      this.goTo('browse-id-summary' ,{id:item.id})
    }
  }
}
</script>
