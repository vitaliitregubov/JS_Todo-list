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
  }
}
</script>

<style lang="sass">
$color-active: #EF5466

*
  box-sizing: border-box
  margin: 0
  padding: 0
</style>
