<template>
  <header class="page-header">
    <router-link :to="{ name: 'App' }" class="logo"><h2>FakeDeezer</h2></router-link>
    <ul>
      <li v-if="!userLoggedIn">
        <a href="#" @click.prevent="toggleAuthModal"> Log in / Register</a>
      </li>
      <template v-else>
        <li>
          <a href="#" @click.prevent="logOut"><i class="fal fa-sign-out"></i> Log out </a>
        </li>
        <li>
          <router-link :to="{ name: 'account' }">
            <i class="far fa-user-circle"></i>
            <span>Account</span>
          </router-link>
        </li>
      </template>
    </ul>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userLoggedIn"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal", "logOut"]),

    logOut() {
      this.$store.dispatch("logOut");

      // redirect to Home page after user logs out from Account page
      this.$route.meta.requiresAuth && this.$router.push({ name: "App" });
    },
  },
  // mounted() {
  //   console.log(this.$route)
  // }
};
</script>

<style lang="sass">
@mixin flex
  display: flex
  align-items: center
  justify-content: space-between

a
  color: inherit

  &.router-link-exact-active
    color: #ef5466

.page-header
  @include flex
  color: #fff
  background-color: #222
  padding-left: 50px

  .logo
    color: #ef5466
    text-decoration: none


  ul
    display: flex
    list-style: none

    li
      margin-right: 50px

      i
        font-size: 20px
        vertical-align: middle
        padding-right: 10px

        &.fa-sign-out
          transform: rotate(180deg)
          padding-left: 10px
          font-weight: 100
</style>