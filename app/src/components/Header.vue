<template>
  <header class="page-header flex align-center between border-bottom">
    <router-link to="/" class="logo"><h1>InterStore</h1></router-link>
    <section class="flex align-center">
      <div class="flex align-center" title="dark-mode">
        <input type="checkbox" id="mode" class="mode-input" @change="toggleMode" />
        <label for="mode" class="mode-label border-rounded"></label>
      </div>
      <a v-if="!userLoggedIn" href="#" @click.prevent="toggleModal" class="auth border-rounded">Log in / Sign up</a>
      <template v-else>
        <router-link :to="{ name: 'Cart' }" class="menu-link cart" :data-quantity="chosenProducts.length">
          <i class="far fa-user"></i>
          Cart
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
    },
    toggleMode() {
      const currentMode = window.document.body.dataset.mode || 'light'
      const setMode = currentMode === 'light' ? 'dark' : 'light'
      window.document.body.setAttribute('data-mode', setMode);
    }
  },
  computed: {
    ...mapState(['userLoggedIn', 'chosenProducts'])
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

@media(max-width: 550px)
  .logo
    display: none

.page-header
  position: fixed
  left: 0
  right: 0
  z-index: 100
  padding: 0 15px
  height: 60px

  .mode-label
    width: 40px
    height: 20px
    background-color: lightgrey
    margin-right: 20px

    &::before
      @include pseudoEl
      left: 0
      bottom: 0
      width: 20px
      height: 20px
      border-radius: 50%
      background-color: #888
      transition: all .3s ease

  .mode-input
    display: none

    &:checked ~ .mode-label
      background-color: $color-active

      &::before
        transform: translateX(20px)
        background-color: #555 

  .auth
    color: #fff
    background-color: $color-accent
    padding: 8px 24px
    letter-spacing: .05rem
    font-size: 1.2rem

  .menu-link
    padding: 8px 0
    margin-left: 40px

    i
      vertical-align: middle
      padding-right: 10px
      font-size: 1.6rem  

    &.cart
      position: relative
    
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