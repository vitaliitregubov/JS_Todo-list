<template>
  <header class="page-header flex align-center between">
    <router-link to="/" class="logo"><h1>InterStore</h1></router-link>
    <section class="flex align-center">
      <div v-if="userLoggedIn" class="flex align-center relative">
        <button @click.stop="accountMenuShown = !accountMenuShown" data-account-menu="sdf" class="account-menu-btn">
          <i class="fad fa-user"></i>
        </button>
        <router-link :to="{ name: 'Cart' }" class="cart-link" :data-quantity="chosenProducts.length" title="cart">
          <i class="fal fa-shopping-cart"></i>
        </router-link>
        <div :class="[{ shown: accountMenuShown}, { dark: theme  === 'dark' }, 'account-settings-menu']" data-account-menu="sfd">
          <input type="checkbox" id="mode" :checked="theme === 'dark'" class="mode-input" @change="toggleMode" />
          <label for="mode" class="mode-label">Dark mode</label>
          <a href="#" @click.prevent="signOut" class="logout" title="sign out">Log out</a>
        </div>
      </div>

      <a v-else href="#" @click.prevent="toggleModal" class="auth border-rounded">Log in / Sign up</a>
    </section>
  </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      theme: '',
      accountMenuShown: false
    }
  },
  computed: {
    ...mapState(['userLoggedIn', 'chosenProducts'])
  },
  methods: {
    ...mapMutations(['toggleModal']),
    signOut() {
      this.$store.dispatch('logOut')

      this.$store.commit('clearCart')

      this.$route.meta.requiresAuth && 
        this.$router.push({ name: 'Home' })
    },
    toggleMode() {
      const newTheme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      window.document.body.setAttribute('data-mode', newTheme)
      this.theme = newTheme
    },
    closeAccountMenu(target) {
      if (!target.parentElement) return

      if (!target.dataset.accountMenu && !target.parentElement.dataset.accountMenu) {
        this.accountMenuShown = false
      }
    }
  },
  created() {
    !localStorage.getItem('theme') && localStorage.setItem('theme', 'light')
    const theme = localStorage.getItem('theme')
    window.document.body.setAttribute('data-mode', theme)
    this.theme = theme

    window.document.body.addEventListener('click', ({ target }) => this.closeAccountMenu(target))
  },
  beforeUnmount() {
    window.document.body.removeEventListener('click', this.closeAccountMenu)
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

@media(max-width: 550px)
  .logo
    display: none

.page-header
  padding: 0 15px
  height: 60px
  background-color: #fff

  .account-menu-btn
    width: 36px
    height: 36px
    border-radius: 50%
    color: inherit
    line-height: 36px
    font-size: 1.2rem
    border: 2px solid

    &:focus,
    &:hover
      outline: none
      color: $color-active

  .account-settings-menu
    position: absolute
    z-index: 100
    display: none
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3)
    background-color: #fff
    right: 0
    top: 50px
    height: 90px
    width: 200px
    padding: 15px 0

    .logout
      width: 100%
      height: 30px
      line-height: 30px
      padding-left: 20px
      

      &:hover
        color: $color-active
        background-color: rgba(0, 0, 0, 0.1)

    &.dark
      background-color: #333

      .logout:hover,
      .mode-label:hover
        background-color: rgba(255, 255, 255, 0.1)

    &.shown
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: flex-end

    .mode-label
      padding-left: 20px
      width: 100%
      height: 30px
      line-height: 30px

      &::before,
      &::after
        @include pseudoEl
        background-color: #ddd
        width: 40px
        height: 20px
        border-radius: 25px
        right: 20px
        top: 4px

      &::after
        right: 40px
        width: 20px
        height: 20px
        border-radius: 50%
        background-color: #888
        transition: all .3s ease

      &:hover
        color: $color-active
        background-color: rgba(0, 0, 0, 0.05)

    .mode-input
      display: none

      &:checked ~ .mode-label::before
        background-color: $color-active

      &:checked ~ .mode-label::after
        transform: translateX(20px)
        background-color: #fff

  .auth
    color: #fff
    background-color: $color-accent
    padding: 8px 24px
    letter-spacing: .05rem
    font-size: 1.2rem

  .cart-link
    position: relative
    margin-left: 30px
    margin-right: 10px
    font-size: 2rem 

    &:hover
      color: $color-active
    
    &::before
      @include pseudoEl
      content: attr(data-quantity)
      top: -5px
      left: 20px
      font-size: 0.8rem
      width: 20px
      height: 20px
      line-height: 20px
      border-radius: 50%
      color: #fff
      background-color: $color-active
      text-align: center
</style>