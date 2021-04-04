<template>
  <Header />
  <AuthModal />

  <router-view />
</template>

<script>
import AuthModal from '@/views/AuthModal';
import Header from '@/components/Header';

export default {
  components: {
    AuthModal,
    Header
  },
  created() {
    this.$store.dispatch('initLogin')
  },
}
</script>

<style lang="sass">
*
  box-sizing: border-box
  margin: 0
  padding: 0

body
  font-family: 'Lato', sans-serif
  color: #444
  background-color: #fff
</style>
