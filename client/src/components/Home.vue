<template>
<v-app>
  <v-container fluid>
    <v-layout row wrap align-center>
    <v-flex xs6><app-signup></app-signup></v-flex>
    <v-flex xs6><app-login></app-login></v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
import SignUp from './SignUp'
import Login from './Login'
export default{
  components: {
    'app-signup': SignUp,
    'app-login': Login
  },
  data () {
    return {

    }
  }
}

</script>
<style>

</style>
