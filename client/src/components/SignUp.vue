<template>
<v-app>
<v-container>
  <v-layout>
    <v-flex xs12 md8 >
  <div>
    <v-container class="form-box">
      <div class="headline">
      <h2 class="teal--text text-xs-center" >Register Here</h2>
      </div>

    <v-text-field
            label="Name"
            v-model="user.name"
            outline
          ></v-text-field>
    <v-text-field
            label="username"
            v-model="user.username"
            outline
          ></v-text-field>
    <v-text-field
            label="e-mail"
            v-model="user.email"
            outline
          ></v-text-field>
    <v-text-field
            type='password'
            label="password"
            v-model="user.password"
            outline
          ></v-text-field>
    <v-radio-group v-model="user.gender" row>
      <v-radio
        label="Male"
        value="male"
        color="primary"
      ></v-radio>
      <v-radio
        label="Female"
        value="female"
        color="pink"
      ></v-radio>
    </v-radio-group>
    <div class="button-signup">
   <v-btn large color="teal lighten-1" @click="signup" flat dark block>Sign me up!<v-icon>done_all</v-icon></v-btn>
   </div>
    <br>
    <v-alert
      :value="error"
      color="error"
      icon="warning"
      outline
    >
      {{error}}
    </v-alert>
    </v-container>
  </div>
  </v-flex>
  </v-layout>
  </v-container>
</v-app>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Signup',
  data () {
    return {
      user: {
        name: '',
        username: '',
        email: '',
        password: '',
        gender: ''
      },
      error: null
    }
  },
  watch: {

  },
  methods: {
    async signup () {
      try {
        // eslint-disable-next-line
        const response = await AuthenticationService.signup({
          name: this.user.name,
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
          gender: this.user.gender

        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.form-box{
  margin:auto;
  padding:1%;
  vertical-align: baseline;
  align-content: center;
}
h2{
  padding: 1%;
}
.v-btn{
  height: 70px;
  font-size:20px;
}
.flex{
  margin:50px auto auto auto;
}
.button-signup{
  padding-left: 15%;
  padding-right: 15%;
}
</style>
