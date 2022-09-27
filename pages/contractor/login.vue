<template>
  <v-container class="login-main-container" fluid>
    <div class="inner-container">
      <div class="image hidden-xs-only">
        <v-img src="/images/login-hero-img.jpg"/>
      </div>
      <div class="login-form">
        <div>
          <h2>La Trinidad, Benguet</h2>
          <p>The Strawberry and Rose Capital of the Philippines</p>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <label for="">Email</label>
            <v-text-field
              v-model="payload.email"
              :rules="[!!payload.email || 'Email is required']"
              placeholder="@mail.com"
              required
              outlined
              dense
              hide-details="auto"
              class="mb-2"
            ></v-text-field>
            <label for="">Password</label>
            <v-text-field
              v-model="payload.password"
              placeholder="*****"
              type="password"
              required
              outlined
              dense
            ></v-text-field>
            <div class="remember">
                <div>
                  <v-icon  @click="isremember=!isremember" v-if="!isremember">
                    mdi-circle-outline
                  </v-icon>
                  <v-icon  @click="isremember=!isremember" v-else>
                    mdi-circle-slice-8
                  </v-icon>
                  Remember me
                </div>
                <p>Forgot Password</p>
            </div>
            <v-btn @click="login" color="primary" width="100%">LOGIN</v-btn>
            <p class="signup">Don’t have an account? <strong @click="gotoRegister">Signup</strong></p>
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
      valid: true,
      payload:{
        email:'',
        password:''
      },
      isremember: false
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
      width: 70%;
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