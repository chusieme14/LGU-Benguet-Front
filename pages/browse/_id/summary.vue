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
        <td>{{item.item}}</td>
        <td>{{item.desc}}</td>
        <td>{{item.amount}}</td>
      </tr>
    </table>
    <div class="summary-total">
      <span>Sub - Total for A</span>
      <span>P 265,846.62</span>
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
      summaries : [
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          amount: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          amount: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          amount: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          amount: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          amount: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          amount: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          amount: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          amount: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          amount: '7,991.03'
        },
        {
          item: 'B5',
          desc: 'Project Billboard/Sign Board',
          amount: '7,991.03'
        },
      ]
    }
  }
}
</script>
