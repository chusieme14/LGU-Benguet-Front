<template>
  <div>
      <section class="browse-links">
        <div>
          <div class="browse-inn-wrap">
            <li
            v-for="(item, index) in menus"
            :key="item.name"
            @click="redirect(item, index)"
            :class="['csr', checkIfActive(index) ? 'active' : '']"
            >
              {{item.name}}
            </li>
          </div>
          <!-- <div class="browse-link-cont">
            adad
          </div> -->
        </div>
      </section>
  </div>
</template>
<script>
export default {
  data(){
    return {
      menus:[
        {
          name: 'Summary',
          route:'browse-id-summary'
        },
        {
          name: 'program of work',
          route:'browse-id-program-of-work'
        },
        {
          name: 'Detailed unit price',
          route:'browse-id-detailed-unit-price'
        },
        {
          name: 'plan',
          route:'browse-id-plan'
        },
        {
          name: 'Approved budget',
          route:'browse-id-approved-budget'
        },
        {
          name: 'unit price summary',
          route:'browse-id-unit-price-summary'
        },
        {
          name: 'PROCUREMENT',
          route:'browse-id-procurement'
        },
      ],
      local:0
    }
  },
  mounted(){
    this.local = parseInt(localStorage.getItem('sub_nav')) || 0
  },
  methods:{
    redirect(item, index){
      localStorage.setItem('sub_nav', index)
      this.local = index
      this.goTo(item.route)
    },
    checkIfActive(index){
      return this.local == index
    }
  }
}
</script>
