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
      <tr v-for="(item, i) in approved_budgets" :key="i">
        <td>{{item.item}}</td>
        <td>{{item.desc}}</td>
        <td>{{item.qtyy}}</td>
        <td>{{item.percent_total}}</td>
        <td>{{item.estimate}}</td>
        <td>{{item.vat}}</td>
        <td class="customTD">
          <div class="multiple-td">
            <span v-for="(mark, n) in item.mark_ups" :key="n">
              {{mark.ocm}}
            </span>
            <span v-for="(mark, n) in item.mark_ups" :key="n">
              {{mark.prof}}
            </span>
            <span v-for="(mark, n) in item.mark_ups" :key="n">
              {{mark.mob}}
            </span>
          </div>
        </td>
        <td class="customTD">
          <div class="multiple-td">
            <span v-for="(totalm, m) in item.total_m_up" :key="m">
              {{totalm.percent}}
            </span>
            <span v-for="(totalm, m) in item.total_m_up" :key="m">
              {{totalm.val}}
            </span>
          </div>
        </td>
        <td>{{item.total_ind_cost}}</td>
        <td>{{item.total_cost}}</td>
        <td>{{item.unit_w_item}}</td>
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
          <td class="total">766,013.58</td>
          <td class="total">53,620.95</td>
          <td class="total"></td>
          <td class="total">168,522.99</td>
          <td class="total">168,522.99</td>
          <td class="total">999,954.13</td>
          <td class="total"></td>
        </tr>
    </table>

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
      ]
    }
  }
}
</script>
