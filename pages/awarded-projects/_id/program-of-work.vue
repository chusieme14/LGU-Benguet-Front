<template>
  <div class="browse-link-inner-cont">
    <h2>
      program of work
    </h2>

    <div class="program-table-wrapper">
      <table class="custom-table">
        <tr class="header">
          <th>ITEM</th>
          <th>Scope of work to be done</th>
          <th>% TOTAL</th>
          <th>QUANTITY/UNIT</th>
          <th>UNIT COST</th>
          <th>TOTAL</th>
        </tr>
        <tr v-for="(item, i) in programs" :key="i">
          <td>{{item.item_of_work.name}}</td>
          <td>{{item.item_of_work.item_number}}</td>
          <td>{{ getPercentageDecimal(item.total) }}</td>
          <td>{{ item.quantity }}{{ item.item_of_work.unit.abbreviation }}</td>
          <td>{{item.total_unit_cost}}</td>
          <td>{{item.total}}</td>
        </tr>
        <tr class="table-total">
          <td></td>
          <td class="total">TOTAL</td>
          <td class="total">100</td>
          <td class="total"></td>
          <td class="total"></td>
          <td class="total">
            P {{overall_total}}
          </td>
        </tr>
      </table>
    </div>

    <div class="program-insight">
      <div class="item breakdown">
        <h4>breakdown of estimated expenditures</h4>
        <table class="custom-table">
          <tr class="header">
            <th>Expenditures</th>
            <th>% Total</th>
            <th>amount</th>
          </tr>
          <tr>
            <td>
              1. Direct Cost :
              <ol type="a">
                <li>Labor</li>
                <li>Materials</li>
                <li>Equipment Rental</li>
              </ol>
            </td>
            <td>
              <ul>
                <li>
                  {{getPercentageDecimal(project.program_of_work.labor_total)}}
                </li>
                <li> {{
                          getPercentageDecimal(
                            project.program_of_work.material_total
                          )
                        }}</li>
                <li>{{
                          getPercentageDecimal(
                            project.program_of_work.equipment_total
                          )
                        }}</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>{{ project.program_of_work.labor_total }}</li>
                <li>{{ project.program_of_work.material_total }}</li>
                <li> {{ project.program_of_work.equipment_total }}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              2. Indirect Cost :
              <ol type="a">
                <li>Tax</li>
                <li>OCM</li>
                <li>Contractors Profit</li>
                <li>Mobilization</li>
              </ol>
            </td>
            <td>
              <ul>
                <li>{{
                          getPercentageDecimal(
                            project.program_of_work.tax_total
                          )
                        }}</li>
                <li>{{
                          getPercentageDecimal(
                            project.program_of_work.ocm_total
                          )
                        }}</li>
                <li>{{
                          getPercentageDecimal(
                            project.program_of_work.contractors_profit_total
                          )
                        }}</li>
                <li>{{
                          getPercentageDecimal(
                            project.program_of_work.mobilization_total
                          )
                        }}</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>{{ project.program_of_work.tax_total }}</li>
                <li> {{ project.program_of_work.ocm_total }}</li>
                <li>{{ project.program_of_work.contractors_profit_total }}</li>
                <li>{{ project.program_of_work.mobilization_total }}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colspan="3">3. Quality Control</td>
          </tr>
          <tr>
            <td colspan="3">4. Eng'g & Adm Overhead</td>
          </tr>
          <tr>
            <td colspan="3">5. ROW/Site Acquisition </td>
          </tr>
          <tr>
            <td colspan="3">6. Const’n Contingencies</td>
          </tr>
        </table>
      </div>
      <div class="item equipment">
        <h4>
          Equipment
        </h4>
        <table class="custom-table">
          <tr class="header">
            <th>Description</th>
            <th>No. needed</th>
          </tr>
          <tr v-for="(item, i) in equipments" :key="i + 'equip'">
            <td>{{item.equipment.name}}</td>
            <td>{{item.number_of_units}} Unit(s)</td>
          </tr>
        </table>
      </div>
      <div class="item manpower">
        <h4>
          Manpower
        </h4>
        <table class="custom-table">
          <tr v-for="(item, i) in manpowers" :key="i + 'manpower'">
            <td>{{item.manpower.job_title}}</td>
            <td>{{item.number_of_person}}</td>
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
      programs:[],
      equipments:[],
      manpowers:[],
      setting: {
        title: "",
        keyword: "",
        filter: {
          project_id: this.$route.params.id,
          status: 1,
        },
      },
      designation_equipment_settings:{
        options: {
          itemsPerPage: 15,
        },
        filter: {
            dupa_id : "",
            project_id: this.$route.params.id,
        },
      },
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
        },
        program_of_work:{}
      },
      data: [],
    }
  },
  async mounted() {
    await this.fetchDupas();
    await this.initialize();
    await this.fetchEquipments();
    await this.fetchManPower();
  },
  computed: {
    overall_total() {
      let total = 0;

      this.programs.forEach((dupa) => {
        console.log(dupa, "test");
        total = total + dupa.total;
      });
      return total.toFixed(2);
    },
  },
  methods: {
    async initialize() {
      let project = await this.$axios.get(`projects/${this.$route.params.id}`);
      console.log('params', project)
      this.project = project.data;
    },

    fetchEquipments(){
      let params = this._createParams(this.designation_equipment_settings.options);
      params = params + this._createFilterParams(this.designation_equipment_settings.filter);

      this.$axios.get(`equipment-and-capacities?${params}`).then(({ data }) => {
        console.log(data.data, 'equipements')
        this.equipments = data.data
      });
    },

    fetchManPower(){
      let params = this._createParams(this.designation_equipment_settings.options);
      params = params + this._createFilterParams(this.designation_equipment_settings.filter);

      this.$axios.get(`designation-labors?${params}`).then(({ data }) => {
            this.manpowers = data.data
            console.log(data.data, 'manpower')
          });
    },

    fetchDupas() {
      let params = this._createFilterParams(this.setting.filter);
      console.log(params);

      this.$axios.get(`dupas?${params}`).then(({ data }) => {
        // this.dupa_tableData.items = data.data;
        // this.dupa_tableData.total = data.total;
        // this.dupa_tableData.selected = [];
        console.log(data.data);
        this.programs = data.data
      });
    },
    getPercentageDecimal(dupa_total) {
      return (dupa_total / this.project.program_of_work.total).toFixed(2);
    },
  },

}
</script>

