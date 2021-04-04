<template>
<section class="page-not-found">
  <img src="../assets/404.png" alt="not-found-page">
  <h2>404: Page not found</h2>
  <router-link :to="{ name: 'Home' }">Return to the Home page</router-link>
</section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.page-not-found
  padding-top: 10vh
  display: flex
  flex-direction: column
  align-items: center

  a
    margin-top: 20px
    text-decoration: none
    border-radius: 25px
    padding: 10px 20px
    color: #fff
    background-color: #333
    letter-spacing: 0.1rem

    &:hover
      opacity: 0.9

  img
    height: 40vh
    width: auto
</style>