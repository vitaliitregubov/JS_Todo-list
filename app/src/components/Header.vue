<template>
  <header class="page-header">
    <router-link to="/" class="logo"><h1>InterStore</h1></router-link>
    <section class="auth-modal">
      <a href="#" v-if="!userLoggedIn" @click.prevent="toggleModal" class="auth">Login / Registration</a>
      <template v-else>
      <router-link :to="{ name: 'Account' }" class="menu-link account">
        <i class="far fa-user"></i>
        Account
      </router-link>
      <a href="#" @click.prevent="signOut" class="menu-link logout">
        <i class="far fa-sign-out"></i>
        Log out
      </a>
      </template>
    </section>
  </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapMutations(['toggleModal']),
    signOut() {
      this.$store.dispatch('logOut');

      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'Home' })
      }
    }
  },
  computed: {
    ...mapState(['userLoggedIn'])
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/variables'

a
  text-decoration: none

.page-header
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 40px 0 20px
  height: 60px
  color: #464646
  border-bottom: 1px solid rgba(0, 0, 0, .1)

  .auth
    color: #fff
    background-color: rgb(45, 150, 200)
    border: 2px solid
    border-radius: 30px
    padding: 8px 20px
    letter-spacing: .05rem
    font-size: 1.2rem

  .menu-link
    padding: 8px 0

    i
      vertical-align: middle
      padding-right: 10px
      font-size: 1.6rem

    & + &
    margin-left: 40px

  a
    color: inherit

    &.router-link-exact-active
      color: $color-active

    &.logo
      text-decoration: none
      color: $color-active

    
      
</style>