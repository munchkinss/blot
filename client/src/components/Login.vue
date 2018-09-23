<template>
<v-app>
<v-container>
  <v-layout>
    <v-flex xs12 md8>
  <v-container class="form-box">
      <div class="headline">
      <h2 class="teal--text text-xs-center" >LOGIN</h2>
      </div>
    <v-text-field
            label="username"
            v-model="user.username"
            outline
          ></v-text-field>
    <v-text-field
            type='password'
            label="password"
            v-model="user.password"
            outline
          ></v-text-field>
          <div class="button-login">
    <v-btn large color="teal lighten-1" flat dark block @click="login">Login<v-icon>account_circle</v-icon></v-btn>
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
  </v-flex>
  </v-layout>
  </v-container>
</v-app>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      error: null
    }
  },
  watch: {

  },
  methods: {
    async login () {
      try {
        // eslint-disable-next-line
        const response = await AuthenticationService.login({
          username: this.user.username,
          password: this.user.password

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
  margin:100px auto auto auto;
}
.button-login{
  padding-left: 15%;
  padding-right: 15%;
}
</style>
