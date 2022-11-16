<template>
  <div class="browse-table awarded-page">
    <section class="table-section table-wrapper">
      <template>
        <v-card>
          <custom-table
            :data="setting"
            :tableData="tableData"
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
    }
  }
}
</script>
