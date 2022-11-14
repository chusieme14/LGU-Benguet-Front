<template>
  <div>
      <section class="browse-links">
        <div>
          <div class="browse-inn-wrap">
            <li
              class="csr"
              @click="goTo(item.route)"
              v-for="item in menus"
              :key="item.name"
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
      ]
    }
  }
}
</script>
