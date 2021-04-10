<template>
  <main class="product-details-page container">
    <h2>{{ findProduct.name }} details:</h2>
  </main>
</template>

<script>
export default {
  name: 'ProductDetails',
  computed: {
    findProduct() {
      return this.$store.state.products.find(item => Number(item.id) === Number(this.$route.params.id))
    }
  },
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

.product-details-page

  h2
    text-align: center
    font-weight: 400
    font-size: 2rem
    margin-bottom: 15px

</style>