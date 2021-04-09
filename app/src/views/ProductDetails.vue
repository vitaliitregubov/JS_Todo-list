<template>
  <main class="product-details-page container">
    <h2>{{ product.name }} details:</h2>
    <section class="product-info-wrap">
      <nav class="product-nav">
        <ul class="flex">
          <li @click="activeTab='TechSpecs'" :class="[{ active : activeTab === 'TechSpecs' }, 'nav-tab']">Tech specs</li>
          <li @click="activeTab='Reviews'" :class="[{ active : activeTab === 'Reviews' }, 'nav-tab']">Reviews</li>
        </ul>
      </nav>
      
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      id: null,
      activeTab: 'TechSpecs'
    }
  },
  computed: {
    getProduct() {
      return this.$store.state.products.find(item => Number(item.id) === Number(this.$route.params.id))
    }
  },

  created() {
    this.product = this.getProduct
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

  .product-info-wrap
    height: 200vh

    .product-nav
      position: sticky
      top: 60px
      color: #0091cd
      border: 1px solid $color-active
      border-left: none
      border-right: none

      li
        padding: 0 20px
        font-size: 1.2rem
        line-height: 40px
        height: 100%
        cursor: pointer

        &:hover
          color: $color-active

        &.active
          color: $color-active
</style>