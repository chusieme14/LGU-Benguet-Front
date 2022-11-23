<template>
  <v-container class="login-main-container" fluid>
    <div class="inner-container">
      <div class="image hidden-xs-only authentication-img">
        <div class="authentication-img-content">
          <img src="/images/logo.png" alt="">
          <h2>La Trinidad, Benguet</h2>
          <p>The Strawberry and Rose Capital of the Philippines</p>
        </div>
      </div>
      <div class="login-form">
        <div>
          <img src="/images/logo.png" alt="">
          <h2>La Trinidad, Benguet</h2>
          <p>The Strawberry and Rose Capital of the Philippines</p>
          <v-form ref="form" v-model="valid" lazy-validation>
            <div class="form-inner-wrapper">
              <div class="auth-wrap half-w">
                <label for="">First Name</label>
                <v-text-field v-model="payload.first_name" :rules="[!!payload.first_name || 'First Name is required']"
                  placeholder="Your First Name" required outlined dense hide-details="auto" class="mb-2"></v-text-field>
              </div>

              <div class="auth-wrap half-w">
                <label for="">Last Name</label>
                <v-text-field v-model="payload.last_name" :rules="[!!payload.last_name || 'Last Name is required']"
                  placeholder="Your Last Name" required outlined dense hide-details="auto" class="mb-2"></v-text-field>
              </div>

              <div class="auth-wrap">
                <label for="">Email</label>
                <v-text-field v-model="payload.email" :rules="[!!payload.email || 'Email is required']"
                  placeholder="@mail.com" required outlined dense hide-details="auto" class="mb-2"></v-text-field>
              </div>


              <!-- <v-text-field label="Password" v-model="password" :rules="passwordRules" type="password" required>
              </v-text-field>
              <v-text-field label="Confirm Password" v-model="confirmPassword"
                :rules="confirmPasswordRules.concat(passwordConfirmationRule)" type="password" required></v-text-field> -->

              <div class="auth-wrap">
                <label for="">Password</label>
                <v-text-field v-model="payload.password" :rules="passwordRules" type="password" placeholder="*****" required outlined dense
                  hide-details="auto" class="mb-2"></v-text-field>
              </div>

              <div class="auth-wrap">
                <label for="">Repeat Password</label>
                <v-text-field v-model="payload.repeat_password" :rules="confirmPasswordRules.concat(passwordConfirmationRule)" type="password" placeholder="*****" required outlined
                  dense hide-details="auto" class="mb-2"></v-text-field>
              </div>
            </div>

            <div class="remember agree">
              <div>
                <v-icon @click="isremember = !isremember" v-if="!isremember">
                  mdi-circle-outline
                </v-icon>
                <v-icon @click="isremember = !isremember" v-else>
                  mdi-circle-slice-8
                </v-icon>
                Agree on <a href="">Terms and Conditions</a>
              </div>
            </div>
            <v-btn @click="register" color="primary" :disabled="!isremember" width="100%">REGISTER</v-btn>
            <p class="signup">Already a member? <strong @click="goTo('contractor-login')">Login</strong></p>
          </v-form>
        </div>

        <div class="authen_footer">
          <span>Municipality La Trinidad, Benguet</span>
          <span>All rights reserved</span>
          <span>2022</span>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: 'blank',
  auth:false,
  data() {
    return {
      passwordRules: [v => !!v || "Password is required"],
      confirmPasswordRules: [v => !!v || "Password is required"],
      valid: true,
      payload: {
        email: '',
        password: ''
      },
      isremember: false
    }
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.payload.password === this.payload.repeat_password || "Password must match";
    }
  },
  methods: {
    register() {
      if (!this.$refs.form.validate()) return
      this.$axios.post('register-contractor', this.payload)
        .then(({ data }) => {
          console.log(data, 'test')
          this.goTo('contractor-login')
        })
        .catch(error => {
          alert('all fields are required')
        });
    },
    remember() {
      console.log(this.isremember, "dhjsdjshdjsdhj")
      if (this.isremember == 1) this.isremember = 0
    },
    login() {

    },
  }
};
</script>
<style lang="scss" scoped>
.container.login-main-container {
  padding: 0;
}

form button.v-btn {
  background: #EBEE00 !important;
  color: #000;
}

.v-btn:before {
  opacity: 0 !important;
}

.v-ripple__container {
  opacity: 0 !important;
}

.login-main-container {
  height: 100vh;
  display: grid;
  place-items: center;
  width: 100%;
  background-color: #c5c7cc;

  .inner-container {
    display: flex;
    width: 100%;
    max-width: 1920px;
    height: 100vh;
    max-height: 1117px;
    border: 1px solid #b6c4db;
    background-color: white;

    .image {
      // background-image: url('/images/login.svg');
      width: 50%;
      background-repeat: no-repeat;
      object-fit: contain;
    }

    .login-form {
      display: grid;
      place-items: center;
      width: 50%;

      .remember {
        display: flex;
        justify-content: space-between;

        p {
          cursor: pointer;
          color: rgb(59, 59, 219);
        }

        // padding-left: 44px;
      }

      .signup {
        margin-top: 1rem;
      }
    }
  }
}
</style>
