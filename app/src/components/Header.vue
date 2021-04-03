<template>
  <header class="page-header">
    <section class="logo"><h1>InterStore</h1></section>
    <section class="auth-modal">
      <a href="#" v-if="!userLoggedIn" @click.prevent="toggleModal">Login / Registration</a>
      <a href="#" v-else @click.prevent="logOut">Logout</a>
    </section>
  </header>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapMutations(['toggleModal']),
    ...mapActions(['logOut']),
  },
  computed: {
    ...mapState(['userLoggedIn'])
  }
}
</script>

<style lang="sass" scoped>
.page-header
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 30px
  background-color: #333
  height: 40px
  color: #fff

  a
    color: inherit
</style>