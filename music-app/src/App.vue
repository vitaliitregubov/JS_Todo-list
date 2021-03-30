<template>
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
  created() {
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
  background-image: url('./assets/main-bg.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center/center
  font-family: 'Mukta', sans-serif
  padding: 0
  margin: 0
  height: 100vh
  color: #fff



</style>