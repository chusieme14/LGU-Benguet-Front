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
          <h2>OTP</h2>
          <p>Please enter the 6 digit code that we sent your email address</p>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <label for="">Otp</label>
            <v-text-field
              v-model="payload.otp"
              :rules="[!!payload.otp || 'Otp is required']"
              required
              outlined
              dense
              hide-details="auto"
              class="mb-2"
            ></v-text-field>
            <label for="">New Password</label>
            <v-text-field
              v-model="payload.password"
              :rules="[!!payload.password || 'new password is required']"
              required
              outlined
              type="password"
              dense
              hide-details="auto"
              class="mb-2"
            ></v-text-field>
            <v-btn class="primary-btn" color="primary" @click="reset" width="100%">verify and proceed</v-btn>
            <v-btn class="cancel-btn" @click="$router.go(-1)" width="100%">Cancel</v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: "blank",
  auth:false,
  data(){
    return{
      valid: true,
      payload:{
        otp:'',
        password:''
      },
      isremember: false
    }
  },
  methods:{
    reset(){
      if(!this.$refs.form.validate()) return
      this.$axios.post(`resetpassword-contractor`, this.payload).then(({data}) => {
        console.log(data)
        this.$router.push({ path: '/contractor/login' })

      }).catch(error => {
          alert('error')
        });
    },
    remember(){
      console.log(this.isremember,"dhjsdjshdjsdhj")
      if(this.isremember==1) this.isremember = 0
    },
    gotoRegister(){
      this.$router.push({ path: '/contractor/register' })
    },
    login(){
      console.log("djshdjsdh")

    }
  }
};
</script>
<style lang="scss" scoped>
.v-form .v-input__slot {
  height: 50px;
}

.container.login-main-container {
  padding: 0;
}

form button.v-btn {
  background: #EBEE00 !important;
  color: #000;
  height: 50px !important;
  font-weight: 600;
  font-size: 20px;
}
  .v-btn:before {
    opacity: 0 !important;
  }

  .v-ripple__container {
    opacity: 0 !important;
  }
  .login-main-container{
    height: 100vh;
    display: grid;
    place-items: center;
    width: 100%;
    background-color: #c5c7cc;

    .inner-container{
      display: flex;
      width: 100%;
      max-width: 1920px;
      height: 100vh;
      max-height: 1117px;
      border: 1px solid #b6c4db;
      background-color: white;

      .image{
        // background-image: url('/images/login.svg');
        width: 50%;
        background-repeat: no-repeat;
        object-fit: contain;
      }
      .login-form{
        display: grid;
        place-items: center;
        width: 50%;

        .remember{
          display: flex;
          justify-content: space-between;

          p{
            cursor: pointer;
            color: rgb(59, 59, 219);
          }
          // padding-left: 44px;
        }

        .signup{
          margin-top: 1rem;
        }
      }
    }
  }
</style>
