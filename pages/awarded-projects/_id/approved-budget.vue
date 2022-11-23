<template>
  <div class="browse-link-inner-cont approv-budget-page">
    <h2>Approved budget</h2>
    <table class="custom-table">
      <tr class="header">
        <th>ITEm</th>
        <th>DEscription</th>
        <th>Quantity<br>/ unit</th>
        <th>% Total</th>
        <th>Estimated<br>direct Cost<br>(EDC)</th>
        <th>Value Added<br>Tax (VAT)</th>
        <th>
          <small class="th-underline th-font">
            Mark-ups (%)<br>
          </small>
          <div class="multiple-td">
            <span>(OCM) </span>
            <span>Profit</span>
            <span>Mob/<br>Demob</span>
          </div>
        </th>
        <th>
          <small class="th-underline th-font">
            T0tal mark-up<br>
          </small>
          <div class="multiple-td">
            <span>%</span>
            <span>Value</span>
          </div>
        </th>
        <th>Total<br>Indirect Cost</th>
        <th>Total Cost</th>
        <th>Unit Cost of<br>Work Item</th>
      </tr>
      <tr v-for="(item, i) in data" :key="i">
        <td>{{ item.item_of_work.item_number }}</td>
        <td>{{ item.item_of_work.name }}</td>
        <td>
          {{ item.quantity }} /
          {{ item.item_of_work.unit.abbreviation }}
        </td>
        <td>{{ getPercentTotal(item).toFixed(2) }}</td>
        <td>{{ getEdc(item).toFixed(2) }}</td>
        <td>{{ item.value_added_tax }}</td>
        <td class="customTD">
          <div class="multiple-td">
            <span>
              {{
                item.overhead_contingencies_miscellaneous_percentage
              }}%
            </span>
            <span>
              {{ item.contractors_profit_percentage }}%
            </span>
            <span>
              {{ item.mob_demob_percentage }}%
            </span>
          </div>
        </td>
        <td class="customTD">
          <div class="multiple-td">
            <span>{{ getTotalMarkUpPercent(item) }}</span>
            <span>{{ getTotalMarkUpValue(item).toFixed(2) }}</span>
          </div>
        </td>
        <!-- <td>{{item.total_ind_cost}}</td>
        <td>{{item.total_cost}}</td>
        <td>{{item.unit_w_item}}</td> -->
        <td>{{ getTotalIndirectCost(item).toFixed(2) }}</td>
        <td>{{ item.total }}</td>
        <td>{{ item.total_unit_cost }}</td>
      </tr>
      <tr class="table-total">
          <td class="total">
            TOTAL
          </td>
          <td class="total"></td>
          <td class="total"></td>
          <td class="total">
            100.00
          </td>
          <td class="total">{{ overall_direct_cost }}</td>
          <td class="total">{{ overall_vat }}</td>
          <td class="total"></td>
          <td class="total">{{ overall_total_mark_up_value }}</td>
          <td class="total">{{ overall_total_indirect }}</td>
          <td class="total">{{ overall_total_cost }}</td>
          <td class="total"></td>
        </tr>
    </table>
    <!-- <div class="sign-valid">
      <div class="sign-item">
        <label>Prepared by:</label>
        <h3>{{project.approved_budget.prepared.fullname}}</h3>
        <span>Engineer I</span>
        <img :src="imageLink(project.approved_budget.prepared.signature)" alt="sign" />
      </div>
      <div class="sign-item">
        <label>Recommending Approval:</label>
        <h3>{{project.approved_budget.rec_approve.fullname}}</h3>
        <span>Municipal Engineer</span>
        <img :src="imageLink(project.approved_budget.rec_approve.signature)" alt="sign" />
      </div>
      <div class="sign-item">
        <label>Approved:</label>
        <h3>{{project.approved_budget.approved_by}}</h3>
        <span>{{project.approved_budget.approved_by_position}}</span>
        <img src="/images/sign.png" alt="sign" />
      </div>
    </div> -->
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
      approved_budgets : [
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          qtyy: '1.00 ls',
          percent_total: '0.80',
          estimate: '7,991.03',
          vat: '428.51',
          mark_ups: [
            {
              ocm: '5.00',
              prof: '15.00',
              mob: '2.00',
            },
          ],
          total_m_up: [
            {
              percent: '22.00',
              val: '1,346.73'
            },
          ],
          total_ind_cost: '1,775.24',
          total_cost: '7,991.03',
          unit_w_item: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          qtyy: '1.00 ls',
          percent_total: '0.80',
          estimate: '7,991.03',
          vat: '428.51',
          mark_ups: [
            {
              ocm: '5.00',
              prof: '15.00',
              mob: '2.00',
            },
          ],
          total_m_up: [
            {
              percent: '22.00',
              val: '1,346.73'
            },
          ],
          total_ind_cost: '1,775.24',
          total_cost: '7,991.03',
          unit_w_item: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          qtyy: '1.00 ls',
          percent_total: '0.80',
          estimate: '7,991.03',
          vat: '428.51',
          mark_ups: [
            {
              ocm: '5.00',
              prof: '15.00',
              mob: '2.00',
            },
          ],
          total_m_up: [
            {
              percent: '22.00',
              val: '1,346.73'
            },
          ],
          total_ind_cost: '1,775.24',
          total_cost: '7,991.03',
          unit_w_item: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          qtyy: '1.00 ls',
          percent_total: '0.80',
          estimate: '7,991.03',
          vat: '428.51',
          mark_ups: [
            {
              ocm: '5.00',
              prof: '15.00',
              mob: '2.00',
            },
          ],
          total_m_up: [
            {
              percent: '22.00',
              val: '1,346.73'
            },
          ],
          total_ind_cost: '1,775.24',
          total_cost: '7,991.03',
          unit_w_item: '7,991.03'
        },
      ],
      setting: {
        title: "",
        keyword: "",
        filter: {
          project_id: this.$route.params.id,
          status: 1,
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
        }
      },
      data: [],
    }
  },
  computed: {
    overall_total_cost() {
      let total = 0;

      this.data.forEach((dupa) => {
        console.log(dupa, "test");
        total = total + dupa.total;
      });
      return total.toFixed(2);
    },
    overall_total_indirect() {
      let total = 0;

      this.data.forEach((dupa) => {
        console.log(dupa, "test");
        total = total + this.getTotalIndirectCost(dupa);
      });
      return total.toFixed(2);
    },
    overall_total_mark_up_value() {
      let total = 0;

      this.data.forEach((dupa) => {
        console.log(dupa, "test");
        total = total + this.getTotalMarkUpValue(dupa);
      });
      return total.toFixed(2);
    },
    overall_direct_cost() {
      let total = 0;

      this.data.forEach((dupa) => {
        console.log(dupa, "test");
        total = total + this.getEdc(dupa);
      });
      return total.toFixed(2);
    },
    overall_vat() {
      let total = 0;

      this.data.forEach((dupa) => {
        console.log(dupa, "test");
        total = total + dupa.value_added_tax;
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
      });
    },
    getPercentTotal(item) {
      return (item.total / this.overall_total_cost) * 100;
    },
    getPercentageDecimal(dupa_total) {
      return (dupa_total / this.project.program_of_work.total).toFixed(2);
    },

    getEdc(item) {
      return (
        item.manpowers_total + item.materials_total + item.equipments_total
      );
    },
    getTotalIndirectCost(item) {
      return (
        item.contractors_profit +
        item.mob_demob +
        item.overhead_contingencies_miscellaneous +
        item.value_added_tax
      );
    },
    getTotalMarkUpPercent(item) {
      return (
        item.overhead_contingencies_miscellaneous_percentage +
        item.contractors_profit_percentage +
        item.mob_demob_percentage +
        "%"
      );
    },
    getTotalMarkUpValue(item) {
      return (
        item.overhead_contingencies_miscellaneous +
        item.contractors_profit +
        item.mob_demob
      );
    },
    showForm() {
      console.log(this.data, 'data')
      if (this.project.approved_budget?.id) {
        return this.downloadFile(this.project.approved_budget?.filepath);
      }
      this.dialog = true;
    },
    generate(item) {
      let payload = {
        total_estimated_direct_cost: this.overall_direct_cost,
        total_tax_value: this.overall_vat,
        total_mark_up_value: this.overall_total_mark_up_value,
        total_indirect_cost: this.overall_total_indirect,
        total_cost: this.overall_total_cost,
        project_id: this.$route.params.id,
        prepared_id: item.prepared_id,
        rec_approve_id: item.rec_approve_id,
        approved_by: item.approved_by,
        approved_by_position: item.approved_by_position,
      };

      this.$axios.post("save-approved-budget", payload).then(({ data }) => {
        this.generateDoc();
      });
    },
    generateDoc() {
      let payload = {
        document: "approved_budget_contract.docx",
        report_type: "individual",
        category: "approve_budget_contract",
      };
      this.$axios
        .post(`generate-report/${this.$route.params.id}`, payload)
        .then((result) => {
          this.downloadFile(result.data)
        });
    },
    downloadFile(path){
      console.log(path, "path")
      this.$axios({
        url: `${process.env.APP_URL}${path}`, // download file link goes here
        method: "GET",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        responseType: "blob",
      }).then((res) => {
        console.log(res)
        var FILE = window.URL.createObjectURL(new Blob([res.data]));

        var docUrl = document.createElement("a");
        docUrl.href = FILE;
        docUrl.setAttribute("download", 'ABC'+this.project.name+'.docx');
        document.body.appendChild(docUrl);
        docUrl.click();
      });
    }
  },

}
</script>
