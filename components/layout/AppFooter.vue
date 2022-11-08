<template>
  <div class="app-footer">
    <section class="contact-us">
      <div class="main-margin">
        <div class="container">
          <div class="contact-wrapper">
            <div class="contact-form">
              <h4>Send us a Message</h4>
              <form>
                <div class="input-type">
                  <label for="">Full Name</label>
                  <input type="" name="" value="" placeholder="Your Full Name">
                </div>
                <div class="input-type">
                  <label for="">Email</label>
                  <input type="" name="" value="" placeholder="Your email ">
                </div>
                <div class="input-type">
                  <label for="">Phone Number</label>
                  <input type="" name="" value="" placeholder="+63">
                </div>
                <div class="input-type full-w">
                  <label for="">Message</label>
                  <textarea rows="" cols="" placeholder="You Message"></textarea>
                </div>
                <button typpe="submit">SEND</button>
              </form>
            </div>
            <div class="contact-details">
              <h3>Contact Us</h3>
              <h4>Lets us know about your concerns.</h4>
              <span>
                <i></i>
                Municipality OF La Trinidad, Benguet
              </span>
              <span>
                <i></i>
                +63 976 131 8546
              </span>
              <span>
                <i></i>
                MEO.latrinidabenguet@gmail.com
              </span>
              <span>
                <i></i>
                La Trindad Benguet
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
