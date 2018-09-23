<template>
  <v-toolbar dark color="teal lighten-1">
    <v-toolbar-side-icon v-if="$store.state.isUserLoggedIn"></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">bl'O't</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items><v-btn flat dark >About us</v-btn></v-toolbar-items>
    <v-toolbar-items><v-btn flat dark>Contact us</v-btn></v-toolbar-items>
    <v-toolbar-items><v-btn flat dark @click="navigateTo({name:'signup'})" v-if="!$store.state.isUserLoggedIn">Sign up</v-btn ></v-toolbar-items>
    <v-toolbar-items><v-btn flat dark @click="navigateTo({name:'login'})" v-if="!$store.state.isUserLoggedIn">Login</v-btn></v-toolbar-items>
    <v-toolbar-items><v-btn flat dark @click="logout" v-if="$store.state.isUserLoggedIn">logout</v-btn></v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default{
  data () {
    return {

    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    },
    homenav () {
      if (!this.$store.state.isUserLoggedIn) {
        this.$router.push({
          name: 'home'
        })
      }
    }
  }
}

</script>
<style>
.v-btn{
  font-family:roboto;
  size: 120%;
}
.v-toolbar__title{
font-family:'Times New Roman', Times, serif;
size:175%;
font-size: 40px;
}

</style>
