<template>
   <h2 class="info" v-if="!userLoggedIn">Please Register an Account or Log in to use this App</h2>
   <h2 class="info" v-else>Thank you! Feel free to navigate to your Account now</h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['userLoggedIn'])
  },

}
</script>

<style lang="sass" scoped>
.info
  font-weight: 400
  font-size: 30px
  margin-left: 50px
</style>