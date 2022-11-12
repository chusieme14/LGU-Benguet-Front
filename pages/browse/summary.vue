<template>
  <div class="browse-link-inner-cont">
    <table>
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
  </div>
</template>

<script>
export default {
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
