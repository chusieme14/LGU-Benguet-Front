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
                  {{mat_summ.material}}
                </li>
              </ol>
            </td>
            <td>
              <li v-for="(mat_summ, i) in material_summaries" :key="i">
                {{mat_summ.unit}}
              </li>
            </td>
            <td>
              <li v-for="(mat_summ, i) in material_summaries" :key="i">
                {{mat_summ.unit_price}}
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
                  {{labor_summ.labor}}
                </li>
              </ol>
            </td>
            <td>
              <li v-for="(labor_summ, n) in labor_summaries" :key="n">
                {{labor_summ.unit}}
              </li>
            </td>
            <td>
              <li v-for="(labor_summ, n) in labor_summaries" :key="n">
                {{labor_summ.rate}}
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
                  {{equip_summ.equip}}
                </li>
              </ol>
            </td>
            <td>
              <li v-for="(equip_summ, n) in equip_summaries" :key="n">
                {{equip_summ.unit}}
              </li>
            </td>
            <td>
              <li v-for="(equip_summ, n) in equip_summaries" :key="n">
                {{equip_summ.rate}}
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
      material_summaries : [
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },
        {
          material: 'Tarpaulin',
          unit: 'ft2',
          unit_price: 'P 50.00'
        },

      ],
      labor_summaries: [
        {
          labor: 'Construction foreman',
          unit: 'Daily',
          rate: 'P 716.22'
        },
        {
          labor: 'Construction foreman',
          unit: 'Daily',
          rate: 'P 716.22'
        },
        {
          labor: 'Construction foreman',
          unit: 'Daily',
          rate: 'P 716.22'
        },
        {
          labor: 'Construction foreman',
          unit: 'Daily',
          rate: 'P 716.22'
        },
        {
          labor: 'Construction foreman',
          unit: 'Daily',
          rate: 'P 716.22'
        },
        {
          labor: 'Construction foreman',
          unit: 'Daily',
          rate: 'P 716.22'
        },
        {
          labor: 'Construction foreman',
          unit: 'Daily',
          rate: 'P 716.22'
        },
      ],
      equip_summaries: [
        {
          equip: 'Backhoe with Breaker (0.80m^3)',
          unit: 'Daily',
          rate: 'P 15,958.80',
        },
        {
          equip: 'Backhoe with Breaker (0.80m^3)',
          unit: 'Daily',
          rate: 'P 15,958.80',
        },
        {
          equip: 'Backhoe with Breaker (0.80m^3)',
          unit: 'Daily',
          rate: 'P 15,958.80',
        },
        {
          equip: 'Backhoe with Breaker (0.80m^3)',
          unit: 'Daily',
          rate: 'P 15,958.80',
        },
        {
          equip: 'Backhoe with Breaker (0.80m^3)',
          unit: 'Daily',
          rate: 'P 15,958.80',
        },
        {
          equip: 'Backhoe with Breaker (0.80m^3)',
          unit: 'Daily',
          rate: 'P 15,958.80',
        },
        {
          equip: 'Backhoe with Breaker (0.80m^3)',
          unit: 'Daily',
          rate: 'P 15,958.80',
        },
        {
          equip: 'Backhoe with Breaker (0.80m^3)',
          unit: 'Daily',
          rate: 'P 15,958.80',
        },
        {
          equip: 'Backhoe with Breaker (0.80m^3)',
          unit: 'Daily',
          rate: 'P 15,958.80',
        },
      ]
    }
  }
}
</script>
