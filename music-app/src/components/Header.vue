<template>
  <header>
    <h2>HEADER</h2>
    <ul>
      <li v-if="!userLoggedIn">
        <a href="#" @click.prevent="toggleAuthModal">
          Login / Register
        </a>
      </li>
      <template v-else>
        <li>
          <a href="#" @click.prevent="logOut">
            Log out
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="">
            Manage
          </a>
        </li>
      </template>
    </ul>
  </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['userLoggedIn'])
  },
  methods: {
    ...mapMutations(['toggleAuthModal', 'logOut']),
  }
}
</script>

<style>

</style>