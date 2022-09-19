<template>
  <div class="app-footer">
    <div class="main-margin">
      <v-container>
        <div class="web-logo">
          <img src="/images/logo.png" alt="">
          <div>
            <h2>La Trinidad, Benguet</h2>
            <h5>The Strawberry and Rose Capital of the Philippines</h5>
          </div>
        </div>

        <div class="web-footer-links">
          <li
            class="text-uppercase"
            v-for="link in links"
            :key="link.name"
          >
            {{link.name}}
          </li>
        </div>

        <div align="center">
          <span>
            Municipality La Trinidad, Benguet | All rights reserved | 2022
          </span>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      links: [
        {
          name: 'Browse'
        },
        {
          name: 'Budget'
        },
        {
          name: 'Barangays'
        },
        {
          name: 'Mayors office - La trinida'
        },
        {
          name: 'Organisational Chart'
        },
        {
          name: 'About La Trinidad, Benguet'
        },
        {
          name: 'Tourism'
        },
        {
          name: 'LT Cooperatives'
        },
        {
          name: 'Citizen’s Charter'
        },
        {
          name: 'Employees'
        },
        {
          name: 'Gallery'
        },
        {
          name: 'Follow us on Facebook'
        },
        {
          name: 'Organizational Chart'
        },
        {
          name: 'Assets & Properties'
        },
        {
          name: 'News and Events'
        },
        {
          name: 'Building Permit Forms'
        },
      ]
    }
  }
}
</script>
