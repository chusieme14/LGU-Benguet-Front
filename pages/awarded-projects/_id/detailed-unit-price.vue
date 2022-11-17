<template>
  <div class="browse-link-inner-cont">
    <h2>
      Detailed Unit Price
    </h2>

    <div class="unit-price-wrapper">
      <div class="per-unit csr" v-for="(unit_price, i) in unitPrice" :key="i">
        {{unit_price.name}}
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
        <tr>
          <td>
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
          </td>
        </tr>
        <tr class="table-total">
          <td></td>
          <td></td>
          <td></td>
          <td class="total">
            <span>Sub - Total for A</span>
          </td>
          <td class="total">
            P 999,954.13
          </td>
        </tr>
      </table>

      <table class="custom-table">
        <tr class="header">
          <th>Name and Capacity</th>
          <th>No. of person</th>
          <th>no. of days</th>
          <th>daily rate</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>
            B. Equipment
          </td>
          <td>
            <li></li>
          </td>
          <td>
            <li></li>
          </td>
          <td>
            <li></li>
          </td>
          <td>
            <li>P 0.00</li>
          </td>
        </tr>
        <tr class="table-total">
          <td></td>
          <td></td>
          <td></td>
          <td class="total">
            <span>Sub - Total for B</span>
          </td>
          <td class="total">
            P 999,954.13
          </td>
        </tr>
      </table>

      <table class="custom-table">
        <tr>
          <td>
            C. Total (A+B)
          </td>
          <td>
              <li></li>
          </td>
          <td>
              <li></li>
          </td>
          <td>
              <li></li>
          </td>
          <td>
              <li>P 1,581.52</li>
          </td>
        </tr>
      </table>

      <table class="custom-table">
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
        </tr>
      </table>

      <table class="custom-table">
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
              <li>P 1,581.52</li>
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
        <tr>
          <td>
            F. Materials
            <ol type="a">
              <li>a. Tarpaulin</li>
              <li>Good Lumber (Braces & Frame)</li>
              <li>Common Wire Nails</li>
              <li>Marine Plywood 1/4 x 4 x 8</li>
            </ol>
          </td>
          <td>
              <span class="spacer"></span>
              <li>ft²</li>
              <li>bd. ft.</li>
              <li>kgs.</li>
              <li>pc.</li>
          </td>
          <td>
              <span class="spacer"></span>
              <li>32</li>
              <li>37</li>
              <li>2</li>
              <li>1</li>
          </td>
          <td>
              <span class="spacer"></span>
              <li>P 50.00</li>
              <li>P 50.00</li>
              <li>P 70.00</li>
              <li>P 950.00</li>
          </td>
          <td>
              <span class="spacer"></span>
              <li></li>
              <li>P 716.22</li>
              <li>P 483.36</li>
              <li>P 381.94</li>
          </td>
        </tr>
        <tr class="table-total">
          <td></td>
          <td></td>
          <td></td>
          <td class="total">
            <span>Sub - Total for B</span>
          </td>
          <td class="total">
            P 999,954.13
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
            P 6,121.52
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
            P 306.08
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
            P 918.23
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
            P 122.43
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
            P 522.78
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
            P 7,991.03
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
  data() {
    return {
      unitPrice: [
        {
          name: 'B5 - Project Billboard/Sign Board'
        },
        {
          name: 'SPL. A - Construction Safety and Health Program'
        },
        {
          name: 'SPL. B - Site Works'
        },
        {
          name: '801 (1) a - Structure Excavation (with Equipment)'
        },
        {
          name: '801 (1) a - Structure Excavation (with Equipment)'
        },
        {
          name: '404 - Reinforceing Steel'
        },
        {
          name: '903 (2) - Formworks and False Works'
        },
        {
          name: '900 (1) c2 - Structural Concrete'
        },
        {
          name: '102 - Embankment'
        },
        {
          name: '500 (5) - Grouted Riprap (Class A)'
        },
      ]
    }
  }
}
</script>
