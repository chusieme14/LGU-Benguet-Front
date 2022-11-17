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
          <td>{{item.item_name}}</td>
          <td>{{item.item_scope}}</td>
          <td>{{item.item_percent_total}}</td>
          <td>{{item.item_qnty}}</td>
          <td>{{item.item_unit_cost}}</td>
          <td>{{item.item_total}}</td>
        </tr>
        <tr class="table-total">
          <td></td>
          <td class="total">TOTAL</td>
          <td class="total">100</td>
          <td class="total"></td>
          <td class="total"></td>
          <td class="total">
            P 999,954.13
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
                <li>19.77</li>
                <li>50.58</li>
                <li>6.25</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>197,685.86</li>
                <li>505,793.86</li>
                <li>62,533.86</li>
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
                <li>6.54</li>
                <li>6.54</li>
                <li>6.54</li>
                <li>6.54</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>65,417.56</li>
                <li>65,417.56</li>
                <li>65,417.56</li>
                <li>65,417.56</li>
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
          <tr>
            <td>Backhoe with Breaker (0.80m^3)</td>
            <td>1 Unit</td>
          </tr>
          <tr>
            <td>One Bagger Mixer</td>
            <td>1 Unit</td>
          </tr>
          <tr>
            <td>Dumptruck (12yd)</td>
            <td>1 Unit</td>
          </tr>
          <tr>
            <td>Plate Compactor (5hp)</td>
            <td>1 Unit</td>
          </tr>
          <tr>
            <td>Bar Cutter</td>
            <td>1 Unit</td>
          </tr>
          <tr>
            <td>Water Truck</td>
            <td>1 Unit</td>
          </tr>
          <tr>
            <td>Bar Bender</td>
            <td>1 Unit</td>
          </tr>
        </table>
      </div>
      <div class="item manpower">
        <h4>
          Manpower
        </h4>
        <table class="custom-table">
          <tr>
            <td>Civil Engineer</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Const. Foreman</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Mason</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Steelman</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Skilled Laborer</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Carpenter</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Laborer</td>
            <td>10</td>
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
      programs: [
        {
          item_name: 'B5',
          item_scope: 'Project Billboard/Sign Baord',
          item_percent_total: '0.80',
          item_qnty: '1.00 ls',
          item_unit_cost: '7,999.03',
          item_total: '7,999.03',
        },
        {
          item_name: 'B5',
          item_scope: 'Project Billboard/Sign Baord',
          item_percent_total: '0.80',
          item_qnty: '1.00 ls',
          item_unit_cost: '7,999.03',
          item_total: '7,999.03',
        },
        {
          item_name: 'B5',
          item_scope: 'Project Billboard/Sign Baord',
          item_percent_total: '0.80',
          item_qnty: '1.00 ls',
          item_unit_cost: '7,999.03',
          item_total: '7,999.03',
        },
        {
          item_name: 'B5',
          item_scope: 'Project Billboard/Sign Baord',
          item_percent_total: '0.80',
          item_qnty: '1.00 ls',
          item_unit_cost: '7,999.03',
          item_total: '7,999.03',
        },
        {
          item_name: 'B5',
          item_scope: 'Project Billboard/Sign Baord',
          item_percent_total: '0.80',
          item_qnty: '1.00 ls',
          item_unit_cost: '7,999.03',
          item_total: '7,999.03',
        },
      ]
    }
  }
}
</script>
