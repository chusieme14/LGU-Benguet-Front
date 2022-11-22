<template>
  <div class="browse-link-inner-cont">
    <h2>Summary</h2>
    <table class="custom-table">
      <tr class="header">
        <th>ITEM</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
      <tr v-for="(item, i) in summaries" :key="i">
        <td>{{item.item_of_work.item_number}}</td>
        <td>{{item.item_of_work.name}}</td>
        <td>{{item.total}}</td>
      </tr>
    </table>
    <div class="summary-total">
      <span>Sub - Total for A</span>
      <span>P {{overall_total}}</span>
    </div>

    <div class="sign-valid">
      <div class="sign-item">
        <label>Prepared by:</label>
        <h3>Jun L. Daliones</h3>
        <span>Engineer I</span>
        <img src="/images/sign.png" alt="sign" />
      </div>
      <div class="sign-item">
        <label>Recommending Approval:</label>
        <h3>Benedict P. Pineda</h3>
        <span>Municipal Engineer</span>
        <img src="/images/sign.png" alt="sign" />
      </div>
      <div class="sign-item">
        <label>Approved:</label>
        <h3>Romeo K. Salda</h3>
        <span>Municipal Mayor</span>
        <img src="/images/sign.png" alt="sign" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth:false,
  data() {
    return {
      setting: {
        title: "",
        keyword: "",
        filter: {
          project_id: this.$route.params.id,
          status: 1,
        },
      },
      summaries:[],
      project:{
        approved_budget:{
          prepared: {
            fullname: '',
            signature:''
          },
          rec_approve:{
            fullname: '',
            signature:''
          },
          approved_by:'',
          approved_by_position:''
        }
      },
    }
  },
  computed: {
    overall_total() {
      let total = 0;

      this.summaries.forEach((dupa) => {
        console.log(dupa, "test");
        total = total + dupa.total;
      });
      return total.toFixed(2);
    },
  },
  async mounted() {
    await this.initialize();
    await this.fetchDupas();
  },
  methods: {
    async initialize() {
      let project = await this.$axios.get(`projects/${this.$route.params.id}`);
      console.log('params', project)
      this.project = project.data;
    },

    fetchDupas() {
      let params = this._createFilterParams(this.setting.filter);
      console.log(params);

      this.$axios.get(`dupas?${params}`).then(({ data }) => {
        // this.dupa_tableData.items = data.data;
        // this.dupa_tableData.total = data.total;
        // this.dupa_tableData.selected = [];
        console.log(data.data);
        this.summaries = data.data;
      });
    },
  }
}
</script>
