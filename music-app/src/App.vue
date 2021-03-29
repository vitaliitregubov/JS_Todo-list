<template>
  <router-link :to="{ name: 'Account' }">Go to your account -></router-link>
  <hr>

  <AppHeader />

  <AuthModal />

  <router-view />
</template>

<script>
import AppHeader from "./components/Header";
import AuthModal from "./components/AuthModal";

export default {
  name: "App",
  components: {
    AppHeader,
    AuthModal,
  },
  creted() {
    this.$store.dispatch('initLogin') // check if a user had been logged in
  }
};
</script>

<style lang="sass">
*
  box-sizing: border-box
  margin: 0
  padding: 0

body
  font-family: 'Mukta', sans-serif
  padding: 0
  margin: 0

</style>