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
      <div class="login-form update-password">
        <div>
          <img src="/images/logo.png" alt="">
          <h2>Enter new password</h2>
          <p>Your new password must be different from previously used password.</p>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <label for="">Password</label>
            <v-text-field
              v-model="payload.password"
              placeholder="*****"
              type="password"
              required
              outlined
              dense
              :append-icon="show1 ? 'Hide' : 'Show'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            >
            </v-text-field>
            <label for="">Confirm Password</label>
            <v-text-field
              v-model="payload.confirm_password"
              placeholder="*****"
              type="password"
              required
              outlined
              dense
              :append-icon="show2 ? 'Hide' : 'Show'"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
            ></v-text-field>
            <v-btn @click="login" color="primary" width="100%">Change my password</v-btn>
            <v-btn class="cancel-btn" width="100%">Cancel</v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: "login",
  data(){
    return{
      show1: false,
      show2: false,
      password: 'Password',
      valid: true,
      payload:{
        confirm_password:'',
        password:''
      },
      isremember: false,
    }
  },
  methods:{
    remember(){
      console.log(this.isremember,"dhjsdjshdjsdhj")
      if(this.isremember==1) this.isremember = 0
    },
    gotoRegister(){
      this.$router.push({ path: '/contractor/register' })
    },
    login(){
      if(!this.$refs.form.validate()) return
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