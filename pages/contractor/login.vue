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
              :rules="[!!payload.password || 'Password is required']"
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
            <p class="signup">Don’t have an account? <strong class="csr" @click="gotoRegister">Signup</strong></p>
          </v-form>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  layout:'blank',
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
    // login(){
    //   this.$axios.post('login-contractor').then()

    // }
    async login(){
      if(!this.$refs.form.validate()) return
            try {
              // this.loading =true
                let loginCredential = this.payload
                console.log(loginCredential, 'test')
                await this.$auth.loginWith('local',{
                    data: {
                        email:loginCredential.email,
                        password:loginCredential.password,
                    }
                })
                if(this.$auth.user){
                    this.loading = false
                    localStorage.setItem('nav',2)
                    this.goTo('awarded-projects')
                }
            } catch (error) {
              alert(error.response.data.message)
                // this.$errorNotification(error.response.data.message)

            }
        },
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
