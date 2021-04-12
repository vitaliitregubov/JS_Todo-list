<template>
  <ul class="breadcrumbs flex">
    <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
    <li v-for="link in fullPath" :key="link">{{ link }}</li>
  </ul>
</template>

<script>
export default {
  computed: {
    fullPath() {
      return this.$route.fullPath.split('/').filter(item => item && item !== '/')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'
.breadcrumbs
  padding: 0 20px
  height: 40px
  line-height: 40px

  li
    position: relative
    margin-right: 30px

    &:first-of-type:hover
      text-decoration: underline

    &:not(:last-child)::before
      @include pseudoEl
      content: ">"
      right: -20px
      opacity: 0.5
</style>