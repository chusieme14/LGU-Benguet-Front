<template>
  <div class="browse-link-inner-cont">
    <h2>unit price summary</h2>
    <div class="program-insight">
      <div class="item breakdown">
        <table class="custom-table">
          <tr class="header">
            <th>Materials</th>
            <th>unit</th>
            <th>unit Price</th>
          </tr>
          <tr>
            <td>
              I.
              <ol type="a">
                <li v-for="(mat_summ, i) in material_summaries" :key="i">
                  {{mat_summ.material.name}}
                </li>
              </ol>
            </td>
            <td>
              <li v-for="(mat_summ, i) in material_summaries" :key="i">
                {{mat_summ.material.unit.abbreviation}}
              </li>
            </td>
            <td>
              <li v-for="(mat_summ, i) in material_summaries" :key="i">
                P {{mat_summ.unit_cost}}
              </li>
            </td>
          </tr>
        </table>
      </div>
      <div class="item equipment">
        <table class="custom-table">
          <tr class="header">
            <th>Labor</th>
            <th>unit</th>
            <th>Rate</th>
          </tr>
          <tr>
            <td>
              II.
              <ol type="a">
                <li v-for="(labor_summ, n) in labor_summaries" :key="n">
                  {{labor_summ.manpower.job_title}}
                </li>
              </ol>
            </td>
            <td>
              <li v-for="(labor_summ, n) in labor_summaries" :key="n">
                Daily
              </li>
            </td>
            <td>
              <li v-for="(labor_summ, n) in labor_summaries" :key="n">
               P {{labor_summ.daily_rate}}
              </li>
            </td>
          </tr>
        </table>
      </div>
      <div class="item manpower">
        <table class="custom-table">
          <tr class="header">
            <th>Equipment</th>
            <th>unit</th>
            <th>Rate</th>
          </tr>
          <tr>
            <td>
              III.
              <ol type="a">
                <li v-for="(equip_summ, m) in equip_summaries" :key="m">
                  {{equip_summ.name}}
                </li>
              </ol>
            </td>
            <td>
              <li v-for="(equip_summ, n) in equip_summaries" :key="n">
                Daily
              </li>
            </td>
            <td>
              <li v-for="(equip_summ, n) in equip_summaries" :key="n">
               P {{equip_summ.equipment.unit_price}}
              </li>
            </td>
          </tr>
        </table>
      </div>
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
  data() {
    return {
      material_summaries : [],
      labor_summaries: [],
      equip_summaries: [],
      equipmentsData: {
        options: {
          itemsPerPage: -1,
        },
        filter: {
          dupa_id: "",
          project_id: this.$route.params.id,
        },
      },
    }
  },
  async mounted() {
    this.getEquipments();
    this.getManPower();
    this.getMaterials();
  },
  methods:{
    getEquipments() {
      let params = this._createParams(this.equipmentsData.options);
      params = params + this._createFilterParams(this.equipmentsData.filter);

      this.$axios.get(`equipment-and-capacities?${params}`).then(({ data }) => {
        // this.tableData.items = data.data;
        // this.tableData.total= data.total
        // this.tableData.selected=[]
        this.equip_summaries = data.data;
        console.log(data.data, "equipment-and-capacities");
      });
    },

    getManPower() {
      let params = this._createParams(this.equipmentsData.options);
      params = params + this._createFilterParams(this.equipmentsData.filter);

      this.$axios.get(`designation-labors?${params}`).then(({ data }) => {
        this.labor_summaries = data.data;
        console.log(data, "designation-labors");
      });
    },

    getMaterials() {
      let params = this._createParams(this.equipmentsData.options);
      params = params + this._createFilterParams(this.equipmentsData.filter);

      this.$axios
        .get(`material-and-specifications?${params}`)
        .then(({ data }) => {
          console.log(data, "material");
          this.material_summaries = data.data;
        });
    },
  }
}
</script>
