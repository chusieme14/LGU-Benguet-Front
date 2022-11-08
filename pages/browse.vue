<template>
  <div class="browse-table">
    <section class="table-wrapper">
      <template>
        <v-card>
          <v-card-title>
            projects for implementation
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
            </v-text-field>
            <v-spacer></v-spacer>
            <button class="table-filter" type="">
              <v-icon dark>
                mdi-account
              </v-icon>
              Filter
            </button>
          </v-card-title>
          <v-data-table :headers="headers" :items="projects" :search="search">
            <template v-slot:item.type="{ item }">
              <div  v-for="(item, i) in item.types"
                :key="i+'asd'"
              >
              {{item.name}} ,
             </div>
            </template>
            <template v-slot:item.location="{ item }">
              <div  v-for="(item, i) in item.barangays"
                :key="i+'asd'"
              >
              {{item.name}} ,
             </div>
            </template>
          </v-data-table>
        </v-card>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
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
        { text: 'CONTRACTOR', value: 'proj_contr' },
      ],
      projects: [],

    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.$axios.get(`projects?status=1`).then(({ data }) => {
        this.projects = data.data
        console.log(this.projects)
      })
    }
  }
}
</script>
