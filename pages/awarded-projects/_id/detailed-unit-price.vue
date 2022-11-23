<template>
  <div class="browse-link-inner-cont">
    <h2>
      Detailed Unit Price
    </h2>

    <div class="unit-price-wrapper">
      <div
        :class="['per-unit', 'csr', selected_dupa == dupa.id ? 'active' : '']"
        @click="selectDupa(dupa.id)"
        v-for="(dupa, i) in data" :key="i"
      >
        {{dupa.item_of_work.item_number}} - {{dupa.item_of_work.name}}
      </div>
    </div>

    <div class="tables-wrapper">
      <table class="custom-table">
        <tr class="header">
          <th>Designation</th>
          <th>No. of person</th>
          <th>no. of days</th>
          <th>daily rate</th>
          <th>Amount</th>
        </tr>
        A. Labor
        <tr v-for="(manpower, i) in individual_dupa.designation_labors" :key="i+ 'manpower'">
          <td>{{manpower.manpower.job_title}}</td>
          <td>{{manpower.number_of_person}}</td>
          <td>{{manpower.number_of_days}}</td>
          <td>{{manpower.daily_rate}}</td>
          <td>{{manpower.amount}}</td>

          <!-- <td>
            A. Labor
            <ul>
              <li>Construction Foreman</li>
              <li>Carpenter</li>
              <li>Laborer</li>
            </ul>
          </td>
          <td>
              <span class="spacer"></span>
              <li>1</li>
              <li>1</li>
              <li>1</li>
          </td>
          <td>
              <span class="spacer"></span>
              <li>1.00</li>
              <li>1.00</li>
              <li>1.00</li>
          </td>
          <td>
              <span class="spacer"></span>
              <li>P 716.22</li>
              <li>P 483.36</li>
              <li>P 381.94</li>
          </td>
          <td>
              <span class="spacer"></span>
              <li>P 716.22</li>
              <li>P 483.36</li>
              <li>P 381.94</li>
          </td> -->
        </tr>
        <tr class="table-total">
          <td></td>
          <td></td>
          <td></td>
          <td class="total">
            <span>Sub - Total for A</span>
          </td>
          <td class="total">
            P {{individual_dupa.manpowers_total}}
          </td>
        </tr>
      </table>

      <table class="custom-table">
        <tr class="header">
          <th>Name and Capacity</th>
          <th>No. of units</th>
          <th>no. of days</th>
          <th>daily rate</th>
          <th>Amount</th>
        </tr>
        B. Equipment
        <tr v-for="(equip, i) in individual_dupa.equipment_and_capacities" :key="i+ 'equipemnt'">
          <td>{{equip.equipment.name}}</td>
          <td>{{equip.number_of_units}}</td>
          <td>{{equip.number_of_days}}</td>
          <td>{{equip.daily_rate}}</td>
          <td>{{equip.amount}}</td>

        </tr>
        <tr class="table-total">
          <td></td>
          <td></td>
          <td></td>
          <td class="total">
            <span>Sub - Total for B</span>
          </td>
          <td class="total">
            P {{individual_dupa.equipments_total}}
          </td>
        </tr>
      </table>

      <table class="custom-table">
        <tr class="header" style="visibility:hidden">
          <th>Name and Capacity</th>
          <th>No. of units</th>
          <th>no. of days</th>
          <th>daily rate</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>
            C. Total (A+B)
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
              <li>P {{individual_dupa.manpower_and_equipment_total}}</li>
          </td>
        </tr>
      </table>

      <table class="custom-table">
        <tr class="header" style="visibility:hidden">
          <th>Name and Capacity</th>
          <th>No. of units</th>
          <th>no. of days</th>
          <th>daily rate</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>
            D. Output
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
              <li>{{individual_dupa.output}}</li>
          </td>
        </tr>
      </table>

      <table class="custom-table">
        <tr class="header" style="visibility:hidden">
          <th>Name and Capacity</th>
          <th>No. of units</th>
          <th>no. of days</th>
          <th>daily rate</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>
            E. Direct Unit Cost (C÷D)
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
              <li>P {{individual_dupa.direct_unit_cost_of_manpower_equipment_output}}</li>
          </td>
        </tr>
      </table>

      <table class="custom-table">
        <tr class="header">
          <th>Name and specification</th>
          <th>Unit</th>
          <th>Quantity</th>
          <th>unit cost</th>
          <th>Amount</th>
        </tr>
        F. Materials
        <tr v-for="(material, i) in individual_dupa.material_and_specifications" :key="i+ 'material'">
          <td>{{material.material.name}}</td>
          <td>{{material.material.unit.abbreviation}}</td>
          <td>{{material.quantity}}</td>
          <td>{{material.unit_cost}}</td>
          <td>{{material.amount}}</td>
        </tr>
        <tr class="table-total">
          <td></td>
          <td></td>
          <td></td>
          <td class="total">
            <span>Sub - Total for B</span>
          </td>
          <td class="total">
            P {{individual_dupa.materials_total}}
          </td>
        </tr>
      </table>

      <table class="custom-table">
        <tr>
          <td>
            G. Direct Unit Cost
          </td>
          <td>
            ( E + F )
          </td>
          <td>
            P {{individual_dupa.direct_unit_cost_of_materials_output}}
          </td>
        </tr>
        <tr>
          <td>
            H. Overhead, Contingencies & Miscellaneous (OCM)
          </td>
          <td>
            5% of G
          </td>
          <td>
            P {{individual_dupa.overhead_contingencies_miscellaneous}}
          </td>
        </tr>
        <tr>
          <td>
            I. Contractor’s Profit (CP)
          </td>
          <td>
            15% of G
          </td>
          <td>
            P {{individual_dupa.contractors_profit}}
          </td>
        </tr>
        <tr>
          <td>
            J. Mob./Demob.
          </td>
          <td>
            2% of G
          </td>
          <td>
            P {{individual_dupa.mob_demob}}
          </td>
        </tr>
        <tr>
          <td>
            K. Value Added Tax (VAT)
          </td>
          <td>
            7% of ( G + H + I + J )
          </td>
          <td>
            P {{individual_dupa.value_added_tax}}
          </td>
        </tr>
        <tr>
          <td>
            L. Total Unit Cost
          </td>
          <td>
            ( G + H + I + J + K )
          </td>
          <td class="o-total">
            P {{individual_dupa.total_unit_cost}}
          </td>
        </tr>
      </table>

      <div class="sign-valid">
        <div class="sign-item">
          <label>Approved:</label>
          <img src="/images/sign.png" alt="sign" />
        </div>
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
      selected_dupa:0,
      individual_dupa:{
        designation_labors:[],
        equipment_and_capacities:[],
        material_and_specifications:[],
      },
      data:[],
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
        this.data = data.data;
        if (data.data.length){
          this.selectDupa(data.data[0].id)
        }
      });
    },
    selectDupa(id) {
      this.$axios.get(`dupas/${id}`).then(({ data }) => {
        console.log(data, 'dupa')
        this.individual_dupa = data
        this.selected_dupa = data.id
      })
    },
  }
}
</script>
